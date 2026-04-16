// src/components/dashboard/EquipmentCatalogClient.tsx
'use client'

import { useState, useCallback } from 'react'
import { Wifi, Monitor, Smartphone, CreditCard, X, Plus, Minus, CheckCircle } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────

export interface CatalogItem {
  id: string
  name: string
  category: string
  description: string | null
  image_url: string | null
  purchase_price: number | null
  lease_price_monthly: number | null
  in_stock: boolean
  featured: boolean
}

export interface MerchantAddress {
  business_name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
}

interface OrderTarget {
  item: CatalogItem
  type: 'purchase' | 'lease'
}

// ── Constants ────────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  wireless_terminal:  'Wireless Terminal',
  countertop_terminal: 'Countertop',
  mobile_reader:      'Mobile Reader',
  pin_pad:            'PIN Pad',
  printer:            'Printer',
  cash_drawer:        'Cash Drawer',
}

const FILTERS = [
  { key: 'all',                label: 'All'               },
  { key: 'wireless_terminal',  label: 'Wireless Terminals' },
  { key: 'countertop_terminal', label: 'Countertop'        },
  { key: 'mobile_reader',      label: 'Mobile Readers'     },
] as const

type FilterKey = typeof FILTERS[number]['key']

function CategoryIcon({ category, className }: { category: string; className?: string }) {
  const cls = className ?? 'h-10 w-10'
  if (category === 'wireless_terminal')  return <Wifi className={cls} />
  if (category === 'countertop_terminal') return <Monitor className={cls} />
  if (category === 'mobile_reader')       return <Smartphone className={cls} />
  return <CreditCard className={cls} />
}

function fmt(n: number | null): string {
  if (n === null) return '—'
  return `$${n.toFixed(2)}`
}

// ── Equipment Card ────────────────────────────────────────────────────────────

