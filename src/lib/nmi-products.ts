// src/lib/nmi-products.ts
// Static marketing data for gateway product pages (/gateway, /gateway/features, /gateway/hardware)
// This is NOT the equipment catalog — that was a dashboard feature (removed in Phase 5C).

export interface GatewayFeature {
  id: string
  title: string
  description: string
  bullets: string[]
  badge?: string
}

export const gatewayFeatures: GatewayFeature[] = [
  {
    id: 'virtual-terminal',
    title: 'Virtual Terminal',
    description:
      'Accept payments from any browser without specialized hardware. Perfect for phone orders, email invoicing, and remote payments.',
    bullets: [
      'Manual card entry from any device',
      'Supports all major card brands',
      'Built-in transaction history',
      'Refund and void from the same screen',
    ],
  },
  {
    id: 'collect-js',
    title: 'Collect.js / Hosted Checkout',
    description:
      'PCI-compliant hosted payment fields that inject securely into your checkout page — no raw card data ever touches your server.',
    bullets: [
      'Drop-in hosted payment fields',
      'Collect.js for custom checkout flows',
      'Single-page checkout support',
      'iFrame or redirect modes available',
    ],
    badge: 'Developer Favorite',
  },
  {
    id: 'customer-vault',
    title: 'Customer Vault',
    description:
      'Tokenize and securely store customer payment methods for one-click checkout, subscriptions, and MOTO orders.',
    bullets: [
      'Unlimited stored payment profiles',
      'PCI-compliant token storage',
      'Link to subscriptions & invoices',
      'Customer-initiated payment updates',
    ],
  },
  {
    id: 'card-updater',
    title: 'Automatic Card Updater',
    description:
      'Automatically refresh expiring or replaced card numbers in your customer vault — reducing failed recurring payments by up to 30%.',
    bullets: [
      'Works with Visa & Mastercard',
      'Runs nightly on vault records',
      'Zero manual intervention needed',
      'Reduces subscription churn',
    ],
  },
  {
    id: 'fraud-prevention',
    title: 'Fraud Prevention Suite',
    description:
      'Rules-based and AI-powered fraud screening that evaluates every transaction in real time before authorization.',
    bullets: [
      'Velocity rules and IP geolocation',
      'Device fingerprinting',
      'Custom allow/block lists',
      'Detailed fraud scoring per transaction',
    ],
    badge: 'CB911 Compatible',
  },
  {
    id: '3ds',
    title: '3D Secure 2.0',
    description:
      'Strong customer authentication (SCA) that shifts liability to the issuer while keeping friction minimal for trusted shoppers.',
    bullets: [
      'EMV 3DS2 protocol',
      'Frictionless flow for low-risk transactions',
      'Challenge flow for high-risk orders',
      'EU SCA / PSD2 compliant',
    ],
  },
  {
    id: 'webhooks',
    title: 'Webhooks & Real-Time Reporting',
    description:
      'Instant event notifications for every transaction state change — settled, refunded, disputed, or voided.',
    bullets: [
      'Configurable event subscriptions',
      'HMAC-signed payloads',
      'Retry on failure with exponential back-off',
      'Full transaction history via Query API',
    ],
  },
  {
    id: 'recurring-billing',
    title: 'Recurring Billing',
    description:
      'Built-in subscription engine with flexible billing cycles, dunning management, and proration support.',
    bullets: [
      'Daily / weekly / monthly / custom cycles',
      'Automatic retry on failed payments',
      'Trial periods and discounts',
      'Customer self-service portal option',
    ],
  },
  {
    id: 'quickbooks',
    title: 'QuickBooks SyncPay',
    description:
      "Sync transactions directly to QuickBooks Online in real time — no manual exports, no reconciliation headaches.",
    bullets: [
      'QuickBooks Online integration',
      'Automatic invoice matching',
      'Real-time sync on settlement',
      'Supports multiple QB entities',
    ],
  },
  {
    id: 'google-pay',
    title: 'Google Pay & Apple Pay',
    description:
      'Accept digital wallet payments on web and mobile with a single SDK — no additional merchant enrollment required.',
    bullets: [
      'One-tap checkout on mobile',
      'Works with Collect.js & hosted forms',
      'Tokenized card credentials',
      'Supported on all NMI terminals',
    ],
  },
  {
    id: 'invoicing',
    title: 'Electronic Invoicing',
    description:
      'Send branded payment requests by email or SMS — customers pay with any card or ACH without creating an account.',
    bullets: [
      'Custom branded invoice templates',
      'Email & SMS delivery',
      'Automatic reminders for unpaid invoices',
      'Partial payment support',
    ],
  },
]

export interface HardwareDevice {
  id: string
  name: string
  category: 'countertop' | 'mobile' | 'unattended'
  tagline: string
  description: string
  highlights: string[]
  specs: { label: string; value: string }[]
}

