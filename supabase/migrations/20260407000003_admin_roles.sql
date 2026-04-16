-- supabase/migrations/20260407000003_admin_roles.sql
-- Admin role flag on auth.users metadata + admin_notes table

-- Add is_admin to profiles (extend via user_metadata — checked at runtime)
-- We use a separate admin_profiles table so we never alter auth schema directly

CREATE TABLE IF NOT EXISTS public.admin_profiles (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      text NOT NULL,
  full_name  text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Only service role can read/write admin_profiles (checked server-side only)
CREATE POLICY "service_role_only" ON public.admin_profiles
  USING (false)
  WITH CHECK (false);

-- Admin notes — attached to merchant_applications
CREATE TABLE IF NOT EXISTS public.admin_notes (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid NOT NULL REFERENCES public.merchant_applications(id) ON DELETE CASCADE,
  admin_id       uuid NOT NULL REFERENCES auth.users(id),
  body           text NOT NULL,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX ON public.admin_notes (application_id);

ALTER TABLE public.admin_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_only" ON public.admin_notes
  USING (false)
  WITH CHECK (false);

-- Extend merchant_applications with review fields if not already present
ALTER TABLE public.merchant_applications
  ADD COLUMN IF NOT EXISTS reviewed_by    uuid REFERENCES auth.users(id),
  ADD COLUMN IF NOT EXISTS reviewed_at    timestamptz,
  ADD COLUMN IF NOT EXISTS decision_notes text;