function EquipmentCard({
  item,
  onOrder,
}: {
  item: CatalogItem
  onOrder: (item: CatalogItem, type: 'purchase' | 'lease') => void
}) {
  const label = CATEGORY_LABELS[item.category] ?? item.category

  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      {/* Image / icon area */}
      <div className="flex items-center justify-center bg-gray-50 h-44 relative">
        {item.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image_url}
            alt={item.name}
            className="h-full w-full object-contain p-6"
          />
        ) : (
          <CategoryIcon category={item.category} className="h-16 w-16 text-gray-300" />
        )}
        {item.featured && (
          <span className="absolute top-3 left-3 bg-brand-dark text-brand-accent text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base leading-snug">{item.name}</h3>
            <span
              className={`shrink-0 mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                item.in_stock
                  ? 'bg-green-50 text-green-700'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${item.in_stock ? 'bg-green-500' : 'bg-gray-400'}`}
              />
              {item.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {label}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.description}</p>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Purchase */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Purchase</p>
            <p className="text-lg font-bold text-gray-900">{fmt(item.purchase_price)}</p>
            <p className="text-[11px] text-gray-400 mb-3">one-time</p>
            <button
              type="button"
              disabled={!item.in_stock || item.purchase_price === null}
              onClick={() => onOrder(item, 'purchase')}
              className="w-full rounded-lg bg-brand-dark text-white text-xs font-semibold py-1.5 hover:bg-brand-dark/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Buy
            </button>
          </div>

          {/* Lease */}
          <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-3">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Lease</p>
            <p className="text-lg font-bold text-gray-900">{fmt(item.lease_price_monthly)}</p>
            <p className="text-[11px] text-gray-400 mb-3">per month</p>
            <button
              type="button"
              disabled={!item.in_stock || item.lease_price_monthly === null}
              onClick={() => onOrder(item, 'lease')}
              className="w-full rounded-lg border border-brand-dark text-brand-dark text-xs font-semibold py-1.5 hover:bg-brand-dark hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Lease
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Order Modal ───────────────────────────────────────────────────────────────

function OrderModal({
  target,
  merchant,
  onClose,
}: {
  target: OrderTarget
  merchant: MerchantAddress
  onClose: () => void
}) {
  const { item, type } = target
  const price = type === 'purchase' ? item.purchase_price : item.lease_price_monthly
  const priceLabel = type === 'purchase' ? 'one-time' : '/month'

  const [quantity, setQuantity] = useState(1)
  const [address, setAddress]   = useState(merchant.address)
  const [city, setCity]         = useState(merchant.city)
  const [state, setState]       = useState(merchant.state)
  const [zip, setZip]           = useState(merchant.zip)
  const [phone, setPhone]       = useState(merchant.phone)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!address.trim() || !city.trim() || !state.trim() || !zip.trim()) {
      setError('All address fields are required')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/dashboard/equipment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          equipment_id: item.id,
          order_type: type,
          quantity,
          shipping_address: {
            name: merchant.business_name,
            address,
            city,
            state,
            zip,
            phone,
          },
        }),
      })
      const json = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Failed to place order')
        return
      }
      setSuccess(true)
    } catch {
      setError('Network error — please try again')
    } finally {
      setLoading(false)
    }
  }, [item.id, type, quantity, address, city, state, zip, phone, merchant.business_name])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Place equipment order"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
              {type === 'purchase' ? 'Purchase Order' : 'Lease Order'}
            </p>
            <h2 className="font-bold text-gray-900 text-base mt-0.5">{item.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center h-8 w-8 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {success ? (
          <div className="px-6 py-12 text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-bold text-gray-900">Order placed!</p>
            <p className="text-sm text-gray-500 mt-2">
              Your equipment order has been received. Our team will contact you within 1–2 business days
              to confirm shipping details.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-brand-dark text-white text-sm font-semibold hover:bg-brand-dark/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[80vh]">
            {/* Order summary */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {type === 'purchase' ? 'Unit price' : 'Monthly rate'}
                </span>
                <span className="font-bold text-gray-900">
                  {fmt(price)}{' '}
                  <span className="font-normal text-gray-400 text-xs">{priceLabel}</span>
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-600">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30"
                    disabled={quantity >= 20}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Total */}
              {price !== null && (
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">
                    {type === 'purchase' ? 'Total' : 'Monthly total'}
                  </span>
                  <span className="font-bold text-brand-dark">
                    {fmt(price * quantity)}{' '}
                    <span className="font-normal text-gray-400 text-xs">{priceLabel}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Shipping address */}
            <div className="px-6 py-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Shipping Address
              </p>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Street address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-3">
                  <label className="block text-xs text-gray-500 mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                    placeholder="St. Louis"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs text-gray-500 mb-1">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    maxLength={2}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm uppercase focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                    placeholder="MO"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">ZIP</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    maxLength={10}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                    placeholder="63101"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  placeholder="+1 (314) 555-0198"
                />
              </div>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-brand-dark py-3 text-sm font-semibold text-white hover:bg-brand-dark/90 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Placing order…' : `Place ${type === 'purchase' ? 'Purchase' : 'Lease'} Order`}
              </button>

              <p className="text-xs text-center text-gray-400">
                Our team will confirm your order within 1–2 business days.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function EquipmentCatalogClient({
  items,
  merchant,
}: {
  items: CatalogItem[]
  merchant: MerchantAddress
}) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [orderTarget, setOrderTarget]   = useState<OrderTarget | null>(null)

  const filtered = activeFilter === 'all'
    ? items
    : items.filter((item) => item.category === activeFilter)

  const handleOrder = useCallback((item: CatalogItem, type: 'purchase' | 'lease') => {
    setOrderTarget({ item, type })
  }, [])

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === key
                ? 'bg-brand-dark text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
            }`}
          >
            {label}
            {key === 'all' ? (
              <span className="ml-1.5 text-xs opacity-60">{items.length}</span>
            ) : (
              <span className="ml-1.5 text-xs opacity-60">
                {items.filter((i) => i.category === key).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-20 text-center">
          <Monitor className="h-10 w-10 text-gray-200 mb-3" />
          <p className="text-sm text-gray-400">No equipment in this category.</p>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <EquipmentCard key={item.id} item={item} onOrder={handleOrder} />
          ))}
        </div>
      )}

      {/* Order modal */}
      {orderTarget && (
        <OrderModal
          target={orderTarget}
          merchant={merchant}
          onClose={() => setOrderTarget(null)}
        />
      )}
    </>
  )
}
