create extension if not exists "uuid-ossp";

create table public.merchants (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  business_name text not null, dba_name text, email text not null, phone text not null,
  address text not null, city text not null, state text not null, zip text not null,
  ein text not null, status text not null default 'pending' check (status in ('pending','approved','suspended','closed')),
  mid text unique, plan text not null default 'starter' check (plan in ('starter','growth','enterprise')),
  created_at timestamptz default now() not null, updated_at timestamptz default now() not null
);

create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  merchant_id uuid references public.merchants(id) on delete cascade not null,
  transaction_id text unique not null, amount numeric(10,2) not null,
  fee numeric(10,2) not null default 0, net_amount numeric(10,2) not null,
  status text not null check (status in ('approved','declined','pending','settled','refunded','disputed','voided')),
  card_type text not null check (card_type in ('visa','mastercard','amex','discover','other')),
  card_last4 text not null, cardholder_name text not null, auth_code text,
  response_text text not null, created_at timestamptz default now() not null, settled_at timestamptz
);

create table public.payouts (
  id uuid default uuid_generate_v4() primary key,
  merchant_id uuid references public.merchants(id) on delete cascade not null,
  amount numeric(10,2) not null, fee numeric(10,2) not null default 0,
  net_amount numeric(10,2) not null, bank_last4 text not null,
  status text not null default 'pending' check (status in ('pending','processing','deposited','failed')),
  estimated_deposit date not null, deposited_at timestamptz, created_at timestamptz default now() not null
);

create table public.disputes (
  id uuid default uuid_generate_v4() primary key,
  merchant_id uuid references public.merchants(id) on delete cascade not null,
  transaction_id uuid references public.transactions(id) on delete cascade not null,
  amount numeric(10,2) not null, reason_code text not null, reason_description text not null,
  status text not null default 'open' check (status in ('open','under_review','won','lost','expired')),
  response_deadline date not null, created_at timestamptz default now() not null
);

create table public.merchant_applications (
  id uuid default uuid_generate_v4() primary key,
  business_name text not null, dba_name text, business_type text not null,
  ein text not null, website text, monthly_volume text not null, average_ticket text not null,
  owner_first_name text not null, owner_last_name text not null,
  owner_email text not null, owner_phone text not null, owner_dob text not null,
  address text not null, city text not null, state text not null, zip text not null,
  bank_name text not null, routing_number text not null, account_last4 text not null,
  status text not null default 'submitted' check (status in ('submitted','under_review','approved','declined')),
  created_at timestamptz default now() not null
);

create table public.quote_requests (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  business_name text not null,
  current_processor text,
  monthly_volume text,
  average_ticket text,
  order_location text,
  payment_method text,
  payment_timing text,
  takes_moto_orders boolean default false,
  needs_mobile_payment boolean default false,
  statement_urls text[],
  has_statement boolean default false,
  notes text,
  status text default 'new' check (status in ('new','analyzing','quoted','converted','lost')),
  created_at timestamptz default now() not null
);

alter table public.merchants enable row level security;
alter table public.transactions enable row level security;
alter table public.payouts enable row level security;
alter table public.disputes enable row level security;

create policy "merchants_own" on public.merchants for all using (auth.uid() = user_id);
create policy "transactions_own" on public.transactions for all using (merchant_id in (select id from public.merchants where user_id = auth.uid()));
create policy "payouts_own" on public.payouts for all using (merchant_id in (select id from public.merchants where user_id = auth.uid()));
create policy "disputes_own" on public.disputes for all using (merchant_id in (select id from public.merchants where user_id = auth.uid()));
