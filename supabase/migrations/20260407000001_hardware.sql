-- Migration: equipment_catalog and equipment_orders tables
-- supabase/migrations/20260407000001_hardware.sql

-- ── equipment_catalog ─────────────────────────────────────────────────────────

create table public.equipment_catalog (
  id                        uuid primary key default gen_random_uuid(),
  name                      text not null,
  category                  text check (category in ('wireless_terminal','countertop_terminal','mobile_reader','pin_pad','printer','cash_drawer')),
  description               text,
  image_url                 text,
  purchase_price            decimal(10,2),
  lease_price_monthly       decimal(10,2),
  compatible_business_types text[],
  in_stock                  boolean default true,
  featured                  boolean default false,
  created_at                timestamptz default now()
);

alter table public.equipment_catalog enable row level security;

-- Public read (merchants browse the catalog)
create policy "equipment_catalog_public_read"
  on public.equipment_catalog for select
  using (true);

-- ── equipment_orders ──────────────────────────────────────────────────────────

create table public.equipment_orders (
  id               uuid primary key default gen_random_uuid(),
  merchant_id      uuid references public.merchants(id) on delete cascade,
  equipment_id     uuid references public.equipment_catalog(id) on delete restrict,
  order_type       text check (order_type in ('purchase','lease')),
  quantity         integer default 1,
  monthly_rate     decimal(10,2),
  purchase_price   decimal(10,2),
  status           text check (status in ('pending','approved','shipped','delivered','cancelled')) default 'pending',
  shipping_address jsonb,
  notes            text,
  created_at       timestamptz default now()
);

alter table public.equipment_orders enable row level security;

-- Merchants can read and insert their own orders
create policy "equipment_orders_own_read"
  on public.equipment_orders for select
  using (merchant_id in (select id from public.merchants where user_id = auth.uid()));

create policy "equipment_orders_own_insert"
  on public.equipment_orders for insert
  with check (merchant_id in (select id from public.merchants where user_id = auth.uid()));

-- ── seed: equipment_catalog ───────────────────────────────────────────────────

insert into public.equipment_catalog
  (name, category, description, purchase_price, lease_price_monthly, compatible_business_types, in_stock, featured)
values
  (
    'Dejavoo Z11 Wireless Terminal',
    'wireless_terminal',
    'Portable EMV/NFC terminal with 4G and Wi-Fi. Large color touchscreen, built-in receipt printer, all-day battery.',
    350.00, 15.00,
    array['auto_dealer','retail','restaurant','salon'],
    true, true
  ),
  (
    'Dejavoo Z8 Countertop Terminal',
    'countertop_terminal',
    'Full-featured countertop EMV/NFC terminal with integrated PIN pad. Ideal for fixed checkout environments.',
    250.00, 12.00,
    array['retail','restaurant','salon','barbershop'],
    true, true
  ),
  (
    'Dejavoo Z6 Mobile Terminal',
    'mobile_reader',
    'Compact Bluetooth card reader pairs with iOS and Android. Accepts EMV chip, swipe, and contactless.',
    199.00, 10.00,
    array['auto_dealer','mobile','events'],
    true, false
  ),
  (
    'Ingenico Move 5000',
    'wireless_terminal',
    'Enterprise-grade wireless terminal with 4G, Wi-Fi, and Bluetooth. Large backlit display and fast thermal printer.',
    399.00, 18.00,
    array['auto_dealer','retail','restaurant'],
    true, true
  ),
  (
    'Verifone VX520 Countertop',
    'countertop_terminal',
    'Reliable countertop workhorse. Supports EMV chip, magstripe, NFC/contactless, and PIN debit.',
    275.00, 13.00,
    array['retail','restaurant','barbershop'],
    true, false
  ),
  (
    'BBPOS Chipper 2X BT',
    'mobile_reader',
    'Ultra-compact Bluetooth reader for on-the-go merchants. Accepts chip and swipe. 400+ transactions per charge.',
    99.00, 5.00,
    array['mobile','events','popup'],
    true, false
  );
