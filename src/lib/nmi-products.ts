// src/lib/nmi-products.ts
// Shared NMI product data — sourced from official NMI product sheets

export interface GatewayFeature {
  id: string
  title: string
  description: string
  bullets: string[]
  badge?: string
}

export interface HardwareDevice {
  id: string
  name: string
  category: 'countertop' | 'mobile' | 'unattended'
  tagline: string
  description: string
  specs: { label: string; value: string }[]
  highlights: string[]
}

export const gatewayFeatures: GatewayFeature[] = [
  {
    id: 'virtual-terminal',
    title: 'Virtual Terminal',
    description:
      'Accept phone and mail-order payments from any browser. Swipe cards or key in payment details without any special hardware.',
    bullets: [
      'No additional hardware required',
      'Process phone & mail orders',
      'Full transaction history & reporting',
      'Supports all major card types',
    ],
  },
  {
    id: 'collect-checkout',
    title: 'Collect Checkout',
    description:
      'Let merchants accept payments via custom links or checkout buttons — no coding required. Ideal for smaller catalogs, invoicing, and donations.',
    bullets: [
      'PCI compliant — never touch card data',
      'Zero-code button generator',
      'Contactless payments via QR code',
      'Multi-currency support',
      'Streamlined checkout reduces abandonment',
    ],
  },
  {
    id: 'collect-js',
    title: 'Collect.js',
    description:
      'Give merchants full control of their checkout experience with one line of code. Payment data is tokenized so no sensitive data touches your servers.',
    bullets: [
      'Single line of code integration',
      'Full brand control over checkout UI',
      'PCI SAQ-A compliant — zero compliance burden',
      'Scales from simple forms to complex web apps',
      'Supports Google Pay & Apple Pay',
    ],
    badge: 'Developer Favorite',
  },
  {
    id: 'customer-vault',
    title: 'Customer Vault',
    description:
      'Securely store customer payment details for future use. Tokenization enables repeat transactions without ever recollecting sensitive data.',
    bullets: [
      'Level 1 PCI compliant since 2004',
      'Stores credit card & eCheck payment details',
      'Works with Automatic Card Updater',
      'Supports subscriptions, memberships & invoicing',
      'Seamless cross-channel customer experience',
    ],
  },
  {
    id: 'automatic-card-updater',
    title: 'Automatic Card Updater',
    description:
      'Up to 32% of subscription payments fail due to expired cards. ACU keeps cards on file always current by validating with card networks automatically.',
    bullets: [
      'Processor agnostic — any card, any processor',
      'No update = no charge',
      'Increased authorization rates',
      'Improved customer retention',
      'Merchant-defined custom schedules',
    ],
    badge: 'Subscription Essential',
  },
  {
    id: 'fraud-prevention',
    title: 'Fraud Prevention',
    description:
      'Customizable fraud filters detect suspicious transactions before they are approved. Set rules by threshold, user ban, IP, country, or card number.',
    bullets: [
      'Customizable rule sets — basic to advanced',
      'AVS, CVV, and duplicate transaction filters',
      'User ban by IP, card, or country',
      'Flagged transaction review queue',
      'Color-coded history reporting',
    ],
  },
  {
    id: '3ds-service',
    title: '3DS Service',
    description:
      'Trigger 3-D Secure authentication for faster, safer payment processing. Shifts chargeback liability and reduces fraud on card-not-present transactions.',
    bullets: [
      'Works with Collect.js, Customer Vault ID, or plain text',
      'Pop-up or inline challenge display',
      'Supports frictionless flow',
      'Chargeback liability shift with or without a card challenge',
      'Built into NMI Gateway.js',
    ],
  },
  {
    id: 'webhooks',
    title: 'Webhooks',
    description:
      'Subscribe to real-time transaction events instead of running repeated pull queries. Get instant HTTP POST notifications for every event that matters.',
    bullets: [
      'Real-time push notifications',
      'Covers sales, auth, capture, void, and more',
      'Success, failure, and unknown status alerts',
      'Set across full merchant client list',
      'Frees system resources vs. repeated polling',
    ],
    badge: 'Developer Tool',
  },
  {
    id: 'recurring-billing',
    title: 'Recurring Billing',
    description:
      'Automate subscription and membership billing. Set any schedule, and let the gateway handle the rest — including card updates when cards expire.',
    bullets: [
      'Flexible billing schedules',
      'Automated retry on decline',
      'Integrated with Customer Vault',
      'Detailed reporting per billing cycle',
      'Works with all major processors',
    ],
  },
  {
    id: 'quickbooks-syncpay',
    title: 'QuickBooks SyncPay',
    description:
      'Let merchants skip double entry. QuickBooks SyncPay handles payments start to finish inside QuickBooks — from processing to accounting entries.',
    bullets: [
      'Compatible with QuickBooks Pro, Premier & Enterprise',
      'Pay invoices and generate sales receipts in one step',
      'Process batch transactions',
      'Supports card-present swiped transactions',
      'Saves time managing accounting processes',
    ],
  },
  {
    id: 'google-pay',
    title: 'Google Pay',
    description:
      'Give merchants a faster, simpler checkout. Google Pay integrates with Collect Checkout, Collect.js, and the Direct Post API — set up in under a week.',
    bullets: [
      '100M+ Google Pay app downloads worldwide',
      'Reduces 28% cart abandonment from complex checkouts',
      'Multiple security layers protect payment data',
      'Works with Collect.js for full custom UX',
      'Quick setup — live in under a week',
    ],
  },
]