export const hardwareDevices: HardwareDevice[] = [
  {
    id: 'pax-a920',
    name: 'PAX A920 SmartPOS',
    category: 'mobile',
    tagline: 'Mobile SmartPOS',
    description:
      'Android-based all-in-one payment terminal with a 5" touchscreen, built-in receipt printer, and 4G + WiFi connectivity. The go-to device for mobile merchants, food trucks, and service businesses.',
    highlights: [
      '5" HD multi-touch display',
      'Built-in thermal receipt printer',
      '4G LTE + WiFi + Bluetooth',
      'EMV, NFC, and MSR in one device',
      '5,000 mAh battery — full day operation',
      'Android 7.1 — full app ecosystem',
    ],
    specs: [
      { label: 'Display', value: '5" 1280×720 IPS' },
      { label: 'Connectivity', value: '4G LTE, WiFi 802.11 b/g/n, Bluetooth 4.0' },
      { label: 'Printer', value: 'Built-in 2" thermal, 80mm/s' },
      { label: 'Card Acceptance', value: 'EMV L1/L2, NFC, MSR' },
      { label: 'OS', value: 'Android 7.1 (PROLIN)' },
      { label: 'Battery', value: '5,000 mAh Li-ion' },
      { label: 'Certifications', value: 'PCI PTS 5.X, EMV L1&L2, NMI Certified' },
    ],
  },
  {
    id: 'ingenico-lane-3000',
    name: 'Ingenico Lane/3000',
    category: 'countertop',
    tagline: 'Countertop Terminal',
    description:
      'A fast, reliable countertop payment terminal with a large customer-facing display. Ideal for retail and restaurant fixed-point checkout with high transaction volumes.',
    highlights: [
      '3.5" color customer display',
      'Contactless, EMV chip, and swipe',
      'Fast transaction processing',
      'USB, Serial, and Ethernet connectivity',
      'Compact form factor for tight counters',
      'PIN entry shield standard',
    ],
    specs: [
      { label: 'Display', value: '3.5" color customer-facing LCD' },
      { label: 'Connectivity', value: 'USB, Serial, Ethernet' },
      { label: 'Card Acceptance', value: 'EMV L1/L2, Contactless NFC, MSR' },
      { label: 'PIN Entry', value: 'Integrated PIN pad with shield' },
      { label: 'Certifications', value: 'PCI PTS 5.X, EMV L1&L2, NMI Certified' },
    ],
  },
  {
    id: 'ingenico-lane-7000',
    name: 'Ingenico Lane/7000',
    category: 'countertop',
    tagline: 'Multi-Lane Terminal',
    description:
      'High-performance multi-lane terminal designed for enterprise retail and grocery. Large touchscreen, signature capture, and full connectivity suite for high-throughput environments.',
    highlights: [
      '7" HD touchscreen with signature capture',
      'Magnetic stripe, EMV chip, and NFC',
      'Full connectivity: USB, Serial, Ethernet, WiFi',
      'Designed for multi-lane grocery and big-box retail',
      'Multimedia capable — video and promotions',
      'ADA compliant form factor',
    ],
    specs: [
      { label: 'Display', value: '7" 1024×600 capacitive touchscreen' },
      { label: 'Connectivity', value: 'USB, Serial, Ethernet, WiFi' },
      { label: 'Card Acceptance', value: 'EMV L1/L2, Contactless NFC, MSR' },
      { label: 'Signature', value: 'On-screen capture' },
      { label: 'Certifications', value: 'PCI PTS 5.X, EMV L1&L2, NMI Certified, ADA' },
    ],
  },
]

export interface SolutionVertical {
  id: string
  icon: string
  title: string
  description: string
}

export const solutionVerticals: SolutionVertical[] = [
  {
    id: 'retail',
    icon: '🛍️',
    title: 'Retail & Boutiques',
    description:
      'In-store countertop terminals, integrated POS, and e-commerce for omnichannel retail.',
  },
  {
    id: 'restaurants',
    icon: '🍽️',
    title: 'Restaurants & Food Service',
    description:
      'Table-side payments, counter service, quick service, food trucks, and delivery integrations.',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile & Field Service',
    description:
      'Contractors, cleaners, landscapers, and field reps accepting payments on-site with PAX A920.',
  },
  {
    id: 'ecommerce',
    icon: '🌐',
    title: 'E-Commerce',
    description:
      'Hosted checkout, Collect.js, shopping cart integrations, and recurring billing for online stores.',
  },
  {
    id: 'unattended',
    icon: '🔧',
    title: 'Unattended & Self-Service',
    description:
      'Parking, vending, EV charging, kiosks, and transit — payments that run without a cashier.',
  },
  {
    id: 'subscriptions',
    icon: '🔄',
    title: 'Subscriptions & SaaS',
    description:
      'Flexible billing cycles, automatic card updater, and dunning management for subscription businesses.',
  },
]
