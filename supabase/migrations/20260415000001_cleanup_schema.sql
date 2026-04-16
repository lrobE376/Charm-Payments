-- Migration: Remove dashboard, admin, and equipment tables
-- Phase 5C cleanup — merchant portal, admin portal, and equipment catalog removed
-- Run: supabase db push  OR  psql $DATABASE_URL -f this_file.sql

-- ── Admin tables ──────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS admin_notes CASCADE;
DROP TABLE IF EXISTS admin_profiles CASCADE;
DROP TABLE IF EXISTS application_status_history CASCADE;

-- ── Merchant dashboard tables ─────────────────────────────────────────────────
DROP TABLE IF EXISTS equipment_orders CASCADE;
DROP TABLE IF EXISTS equipment_catalog CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS payouts CASCADE;
DROP TABLE IF EXISTS disputes CASCADE;

-- ── Simplify merchants table ──────────────────────────────────────────────────
-- user_id linked to Supabase Auth users (auth removed in Phase 5C)
ALTER TABLE merchants
  DROP COLUMN IF EXISTS user_id;

-- ── Simplify merchant_applications table ─────────────────────────────────────
-- reviewed_* columns were set by the admin portal (removed in Phase 5C)
ALTER TABLE merchant_applications
  DROP COLUMN IF EXISTS reviewed_by,
  DROP COLUMN IF EXISTS reviewed_at,
  DROP COLUMN IF EXISTS decision_notes,
  DROP COLUMN IF EXISTS application_token;