export const hardwareDevices: HardwareDevice[] = [
  {
    id: 'pax-a920',
    name: 'PAX A920 Android SmartPOS',
    category: 'mobile',
    tagline: 'The new breed of Android-powered POS',
    description:
      'The A920 is a fully wireless Android SmartPOS accepting EMV contact, contactless, and NFC smartphone payments. Its large 5" touchscreen and all-day battery make it ideal for retail, restaurants, and mobile businesses.',
    highlights: [
      '5" vivid color touchscreen',
      '4G, 3G, WiFi & Bluetooth',
      '5250mAh all-day battery',
      'Built-in thermal receipt printer',
      'Dual cameras with barcode scanning',
    ],
    specs: [
      { label: 'OS',             value: 'PayDroid (Android 7.1)' },
      { label: 'Processor',      value: 'Quad core Cortex A7' },
      { label: 'Display',        value: '5" 720x1280 capacitive touchscreen' },
      { label: 'Communications', value: 'GSM/CDMA, Bluetooth 4.0, WiFi 802.11 b/g/n' },
      { label: 'Card Readers',   value: 'EMV Contact, EMV Contactless, Magstripe' },
      { label: 'Printer',        value: '2" high speed thermal printer' },
      { label: 'Battery',        value: '5250mAh Lithium Ion' },
      { label: 'Security',       value: 'PCI PTS 5.x, EMV L1 & L2' },
    ],
  },
  {
    id: 'lane-3000',
    name: 'Ingenico Lane/3000',
    category: 'countertop',
    tagline: 'The new standard for high-volume POS',
    description:
      "The Lane/3000 is NMI's go-to countertop terminal for high-volume retail environments. It replaces the iPP320/350 with a PCI PTS 5.X certification and supports ChipDNA Cloud for fully cloud-based POS deployments.",
    highlights: [
      'Bright full-color 2.8" display',
      'USB & Ethernet connectivity',
      'PCI P2PE capable for simplified compliance',
      'ChipDNA Cloud support — no in-store PC needed',
      'Replaces iPP320/350 legacy terminals',
    ],
    specs: [
      { label: 'Processor',      value: 'Cortex A5, 64-bit' },
      { label: 'Display',        value: '2.8" backlit full-colour LCD' },
      { label: 'Communications', value: 'USB, Ethernet, RS232, Optional WiFi & Bluetooth' },
      { label: 'Card Readers',   value: 'EMV contact & contactless, Magstripe fallback' },
      { label: 'Physical',       value: '83 x 180 x 43mm, 254g' },
      { label: 'Security',       value: 'PCI PTS 5.X, EMV L1 & L2' },
      { label: 'Power',          value: '5V or 12V via serial interface' },
    ],
  },
  {
    id: 'lane-7000',
    name: 'Ingenico Lane/7000',
    category: 'countertop',
    tagline: 'High-volume multi-lane retail POS',
    description:
      'The Lane/7000 is designed for multi-lane retail environments with a large 5" screen, signature capture, and full omnichannel reporting. It supports ChipDNA and NMI Customer-Present Cloud for flexible deployment.',
    highlights: [
      '5" full-color display',
      'Signature capture by stylus or finger',
      'USB & Ethernet with optional WiFi & Bluetooth',
      'Supports NMI Customer-Present Cloud',
      'Replaces iSC480 — PCI PTS 5.X certified',
    ],
    specs: [
      { label: 'Processor',      value: 'Cortex A5, 64-bit' },
      { label: 'Display',        value: '5" backlit full-colour LCD' },
      { label: 'Communications', value: 'USB, Ethernet, RS232, Optional WiFi & Bluetooth' },
      { label: 'Card Readers',   value: 'EMV contact & contactless, Magstripe fallback' },
      { label: 'Physical',       value: '180 x 152 x 35mm, 583g' },
      { label: 'Security',       value: 'PCI PTS 5.X, EMV L1 & L2' },
      { label: 'Signature',      value: 'Stylus or finger capture' },
    ],
  },
]

export const solutionVerticals = [
  {
    id: 'retail',
    icon: '🏪',
    title: 'Retail',
    description:
      'Seamless POS integration for single locations or full multi-store chains. Unified reporting across all transactions in real time.',
  },
  {
    id: 'restaurant',
    icon: '🍽️',
    title: 'Restaurants',
    description:
      'Pay-at-table, phone orders, online orders, curbside, kiosk, and food truck — all in one gateway.',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile Businesses',
    description:
      'Accept EMV, contactless, Apple Pay, and Android Pay on any smartphone or tablet. Perfect for home services and field sales.',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-Commerce',
    description:
      '125+ shopping cart integrations, Collect.js, and Google Pay support. Launch a fully branded checkout in hours.',
  },
  {
    id: 'unattended',
    icon: '🅿️',
    title: 'Unattended & Self-Service',
    description:
      'Parking paystations, vending machines, kiosks, EV charging, transit ticketing, and toll booths — fully automated payment acceptance.',
  },
  {
    id: 'subscription',
    icon: '🔄',
    title: 'Subscriptions & SaaS',
    description:
      'Recurring billing, Customer Vault, and Automatic Card Updater work together to eliminate failed payments and reduce churn.',
  },
]
