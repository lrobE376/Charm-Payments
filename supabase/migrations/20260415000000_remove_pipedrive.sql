-- Migration: Remove Pipedrive columns from leads table
-- Phase 5B cleanup — Pipedrive integration fully removed
-- Run: supabase db push  OR  psql $DATABASE_URL -f this_file.sql

ALTER TABLE leads
  DROP COLUMN IF EXISTS pipedrive_person_id,
  DROP COLUMN IF EXISTS pipedrive_org_id,
  DROP COLUMN IF EXISTS pipedrive_deal_id,
  DROP COLUMN IF EXISTS pipedrive_synced_at;
