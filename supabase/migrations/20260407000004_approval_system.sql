-- supabase/migrations/20260407000004_approval_system.sql
-- Merchant approval system: status history, application token, admin_users alias,
-- and hardened status constraints on merchant_applications.

-- ── application_token ────────────────────────────────────────────────────────
-- Opaque UUID attached at submission time; used to link history rows without
-- exposing the internal application id in emails.

ALTER TABLE public.merchant_applications
  ADD COLUMN IF NOT EXISTS application_token uuid NOT NULL DEFAULT gen_random_uuid();

CREATE UNIQUE INDEX IF NOT EXISTS merchant_applications_token_idx
  ON public.merchant_applications (application_token);

-- ── status column + constraint ───────────────────────────────────────────────
-- The apply route currently inserts status = 'submitted'.  We extend the
-- allowed set to include the admin-driven values so the check passes after
-- migration. We do NOT drop the existing 'submitted' value.

-- If a check constraint already exists on status, drop it first.
ALTER TABLE public.merchant_applications
  DROP CONSTRAINT IF EXISTS merchant_applications_status_check;

ALTER TABLE public.merchant_applications
  ADD CONSTRAINT merchant_applications_status_check
    CHECK (status IN ('submitted', 'pending', 'review', 'approved', 'declined'));

-- ── application_status_history ───────────────────────────────────────────────
-- Immutable append-only log.  Every status transition is recorded here.

CREATE TABLE IF NOT EXISTS public.application_status_history (
  id             uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid        NOT NULL REFERENCES public.merchant_applications(id) ON DELETE CASCADE,
  status         text        NOT NULL,
  changed_by     uuid        REFERENCES auth.users(id),
  notes          text,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS application_status_history_app_idx
  ON public.application_status_history (application_id, created_at DESC);

ALTER TABLE public.application_status_history ENABLE ROW LEVEL SECURITY;

-- Only service role may read or write this table.
CREATE POLICY "service_role_only" ON public.application_status_history
  USING (false)
  WITH CHECK (false);

-- ── admin_users (canonical name, backed by admin_profiles) ───────────────────
-- admin_profiles was created in migration 003.  We create a view named
-- admin_users so code can reference either name without a schema change.

CREATE OR REPLACE VIEW public.admin_users AS
  SELECT id, email, full_name, created_at FROM public.admin_profiles;

-- ── merchants: ensure user_id is present ─────────────────────────────────────
-- Older seed data may have rows without user_id.  The column is added as
-- nullable here; the approval flow always sets it. Enforce NOT NULL only after
-- back-filling existing rows in a later migration.

ALTER TABLE public.merchants
  ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

CREATE UNIQUE INDEX IF NOT EXISTS merchants_user_id_idx
  ON public.merchants (user_id)
  WHERE user_id IS NOT NULL;
