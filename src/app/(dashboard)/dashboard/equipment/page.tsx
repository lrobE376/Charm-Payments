// src/app/(dashboard)/dashboard/equipment/page.tsx
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import EquipmentCatalogClient from '@/components/dashboard/EquipmentCatalogClient'
import type { CatalogItem, MerchantAddress } from '@/components/dashboard/EquipmentCatalogClient'

export const metadata: Metadata = { title: 'Order Equipment — Dashboard' }

export default async function EquipmentPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: merchantRow } = await supabase
    .from('merchants')
    .select('id, business_name, email, phone, address, city, state, zip')
    .eq('user_id', user.id)
    .single()
  if (!merchantRow) redirect('/apply/pending')

  const merchant = merchantRow as {
    id: string
    business_name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
  }

  // Equipment catalog is public-read — use anon client (already in supabase)
  const { data: catalog } = await supabase
    .from('equipment_catalog')
    .select('id, name, category, description, image_url, purchase_price, lease_price_monthly, in_stock, featured')
    .order('featured', { ascending: false })
    .order('name')

  const items = (catalog ?? []) as CatalogItem[]

  const merchantAddress: MerchantAddress = {
    business_name: merchant.business_name,
    address: merchant.address ?? '',
    city: merchant.city ?? '',
    state: merchant.state ?? '',
    zip: merchant.zip ?? '',
    phone: merchant.phone ?? '',
    email: merchant.email,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Order Equipment</h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse and order payment terminals and accessories. Featured items ship within 3–5 business days.
        </p>
      </div>

      <EquipmentCatalogClient items={items} merchant={merchantAddress} />

      <p className="text-xs text-gray-400 text-center pt-2">
        All equipment is certified EMV and NFC. Questions?{' '}
        <a href="mailto:merchants@charmpayments.com" className="text-brand-dark hover:underline">
          Contact your account manager
        </a>
        .
      </p>
    </div>
  )
}
