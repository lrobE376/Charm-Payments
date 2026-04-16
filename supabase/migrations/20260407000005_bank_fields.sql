-- supabase/migrations/20260407000005_bank_fields.sql
-- Store safe bank metadata captured during merchant application.
-- Raw account/routing numbers are never stored — only last-4 digits and safe labels.

ALTER TABLE public.merchant_applications
  ADD COLUMN IF NOT EXISTS bank_name    text,
  ADD COLUMN IF NOT EXISTS account_type text CHECK (account_type IN ('checking', 'savings')),
  ADD COLUMN IF NOT EXISTS routing_last4 char(4);

-- account_last4 was added by the original schema; ensure the constraint is correct.
-- If the column does not exist, add it. If it does, this is a no-op.
ALTER TABLE public.merchant_applications
  ADD COLUMN IF NOT EXISTS account_last4 char(4);
