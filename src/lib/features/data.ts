// src/lib/features/data.ts
import type { FeatureData } from './types'

const APPLY_CTA = { label: 'Apply Now', href: '/apply' }
const QUOTE_CTA = { label: 'Get a Quote', href: '/quote' }

export const FEATURES: Record<string, FeatureData> = {
  ach: {
    slug: 'ach',
    meta: {
      title: 'ACH & eCheck Processing — Charm Payments',
      description:
        'Accept ACH bank transfers and eChecks with Charm Payments. Lower processing costs for high-ticket transactions. $25 setup, $5/mo, $0.50 per transaction.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · ACCEPT · ACH & ECHECK',
      title: 'Accept bank transfers at a fraction of the cost.',
      subtitle:
        'ACH and eCheck processing lets you collect payments directly from customer bank accounts — at dramatically lower rates than credit cards. Perfect for high-ticket transactions, B2B invoicing, and recurring payments.',
      pills: ['$0.50 per transaction', '$5/mo', 'B2B Ready', 'Recurring Supported'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Direct bank payments for {any transaction.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Customer provides bank details',
          description:
            'Customer enters their routing number and account number — or you key it in on their behalf. Secure and encrypted at entry.',
        },
        {
          label: 'STEP 02',
          title: 'Transfer initiates',
          description:
            "Charm Payments initiates an ACH debit from the customer's bank account. Standard processing takes 1–3 business days.",
        },
        {
          label: 'STEP 03',
          title: 'Funds deposit',
          description:
            'Payment clears and deposits to your merchant bank account. You receive notification when the transfer completes.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'Lower cost than card processing',
          description: 'No interchange fees. Flat $0.50 regardless of transaction size.',
        },
        {
          title: 'Recurring ACH available',
          description: 'Combine with Customer Vault to charge automatically on a schedule.',
        },
        {
          title: 'Same-day ACH available',
          description: 'Faster settlement on request for qualified merchants.',
        },
        {
          title: 'Built for B2B and high-ticket',
          description: 'Standard in commerce above $500 — saves significantly versus cards.',
        },
      ],
    },
    industries: {
      eyebrow: 'WHO USES ACH',
      title: 'Save thousands on {high-value payments.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'B2B payments',
          description:
            'Invoice other businesses and collect via bank transfer. Lower fees on large invoices save significantly vs card processing.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Real estate & property',
          description:
            'Security deposits, rent payments, and property management fees. ACH is standard for recurring real estate transactions.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Professional services',
          description:
            'Attorneys, accountants, and consultants billing large retainers. Save hundreds per month vs card fees on large invoices.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Wholesale & distribution',
          description:
            'Collect from wholesale buyers and distributors via ACH. Standard practice in B2B commerce at much lower cost than cards.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'ACH & eCheck FAQ.',
      items: [
        {
          q: 'What does ACH processing cost?',
          a: '$25 one-time setup fee, $5/mo ACH monthly fee, and $0.50 per ACH transaction. Return and NOC fees are $2.00 each. Insufficient funds fee is $25.00.',
        },
        {
          q: 'How long does an ACH transfer take?',
          a: 'Standard ACH processing takes 1–3 business days. Same-day ACH may be available for qualified merchants.',
        },
        {
          q: 'What is a return fee?',
          a: 'If a bank transfer fails — insufficient funds, closed account, or incorrect details — a $2.00 return fee applies.',
        },
        {
          q: 'Can I use ACH for recurring payments?',
          a: 'Yes. ACH recurring billing is supported. Combine with Customer Vault to store bank account details and charge automatically on a schedule.',
        },
        {
          q: 'Is ACH more secure than checks?',
          a: "Yes. ACH transfers are processed through the Federal Reserve's banking network with full encryption. No paper check ever changes hands.",
        },
        {
          q: 'When does ACH make more financial sense than cards?',
          a: 'For transactions over $500, ACH saves significantly. At $0.50 flat vs 2.90% + $0.30, a $1,000 invoice costs $0.50 via ACH vs $29.30 via card.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'ADD ACH PROCESSING',
      title: 'Stop paying card fees on {high-ticket sales.}',
      subtitle:
        'Add ACH processing to your Charm Payments account. $25 setup. $5/mo. $0.50 per transaction.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'card-present': {
    slug: 'card-present',
    meta: {
      title: 'Card Present Terminals — Charm Payments',
      description:
        'Professional payment terminals with built-in WiFi and 4G cellular backup. Never lose a sale when your WiFi goes down. PAX A920 Pro and more. $8/mo per device.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · ACCEPT · CARD PRESENT',
      title: 'Never lose a sale when WiFi goes down.',
      subtitle:
        'Charm Payments terminals run on WiFi with automatic 4G cellular backup built in. When your internet drops, your terminal keeps processing — your customers never know the difference.',
      // "NMI Certified" pill removed (brand-rule scrub)
      pills: ['WiFi + 4G Cellular Backup', '$8/mo per device', 'Next-Day Funding'],
      primaryCta: APPLY_CTA,
      secondaryCta: { label: 'Ask About Free Terminal', href: '/contact' },
    },
    bodyVariant: 'tier-cards',
    tierCards: {
      eyebrow: 'HARDWARE',
      title: 'The right terminal for {every business.}',
      tiers: [
        {
          name: 'PAX A920 Pro',
          price: '$8/mo',
          priceCaption: 'per device · month-to-month',
          description:
            'Android touchscreen terminal. WiFi primary with automatic 4G LTE cellular failover. Built-in receipt printer. Accepts tap, chip, swipe, and contactless.',
          features: [
            '4G LTE cellular backup — automatic failover',
            'WiFi + Ethernet + Bluetooth',
            'Built-in thermal receipt printer',
            'Android touchscreen interface',
            'NFC contactless · Apple Pay · Google Pay',
          ],
          badge: 'MOST POPULAR',
          cta: { label: 'Apply Now', href: '/apply' },
        },
        {
          name: 'iProcess Mobile Reader',
          price: '$2.50/mo',
          priceCaption: 'per device · pairs with phone',
          description:
            'Compact Bluetooth card reader that pairs with your phone or tablet. Chip, swipe, and contactless. Perfect for mobile merchants.',
          features: [
            'Pairs with iOS and Android',
            'Chip + swipe + tap',
            'Compact — fits in your pocket',
            'Long battery life',
            'Works with Charm Payments app',
          ],
          cta: { label: 'Apply Now', href: '/apply' },
        },
        {
          name: 'Free Terminal Program',
          price: '$0',
          priceCaption: 'upfront · qualified merchants',
          description:
            'Get a PAX A920 Pro at no upfront cost. Hardware cost is recovered through your processing volume over the first 6 months. Ask our team for details.',
          features: [
            'No upfront hardware cost',
            'PAX A920 Pro included',
            'Same $8/mo device fee applies',
            'Month-to-month agreement',
            'Available to qualified merchants',
          ],
          variant: 'inverted',
          cta: { label: 'Ask About Free Terminal', href: '/contact' },
        },
      ],
    },
    industries: {
      eyebrow: 'BUILT FOR YOUR INDUSTRY',
      title: 'Works in every {St. Louis business type.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Retail stores',
          description:
            'Countertop setup with receipt printer. Customers tap, chip, or swipe at checkout. Full inventory integration available.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Restaurants & cafes',
          description:
            'Table-side or counter service. Split checks, add tips, email receipts. Works through kitchen WiFi or cellular backup.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Salons & barbershops',
          description:
            'Station-based or roaming terminals. Accept payment chair-side. No awkward trip to the front desk required.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Gyms & studios',
          description:
            'Front desk check-in payments, retail sales, and membership renewals. One terminal handles all transaction types.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Card Present Terminal FAQ.',
      items: [
        {
          q: 'How does the cellular backup work?',
          a: 'The PAX A920 Pro connects to WiFi as its primary network. If WiFi drops, it automatically switches to 4G LTE — no action required from you or your staff. Your customers see no interruption.',
        },
        {
          q: 'Do I own the terminal or lease it?',
          a: "Standard option is a month-to-month device fee of $8/mo — you don't own the hardware outright but have no long-term commitment. Ask about our free terminal program for qualified merchants.",
        },
        {
          q: 'What happens if a terminal breaks?',
          a: 'Contact our support team. Replacement terminals are shipped within 1–2 business days. Your merchant account stays active during replacement.',
        },
        {
          q: 'Can I use multiple terminals under one account?',
          a: 'Yes. You can add multiple terminals to your Charm Payments account. Each terminal has its own $8/mo device fee and reports to the same dashboard.',
        },
        {
          q: 'What cards do the terminals accept?',
          a: 'Visa, Mastercard, American Express, Discover, JCB, and Diners Club. Apple Pay and Google Pay via NFC. EMV chip and magnetic stripe as fallback.',
        },
        {
          q: 'Is there a contract?',
          a: 'No long-term contract on device fees. Your processing agreement is month-to-month. Cancel anytime.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'GET YOUR TERMINAL',
      title: 'Professional terminals with {cellular backup.}',
      subtitle:
        'Never lose a sale to a WiFi outage again. Apply today and have your terminal configured within 48 hours of approval.',
      primaryCta: APPLY_CTA,
      secondaryCta: { label: 'Ask About Free Terminal', href: '/contact' },
    },
  },

  ecommerce: {
    slug: 'ecommerce',
    meta: {
      title: 'E-Commerce Payment Gateway — Charm Payments',
      description:
        'Connect your online store to Charm Payments. 125+ shopping cart integrations, Collect.js, and hosted checkout. Accept payments online in minutes.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · ACCEPT · E-COMMERCE',
      title: 'Accept online payments with one line of code.',
      subtitle:
        'Connect your online store to Charm Payments using Collect.js — a single script tag that adds secure card acceptance to any website. Or use our 125+ pre-built shopping cart integrations.',
      pills: [
        '125+ Cart Integrations',
        'Collect.js',
        'Hosted Checkout',
        'Apple Pay & Google Pay',
      ],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'tier-cards',
    tierCards: {
      eyebrow: 'INTEGRATION OPTIONS',
      title: 'Three ways to connect your {online store.}',
      tiers: [
        {
          name: 'Collect.js',
          description:
            'Add a single script tag to your website. Collect.js handles card tokenization client-side — card data never touches your server. PCI compliant by design.',
          features: [
            'Single script tag install',
            'Client-side card tokenization',
            'PCI compliant by design',
            'Works with any frontend stack',
            'Sandbox available for testing',
          ],
          badge: 'FOR DEVELOPERS',
        },
        {
          name: '125+ Cart Plugins',
          description:
            'Pre-built integrations for Shopify, WooCommerce, Magento, BigCommerce, OpenCart, and 120+ more. Install the plugin and connect your credentials.',
          features: [
            'Shopify · WooCommerce · Magento',
            'BigCommerce · OpenCart · PrestaShop',
            'No coding required',
            'Install and connect in minutes',
            '120+ more carts supported',
          ],
          badge: 'EASIEST SETUP',
        },
        {
          name: 'Hosted Payment Page',
          description:
            'No website needed. Use your Charm Payments hosted checkout page — fully branded, mobile-optimized, and ready to share as a link or embed.',
          features: [
            'No website required',
            'Fully branded checkout',
            'Mobile-optimized',
            'Share as a link or QR code',
            'Embed via iframe if needed',
          ],
          badge: 'NO CODING',
        },
      ],
    },
    industries: {
      eyebrow: 'BUILT FOR ONLINE SELLERS',
      title: 'Every type of {online business.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Product stores',
          description:
            'Physical or digital products. Connect Shopify or WooCommerce in minutes and start accepting payments immediately.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Digital downloads',
          description:
            'Sell courses, ebooks, templates, and digital products. Instant delivery after payment. No inventory management needed.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Booking & appointments',
          description:
            'Accept deposits or full payment when customers book online. Reduce no-shows with upfront payment collection.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Subscription businesses',
          description:
            'Membership sites, SaaS products, and subscription boxes. Recurring billing handles automatic charges on any schedule.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'E-Commerce Gateway FAQ.',
      items: [
        {
          q: 'What is Collect.js and how does it work?',
          a: "Collect.js is a JavaScript library that captures card details directly in the customer's browser and converts them to a secure token. The token is sent to your server — card data never touches your systems.",
        },
        {
          q: 'Do I need a developer to integrate?',
          a: 'For Collect.js, basic JavaScript knowledge helps. For shopping cart plugins (Shopify, WooCommerce, etc.), no coding is required — install the plugin and add your credentials.',
        },
        {
          q: 'Which shopping carts are supported?',
          a: '125+ integrations including Shopify, WooCommerce, Magento, BigCommerce, OpenCart, PrestaShop, Volusion, 3dcart, and many more. Contact us for the full list.',
        },
        {
          q: 'Can I accept Apple Pay and Google Pay?',
          a: 'Yes. Apple Pay and Google Pay are supported on compatible devices through the Collect.js integration and hosted payment page.',
        },
        {
          q: 'Is there a sandbox for testing?',
          a: 'Yes. Your Charm Payments account includes a sandbox environment for development and testing before you go live.',
        },
        {
          q: 'What does e-commerce processing cost?',
          a: 'Your standard processing rate applies — 2.90% + $0.30 per transaction on the Starter plan, or interchange-plus on the Growth plan. No extra gateway fee for e-commerce.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'START SELLING ONLINE',
      title: 'Connect your store. Start {collecting payments.}',
      subtitle:
        '125+ integrations. One line of code. Apply today and your gateway is active within 48 hours.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'fraud-protection': {
    slug: 'fraud-protection',
    meta: {
      title: 'Fraud Protection — Charm Payments',
      description:
        'AI-powered fraud screening on every transaction. Basic fraud screening included free. Kount Advanced available. Protect your business from chargebacks and fraud losses.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · MANAGE · FRAUD PROTECTION',
      title: 'Stop fraud before it costs you money.',
      subtitle:
        'Every Charm Payments transaction runs through AI-powered fraud screening. Basic protection is included free. Add Kount Advanced — the same fraud AI used by Fortune 500 companies — for enterprise-grade protection.',
      pills: ['Included Free', 'AI-Powered', 'Kount Advanced Available', 'Real-Time Screening'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'tier-cards',
    tierCards: {
      eyebrow: 'LAYERS OF PROTECTION',
      title: 'Multiple lines of defense {on every transaction.}',
      tiers: [
        {
          name: 'Basic Fraud Screening',
          price: 'Included',
          priceCaption: 'in every Charm account',
          description:
            'AI screening on every transaction. Flags suspicious patterns, velocity checks, and known fraud indicators before approval.',
          features: [
            'Real-time transaction screening',
            'Velocity checks',
            'IP and device fingerprinting',
            'Included in all plans',
          ],
        },
        {
          name: 'Kount® Advanced',
          price: '$7/mo',
          priceCaption: '+ $0.07 per transaction',
          description:
            "Enterprise-grade fraud AI from Kount — the industry standard used by the world's largest merchants. Machine learning that improves over time.",
          features: [
            'Machine learning fraud models',
            'Global fraud intelligence network',
            'Custom risk rules',
            'Chargeback liability protection',
          ],
        },
        {
          name: 'Payer Authentication',
          price: '$9/mo',
          priceCaption: '+ $0.09 per transaction',
          description:
            '3D Secure authentication adds an extra verification step for high-risk transactions. Shifts chargeback liability to the card issuer.',
          features: [
            '3D Secure 2.0 support',
            'Liability shift on authenticated txns',
            'Frictionless for low-risk orders',
            'Required by some card networks',
          ],
        },
      ],
    },
    industries: {
      eyebrow: 'WHO NEEDS ADVANCED PROTECTION',
      title: 'Industries with higher {fraud exposure.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'E-commerce',
          description:
            'Card-not-present transactions carry higher fraud risk. Kount Advanced significantly reduces chargeback rates for online stores.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Digital goods',
          description:
            'Software, gaming, and digital downloads are frequent fraud targets. Advanced screening blocks fraudulent orders before delivery.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Food delivery',
          description:
            'High order volume and card-not-present creates fraud exposure. AI screening protects margin on every order.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'High-risk merchants',
          description:
            'Travel, nutraceuticals, and other high-risk categories require robust fraud tools to maintain processing privileges.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Fraud Protection FAQ.',
      items: [
        {
          q: 'What fraud protection is included for free?',
          a: 'Basic fraud screening is included in all Charm Payments accounts at no extra charge. This includes real-time AI screening, velocity checks, and device fingerprinting on every transaction.',
        },
        {
          q: 'What is Kount Advanced and do I need it?',
          a: "Kount is an enterprise fraud intelligence platform used by major merchants worldwide. It's recommended for e-commerce merchants, high-risk businesses, and anyone with elevated chargeback rates. Cost is $7/mo plus $0.07 per transaction.",
        },
        {
          q: 'What is a chargeback and how do I prevent them?',
          a: 'A chargeback is when a customer disputes a charge with their bank. The disputed amount is held while the bank investigates. Strong fraud screening reduces fraudulent chargebacks. Clear billing descriptors and good customer service reduce legitimate disputes.',
        },
        {
          q: 'What is Payer Authentication (3D Secure)?',
          a: '3D Secure adds a verification step where the cardholder confirms the purchase with their bank. When authentication succeeds, chargeback liability shifts from you to the card issuer.',
        },
        {
          q: 'How does fraud screening affect approval rates?',
          a: 'Basic screening has minimal impact on legitimate transactions. Kount Advanced uses machine learning to distinguish fraud from good orders — reducing false declines that hurt your revenue.',
        },
        {
          q: 'What should I do if I get a chargeback?',
          a: 'Log in to your dashboard and respond with evidence within the deadline shown. Our team can guide you through the dispute process. A $25 chargeback fee applies per dispute.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'PROTECT YOUR REVENUE',
      title: 'Stop fraud before it {reaches your account.}',
      subtitle:
        'Basic fraud protection included free. Kount Advanced available for $7/mo. Apply today and protect every transaction.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'qr-codes': {
    slug: 'qr-codes',
    meta: {
      title: 'QR Code Payments — Charm Payments',
      description:
        'Generate payment QR codes and accept contactless payments anywhere. Print on menus, receipts, or storefronts. Included in all Charm Payments accounts.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · MANAGE · QR CODE PAYMENTS',
      title: 'Print it. Display it. Get paid from it.',
      subtitle:
        'Generate a payment QR code and put it anywhere your customers are — menus, receipts, storefronts, flyers, or business cards. They scan, pay, done. No card reader. No terminal. No contact required.',
      pills: ['Included Free', 'Any Device', 'No App Required', 'Instant Generation'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Scan. Pay. Done. {No hardware required.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Generate your QR code',
          description:
            'Log in to your dashboard and generate a payment QR code in seconds. Download it as a PNG file ready to print or display.',
        },
        {
          label: 'STEP 02',
          title: 'Customer scans the code',
          description:
            'Customer points their phone camera at the QR code. No app needed. Opens a payment page directly in their browser.',
        },
        {
          label: 'STEP 03',
          title: 'Payment complete',
          description:
            'Customer pays with card, Apple Pay, or Google Pay. You get an instant notification. Funds deposit next business day.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'Unlimited QR codes',
          description: 'Generate as many as you need at no extra cost.',
        },
        {
          title: 'Fixed or open amount',
          description: 'Set a specific charge or let the customer enter the total.',
        },
        {
          title: 'Print or digital',
          description: 'Works on flyers, menus, signage, websites, business cards.',
        },
        {
          title: 'Apple Pay & Google Pay',
          description: 'Customer can pay with stored wallet credentials in one tap.',
        },
      ],
    },
    industries: {
      eyebrow: 'WHERE TO USE IT',
      title: 'Put your QR code {everywhere customers are.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Restaurants & cafes',
          description:
            'Print your QR code on table tents or menus. Customers pay at the table without waiting for a server to bring the check.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Retail storefronts',
          description:
            'Display your QR code at the checkout counter, window, or entrance. Customers tap and pay without touching a terminal.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Events & pop-ups',
          description:
            'Tape your QR code to a table at markets, festivals, and events. Accept payments without any hardware setup.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Online & social media',
          description:
            'Add your QR code to your website, email signature, or print it on business cards so contacts can pay you instantly.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'QR Code Payments FAQ.',
      items: [
        {
          q: 'Is there an extra fee for QR codes?',
          a: 'No. QR code payment generation is included in all Charm Payments merchant accounts at no extra charge. Your standard processing rate applies to each payment.',
        },
        {
          q: 'Does the customer need a special app?',
          a: 'No. Any modern smartphone camera can scan a QR code and open the payment link directly in the browser. No app download required.',
        },
        {
          q: 'Can I set a fixed amount on the QR code?',
          a: 'Yes. You can generate a QR code for a specific amount or create an open-amount code where the customer enters the total themselves.',
        },
        {
          q: 'How do I use the QR code for print materials?',
          a: 'Download the QR code as a PNG image from your dashboard and insert it into any design — menus, flyers, business cards, receipts, or signage.',
        },
        {
          q: 'What happens if a QR code scan fails?',
          a: "Generate a fresh QR code from your dashboard at any time. QR codes link to your payment page and don't expire unless you regenerate them.",
        },
        {
          q: 'Can I track how many people scanned my QR code?',
          a: 'Yes. Your dashboard shows transaction volume from QR code payments alongside your other payment channels.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'GET YOUR QR CODE',
      title: 'Contactless payments {everywhere you do business.}',
      subtitle:
        'QR code payments are included free in every Charm Payments account. Apply today.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'recurring-billing': {
    slug: 'recurring-billing',
    meta: {
      title: 'Recurring Billing — Charm Payments',
      description:
        'Automate subscription payments and recurring charges with Charm Payments. Set it once and collect automatically — weekly, monthly, or on any schedule.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · MANAGE · RECURRING BILLING',
      title: 'Set it once. Get paid every time.',
      subtitle:
        'Stop manually charging repeat customers. Set up automatic recurring payments and let Charm Payments handle the rest — weekly, monthly, quarterly, or any schedule you choose.',
      pills: [
        'Included in All Plans',
        'Any Schedule',
        'Auto Retry on Failure',
        'Customer Vault',
      ],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Automated payments that {run themselves.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Add the customer',
          description:
            "Enter your customer's card details once. They're stored securely in your Customer Vault — encrypted and PCI compliant.",
        },
        {
          label: 'STEP 02',
          title: 'Set the schedule',
          description:
            'Choose how often to charge — daily, weekly, monthly, quarterly, or a custom date. Set the amount and let the system take over.',
        },
        {
          label: 'STEP 03',
          title: 'Payments run automatically',
          description:
            'Charges process on schedule without any action from you. Failed payments retry automatically. You get notified of successes and failures.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'Any schedule',
          description: 'Daily, weekly, monthly, quarterly, annual, or custom intervals.',
        },
        {
          title: 'Auto retry on failures',
          description: 'Failed charges retry on your configurable schedule automatically.',
        },
        {
          title: 'Free trial periods',
          description: 'Set a trial of any length. Card stored, charge starts after the trial ends.',
        },
        {
          title: 'Customer vault',
          description: 'PCI-compliant token storage for stored cards. No raw card data on file.',
        },
      ],
    },
    industries: {
      eyebrow: 'BUILT FOR RECURRING REVENUE',
      title: 'Every business that {bills repeat customers.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Gyms & fitness studios',
          description:
            'Monthly membership dues collected automatically. No front desk time, no awkward billing conversations, no missed payments.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Security & monitoring',
          description:
            'Monthly monitoring fees for alarm systems, cameras, and security services. Set and forget.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Tutoring & education',
          description:
            'Monthly tuition, weekly session fees, or semester billing. Parents pay automatically — you focus on teaching.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Retainer services',
          description:
            'Consultants, attorneys, bookkeepers, and agencies on monthly retainers. Invoice once, bill forever.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Recurring Billing FAQ.',
      items: [
        {
          q: 'Is recurring billing included in my plan?',
          a: 'Yes. Recurring billing is included in all Charm Payments merchant accounts — Starter, Growth, and Enterprise. No add-on fee required.',
        },
        {
          q: 'What happens when a card payment fails?',
          a: 'The system automatically retries the failed charge on a configurable schedule. You receive an email notification so you can also follow up manually.',
        },
        {
          q: 'Can customers update their own card details?',
          a: 'You can update customer card details from your dashboard at any time. A customer-facing update portal is available on request.',
        },
        {
          q: 'Is stored card data secure?',
          a: 'Yes. Cards are stored in an encrypted Customer Vault that is PCI DSS compliant. The actual card number is never stored — only a secure token.',
        },
        {
          q: 'Can I offer a free trial period?',
          a: "Yes. You can set a trial period of any length before the first charge. The customer's card is stored during the trial and charged automatically when it ends.",
        },
        {
          q: 'What billing schedules are supported?',
          a: 'Daily, weekly, bi-weekly, monthly, quarterly, annual, or any custom date interval you specify.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'AUTOMATE YOUR BILLING',
      title: 'Stop chasing payments. {Automate everything.}',
      subtitle:
        'Recurring billing is included in every Charm Payments account. Apply today and set up your first subscription within 48 hours.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'tap-to-pay': {
    slug: 'tap-to-pay',
    meta: {
      title: 'Tap to Pay — Charm Payments',
      description:
        'Turn your iPhone or Android into a payment terminal with Charm Payments Tap to Pay. No hardware needed. Accept contactless payments anywhere. $0/mo.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · ACCEPT · TAP TO PAY',
      title: 'Your phone is your payment terminal.',
      subtitle:
        'No card reader. No hardware to buy. Turn any iPhone or Android into a fully functional payment terminal — accept tap, chip, and contactless payments anywhere you do business.',
      pills: ['$0/mo', 'iPhone & Android', 'No Hardware', '$0.10 per tap'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Accept a payment in {under 30 seconds.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Download the app',
          description:
            'Install the Charm Payments mobile app on your iPhone or Android. Log in with your merchant credentials. Takes two minutes.',
        },
        {
          label: 'STEP 02',
          title: 'Enter the amount',
          description:
            'Type in the sale amount, add a description, and tap charge. The app prompts the customer to tap their card or phone.',
        },
        {
          label: 'STEP 03',
          title: 'Customer taps and pays',
          description:
            'Customer taps their card, Apple Pay, or Google Pay to your phone. Payment approved in seconds. Receipt sent by email or text.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'iPhone XS or later',
          description: 'Apple Tap to Pay supported on iOS 16+ devices.',
        },
        {
          title: 'Android 8.0 or later',
          description: 'NFC-capable Android devices — most modern phones qualify.',
        },
        {
          title: '$0 monthly fee',
          description: '$0.10 per tap on top of your standard processing rate.',
        },
        {
          title: 'WiFi or cellular',
          description: 'Works wherever your phone has signal — no Bluetooth reader needed.',
        },
      ],
    },
    industries: {
      eyebrow: 'PERFECT FOR',
      title: 'Every mobile merchant {in St. Louis.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Barbers & stylists',
          description:
            'Finish the cut, tap your phone to their card. No fumbling with a card reader. No receipt printer. Just tap, pay, and on to the next client.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Food trucks & markets',
          description:
            "Accept payments at farmers markets, pop-up events, and festivals. Works on your phone's data — no WiFi required.",
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Contractors & trades',
          description:
            'Collect payment on the job site the moment the work is done. No more waiting for checks to clear or chasing invoices.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Mobile health & beauty',
          description:
            'Massage therapists, estheticians, and mobile nail techs who work at client locations. Get paid before you pack up.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Tap to Pay FAQ.',
      items: [
        {
          q: 'What phones support Tap to Pay?',
          a: 'iPhone XS and later running iOS 16 or higher. Android devices running Android 8.0 or higher with NFC capability — most modern Android phones qualify.',
        },
        {
          q: 'Does the customer need an app?',
          a: "No. The customer taps their physical card or uses Apple Pay or Google Pay on their own phone. They don't download anything.",
        },
        {
          q: 'What is the transaction fee?',
          a: '$0.10 per tap transaction on top of your standard processing rate. No monthly fee for Tap to Pay.',
        },
        {
          q: 'Does it work without WiFi?',
          a: "Yes. The app uses your phone's cellular data connection. As long as you have cell signal, you can process payments.",
        },
        {
          q: 'Is it secure?',
          a: 'Yes. Tap to Pay uses the same NFC encryption technology built into Apple Pay and Google Pay. Card data is tokenized and never stored on your device.',
        },
        {
          q: 'Can I use Tap to Pay alongside a physical terminal?',
          a: 'Yes. Your Charm Payments account supports both Tap to Pay and card present terminals under the same merchant account.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'GET STARTED FREE',
      title: 'No hardware. No monthly fee. {Just tap and get paid.}',
      subtitle:
        'Apply today and start accepting payments on your phone within 48 hours of approval.',
      primaryCta: APPLY_CTA,
      secondaryCta: { label: 'Talk to Our Team', href: '/contact' },
    },
  },

  'text-to-pay': {
    slug: 'text-to-pay',
    meta: {
      title: 'Text to Pay — Charm Payments',
      description:
        'Send payment requests by text message with Charm Payments Text to Pay. Customer gets an SMS, taps the link, and pays in seconds. $5/mo.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · MANAGE · TEXT TO PAY',
      title: 'Send a text. Get paid in 30 seconds.',
      subtitle:
        "Text your customer a payment request. They tap the link, enter their card, and you're paid — before you even put your phone away. No app download. No invoice portal. Just a text and a payment.",
      // "Powered by Authvia TXT2Pay" pill removed (brand-rule scrub)
      pills: ['$5/mo', 'Any Phone', '$0.18 per txn'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Three taps to {collect any payment.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Send the request',
          description:
            "From your dashboard, enter the amount and your customer's phone number. Tap send. They get an SMS in seconds.",
        },
        {
          label: 'STEP 02',
          title: 'Customer gets a text',
          description:
            'The SMS contains a secure payment link. Customer taps it — opens a mobile-optimized payment page. No app to download.',
        },
        {
          label: 'STEP 03',
          title: 'Payment confirmed',
          description:
            'Customer enters their card details or uses Apple Pay. Transaction approved. You get a notification. Funds deposit next business day.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'Works on any phone',
          description: 'iPhone, Android, or any SMS-capable phone — no app for the customer.',
        },
        {
          title: 'Apple Pay & Google Pay',
          description: 'Customer can pay with stored wallet credentials in seconds.',
        },
        {
          title: 'PCI-compliant page',
          description: 'Encrypted payment page hosted by Charm — card data never on device.',
        },
        {
          title: 'Send from anywhere',
          description: 'Dashboard, mobile browser, or our app — wherever you are.',
        },
      ],
    },
    industries: {
      eyebrow: 'PERFECT FOR',
      title: 'Get paid on the spot {no matter where you are.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Auto services',
          description:
            "Car's ready? Text the customer before they arrive. They pay on the way — no waiting at the counter when they pick up.",
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Barbers & stylists',
          description:
            'Send a payment link while the customer is still in the chair. They pay from their phone. You never have to ask for money awkwardly.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Delivery businesses',
          description:
            'Driver delivers the order and texts a payment request on the spot. Customer pays before the driver leaves the driveway.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'Health & wellness',
          description:
            'Send payment after a session — massage, therapy, personal training. Clean and professional. No card reader needed.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Text to Pay FAQ.',
      items: [
        {
          q: 'What does Text to Pay cost?',
          a: '$5/mo to enable Text to Pay plus $0.18 per transaction. Your standard processing rate also applies to each payment collected.',
        },
        {
          q: 'Does the customer need to download an app?',
          a: "No. The customer receives a standard SMS text message with a link. The payment page opens in their phone's browser — no app download required.",
        },
        {
          q: 'What phones does it work on?',
          a: 'Any phone that can receive text messages and open a web link — iPhone, Android, or any smartphone. Even basic smartphones work.',
        },
        {
          q: 'Is the payment page secure?',
          a: "Yes. The payment link opens a PCI DSS compliant payment page. Card data is encrypted and never stored on the customer's device.",
        },
        {
          q: 'Can I send Text to Pay from my phone?',
          a: 'Yes. Log in to your Charm Payments dashboard on your mobile browser or app to send payment requests from anywhere.',
        },
        {
          q: 'How is this different from invoicing?',
          a: 'Text to Pay is designed for instant collection — send it, they pay immediately. Electronic invoicing is better for formal billing with line items, due dates, and payment tracking over time.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'GET TEXT TO PAY',
      title: 'The fastest way to {collect any payment.}',
      subtitle:
        'Add Text to Pay to your Charm Payments account. $5/mo. Customers pay in under 30 seconds.',
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
  },

  'virtual-terminal': {
    slug: 'virtual-terminal',
    meta: {
      title: 'Virtual Terminal — Charm Payments',
      description:
        'Accept credit card payments from any browser with Charm Payments virtual terminal. No hardware needed. Perfect for phone orders, mail orders, and MOTO transactions.',
    },
    hero: {
      breadcrumb: 'PRODUCTS · ACCEPT · VIRTUAL TERMINAL',
      title: 'Accept payments from any browser, anywhere.',
      subtitle:
        'No hardware. No software to install. Log in to your Charm Payments dashboard, key in card details, and collect payment in seconds — from any device, any location.',
      pills: ['No Hardware Required', 'Works on Any Device', 'Visa MC Amex Discover'],
      primaryCta: APPLY_CTA,
      secondaryCta: QUOTE_CTA,
    },
    bodyVariant: 'how-it-works',
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      title: 'Three steps to {collect any payment.}',
      steps: [
        {
          label: 'STEP 01',
          title: 'Log in to your dashboard',
          description:
            'Access your Charm Payments merchant portal from any browser — Chrome, Safari, Firefox. Works on laptop, tablet, or phone.',
        },
        {
          label: 'STEP 02',
          title: 'Enter card details',
          description:
            'Key in the card number, expiration, CVV, and billing zip. Add an order description so you and the customer both know what the charge is for.',
        },
        {
          label: 'STEP 03',
          title: 'Payment collected',
          description:
            'Transaction approved in seconds. Customer gets a receipt by email. Funds deposit to your bank account on the next business day.',
        },
      ],
      checklistEyebrow: "WHAT'S INCLUDED",
      checklist: [
        {
          title: 'All major cards',
          description: 'Visa, Mastercard, Amex, Discover. ACH and eCheck as add-ons.',
        },
        {
          title: 'Email receipts',
          description: 'Sent automatically. Custom branded with your business name.',
        },
        {
          title: 'Refund and void',
          description: 'Reverse charges from the same dashboard, no separate tool.',
        },
        {
          title: 'Multi-user accounts',
          description: 'Multiple staff logins with permission levels and audit trail.',
        },
      ],
    },
    industries: {
      eyebrow: 'WHO USES IT',
      title: 'Built for businesses that {take payments remotely.}',
      items: [
        {
          figLabel: 'FIG. 03.A',
          title: 'Phone orders',
          description:
            'Customer calls in, reads their card number, you key it in and charge. Clean, simple, done. No card reader needed.',
        },
        {
          figLabel: 'FIG. 03.B',
          title: 'Mail orders',
          description:
            'Customers mail in order forms with card info. Process them in batches from your desktop. Perfect for catalog and direct mail businesses.',
        },
        {
          figLabel: 'FIG. 03.C',
          title: 'Home service pros',
          description:
            'Plumbers, electricians, cleaners, and contractors who invoice after the job. Key in the card on your phone before you leave the driveway.',
        },
        {
          figLabel: 'FIG. 03.D',
          title: 'B2B invoicing',
          description:
            'Bill corporate clients after services are rendered. Store their card on file for repeat charges with Customer Vault add-on.',
        },
      ],
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Virtual Terminal FAQ.',
      items: [
        {
          q: 'Do I need to download any software?',
          a: 'No. The virtual terminal runs entirely in your browser. Log in to your Charm Payments dashboard from any device and start processing immediately.',
        },
        {
          q: 'Is it safe to key in card numbers manually?',
          a: 'Yes. Your Charm Payments dashboard is PCI DSS compliant. Card data is encrypted at the point of entry and never stored on your device or our servers in readable form.',
        },
        {
          q: 'What cards can I accept?',
          a: 'Visa, Mastercard, American Express, and Discover. ACH and eCheck processing is available as an add-on.',
        },
        {
          q: 'Can multiple employees use the virtual terminal?',
          a: 'Yes. You can create multiple user accounts under your merchant account, each with their own login credentials and permission levels.',
        },
        {
          q: 'How quickly do funds deposit?',
          a: 'Standard next-business-day funding for most merchants. Your exact funding schedule is confirmed at approval.',
        },
        {
          q: 'What does it cost?',
          a: 'Flat rate plan — 2.90% + $0.30 per transaction. No monthly fee on the Starter plan. No setup fee. Talk to us about interchange-plus on the Growth plan.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'GET STARTED',
      title: 'Ready to accept payments {from anywhere?}',
      subtitle:
        "Apply in minutes. Approved in 48 hours. Your virtual terminal is ready the same day you're approved.",
      primaryCta: APPLY_CTA,
      secondaryCta: { label: 'Talk to Our Team', href: '/contact' },
    },
  },
}
