-- Migration: leads and tickets tables
-- Run via Supabase Dashboard > SQL Editor, or `supabase db push`

-- ── leads ────────────────────────────────────────────────────────────────────

create table if not exists leads (
  id                  uuid primary key default gen_random_uuid(),
  name                text not null,
  business_name       text not null,
  email               text not null,
  phone               text not null default '',
  monthly_volume      text not null default '',
  source              text not null default 'other',
  status              text not null default 'new',
  notes               text not null default '',
  pipedrive_person_id text,
  pipedrive_org_id    text,
  pipedrive_deal_id   text,
  pipedrive_synced_at timestamptz,
  created_at          timestamptz not null default now()
);

-- status check
alter table leads
  add constraint leads_status_check
  check (status in ('new','contacted','qualified','proposal','won','lost','converted'));

-- source check
alter table leads
  add constraint leads_source_check
  check (source in ('website','quote','contact','apply','referral','partner','other','manual'));

-- useful indexes
create index if not exists leads_status_idx    on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx      on leads (email);

-- RLS: only service-role (admin client) can read/write — no public access
alter table leads enable row level security;

-- ── tickets ──────────────────────────────────────────────────────────────────

create table if not exists tickets (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid references leads (id) on delete set null,
  account_id  text,
  name        text not null,
  email       text not null,
  subject     text not null,
  message     text not null,
  priority    text not null default 'normal',
  status      text not null default 'open',
  created_at  timestamptz not null default now()
);

alter table tickets
  add constraint tickets_priority_check
  check (priority in ('low','normal','high','urgent'));

alter table tickets
  add constraint tickets_status_check
  check (status in ('open','pending','in_progress','resolved','closed'));

create index if not exists tickets_status_idx     on tickets (status);
create index if not exists tickets_created_at_idx on tickets (created_at desc);
create index if not exists tickets_lead_id_idx    on tickets (lead_id);

alter table tickets enable row level security;
