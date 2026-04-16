-- Migration: add current_terminal to merchant_applications
alter table public.merchant_applications
  add column if not exists current_terminal text;
