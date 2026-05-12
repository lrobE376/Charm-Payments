import type { Metadata } from 'next'

export type ProductFeatureIconKey =
  | 'barChart'
  | 'check'
  | 'headphones'
  | 'lock'
  | 'notebook'
  | 'qr'
  | 'receipt'
  | 'refresh'
  | 'search'
  | 'shoppingCart'
  | 'smartphone'
  | 'userCheck'
  | 'wallet'

type ProductCta = {
  label: string
  href: string
}

export type ProductFeaturePageContent = {
  metadata: Metadata
  hero: {
    eyebrow: string
    headline: string
    body: string
    proofPills: string[]
    primaryCta: ProductCta
    secondaryCta: ProductCta
    visual: {
      src: string
      alt: string
      figureLabel: string
      barcodeLabel: string
    }
  }
  proofStripItems: string[]
  capabilitySection: {
    eyebrow: string
    headline: string
    cards: {
      icon: ProductFeatureIconKey
      title: string
      body: string
    }[]
  }
  howItWorks: {
    eyebrow: string
    headline: string
    emphasizedText: string
    steps: {
      step: string
      title: string
      body: string
      image: string
      imageAlt: string
    }[]
  }
  platform: {
    eyebrow: string
    headline: string
    body: string
    bullets: string[]
    cta: ProductCta
    mockup: {
      eyebrow: string
      title: string
      status: string
      metrics: {
        label: string
        value: string
      }[]
      flowWidths: number[]
      recentActivity: string[]
      checks: string[]
    }
  }
  readiness: {
    eyebrow: string
    headline: string
    body: string
    practices: {
      icon: ProductFeatureIconKey
      title: string
      body: string
    }[]
    disclaimer: string
  }
  testimonials: {
    eyebrow: string
    headlineLines: string[]
    items: {
      quote: string
      attribution: string
    }[]
  }
  finalCta: {
    headline: string
    body: string
    primaryCta: ProductCta
    secondaryCta: ProductCta
  }
}

const primaryCta = { label: 'REQUEST AUDIT', href: '/quote' }
const secondaryCta = { label: 'TALK TO SALES', href: '/contact' }

const sharedProofPills = ['No Setup Fees', 'Transparent Pricing', 'No Long-Term Contracts']

const sharedProofStrip = [
  'BUILT FOR BUSINESS / RETAIL, MOBILE, HIGH-RISK',
  'SECURE PAYMENTS / PCI COMPLIANT',
  'CHARGEBACK SUPPORT / REDUCE & DEFEND',
  'REAL-TIME INSIGHTS / TOTAL CONTROL',
]

const sharedSteps = [
  {
    step: 'STEP 01',
    title: 'Start with a rate audit',
    body: 'Tell us about your business, current setup, and statement pain before you commit to onboarding.',
    image: '/images/pexels-rdne-7697434.jpg',
    imageAlt: 'Business owner reviewing a payment workflow on a tablet.',
  },
  {
    step: 'STEP 02',
    title: 'Map your payment workflow',
    body: 'Charm reviews how you take payments, where disputes happen, and what tools belong in your dashboard.',
    image: '/images/pexels-pavel-danilyuk-6612717.jpg',
    imageAlt: 'Payment terminal and merchant counter setup.',
  },
  {
    step: 'STEP 03',
    title: 'Onboard when ready',
    body: 'When you are ready, Charm gives you one dashboard for payments, support, and chargeback activity.',
    image: '/images/sumup-uALOu8Rdv9M-unsplash.jpg',
    imageAlt: 'Customer completing a card payment at checkout.',
  },
]

const sharedPlatform = {
  eyebrow: 'YOUR BUSINESS. TOTAL CONTROL.',
  headline: 'Everything You Need To Run Your Business.',
  body: 'See payments, payouts, refunds, customers, and disputes in one place - so your team knows what happened, what needs attention, and what gets paid next.',
  bullets: [
    'Real-time sales and performance insights',
    'Customer, refund, and dispute tracking',
    'Flexible payouts and settlement options',
    'Chargeback and fraud support',
  ],
  cta: { label: 'EXPLORE PLATFORM', href: '/dashboard' },
  mockup: {
    eyebrow: "Today's payment activity",
    title: 'Virtual terminal overview',
    status: 'Online',
    metrics: [
      { label: 'Sales', value: '$18.4K' },
      { label: 'Settled', value: '$12.9K' },
      { label: 'Disputes', value: '2 open' },
    ],
    flowWidths: [72, 54, 86, 42],
    recentActivity: ['Card payment approved', 'Refund processed', 'Payout scheduled', 'Chargeback update'],
    checks: ['Refunds synced', 'Settlement ready'],
  },
}

const sharedTestimonials = {
  eyebrow: 'BACKED BY RESULTS.',
  headlineLines: ['Merchants See', 'The Difference.'],
  items: [
    {
      quote:
        'Charm gave us a clearer view of card payments, refunds, and dispute activity without adding another complicated system.',
      attribution: 'BOUTIQUE OWNER',
    },
    {
      quote:
        'We could finally see sales, payouts, and chargeback issues in one place instead of chasing reports across different tools.',
      attribution: 'RESTAURANT OWNER',
    },
    {
      quote:
        'The support workflow made it easier to track payment questions and keep our team focused on customer orders.',
      attribution: 'E-COMMERCE MERCHANT',
    },
  ],
}

const sharedFinalCta = {
  headline: "Let's Build A Better Way To Do Payments.",
  body: 'Get a personalized audit and see where your current payment setup can improve.',
  primaryCta,
  secondaryCta,
}

export const productFeaturePages = {
  index: {
    metadata: {
      title: 'Payment Features - Charm Payments',
      description:
        'Explore Charm Payments features for payment acceptance, reporting, risk visibility, chargeback workflow support, and merchant-first onboarding.',
    },
    hero: {
      eyebrow: 'PAYMENT INFRASTRUCTURE',
      headline: 'Everything You Need To Take Payments With More Control.',
      body: 'Charm Payments brings payment acceptance, reporting, risk visibility, and merchant support into one cleaner operating system for modern businesses.',
      proofPills: ['Gateway-ready setup', 'Chargeback workflow support', 'Merchant-first onboarding'],
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/sumup-uALOu8Rdv9M-unsplash.jpg',
        alt: 'Customer completing a card payment at a merchant checkout counter.',
        figureLabel: 'FIG. 01 - PAYMENT INFRASTRUCTURE',
        barcodeLabel: 'FEATURES-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'POWERFUL. FLEXIBLE. BUILT FOR MERCHANTS.',
      headline: 'Everything You Need. One Powerful Platform.',
      cards: [
        {
          icon: 'wallet',
          title: 'Accept Payments',
          body: 'Support in-person, online, keyed, invoice, recurring, text, QR, and account-based payment workflows.',
        },
        {
          icon: 'barChart',
          title: 'Manage Operations',
          body: 'Bring payments, customers, refunds, payouts, and disputes into a clearer operating view.',
        },
        {
          icon: 'search',
          title: 'Improve Risk Visibility',
          body: 'Use cleaner records and payment context to support better decisions when activity needs review.',
        },
        {
          icon: 'headphones',
          title: 'Get Merchant Support',
          body: 'Work with a merchant-first team that understands payment operations, workflow questions, and support needs.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Payment operations overview',
      },
    },
    readiness: {
      eyebrow: 'PAYMENT READINESS',
      headline: 'Good practices for cleaner payment operations.',
      body: 'Different payment methods create different operational needs. Charm helps merchants think through authorization, receipts, customer records, payment timing, and dispute readiness before small issues become harder to untangle.',
      practices: [
        {
          icon: 'receipt',
          title: 'Keep clear records',
          body: 'Use receipts, customer details, order notes, and payment references that explain what happened.',
        },
        {
          icon: 'userCheck',
          title: 'Confirm the customer',
          body: 'Match the payment workflow to the customer, channel, order type, and risk profile.',
        },
        {
          icon: 'barChart',
          title: 'Review activity',
          body: 'Watch transaction trends, refunds, failed attempts, and dispute patterns with more context.',
        },
        {
          icon: 'headphones',
          title: 'Support the workflow',
          body: 'Create a clearer path for customer questions, payment issues, and chargeback workflow support.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  virtualTerminal: {
    metadata: {
      title: 'Virtual Terminal - Charm Payments',
      description:
        'Run payments from any browser with a secure virtual terminal built for phone orders, keyed payments, reporting, and merchant support.',
    },
    hero: {
      eyebrow: 'VIRTUAL TERMINAL',
      headline: 'Run Payments From Anywhere With Confidence.',
      body: 'Our virtual terminal gives you a secure, browser-based way to accept payments, process phone orders, and manage transactions without extra hardware.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-ketut-subiyanto-4353613.jpg',
        alt: 'Merchant using a laptop for payment operations.',
        figureLabel: 'FIG. 01 - VIRTUAL TERMINAL',
        barcodeLabel: 'VTERM-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'POWERFUL. FLEXIBLE. BUILT FOR MERCHANTS.',
      headline: 'Everything You Need. One Powerful Platform.',
      cards: [
        {
          icon: 'wallet',
          title: 'Accept Payments Your Way',
          body: 'Key in payments, process phone orders, or accept customer payments from anywhere.',
        },
        {
          icon: 'lock',
          title: 'Secure & Reliable',
          body: 'Built with bank-grade security and compliance-first workflows you can trust.',
        },
        {
          icon: 'barChart',
          title: 'Track & Manage With Clarity',
          body: 'See transactions, settlements, refunds, and chargebacks in one simple dashboard.',
        },
        {
          icon: 'headphones',
          title: 'Support When You Need It',
          body: 'Real humans, real support, and guidance for your payment operations.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: sharedPlatform,
    readiness: {
      eyebrow: 'CHARGEBACK READINESS',
      headline: 'Good practices for keyed payments and phone orders.',
      body: 'Keyed payments and phone orders can carry more dispute risk because the card is not physically present. Charm helps merchants create cleaner workflows around authorization, receipts, customer notes, and transaction records.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Confirm the customer',
          body: "Before processing, verify the customer's name, contact information, billing details, and order information.",
        },
        {
          icon: 'receipt',
          title: 'Send clear receipts',
          body: 'Give the customer a receipt or payment confirmation that clearly explains what was charged and why.',
        },
        {
          icon: 'notebook',
          title: 'Keep order notes',
          body: 'Document what was purchased, who authorized it, and how the product or service was delivered.',
        },
        {
          icon: 'search',
          title: 'Watch unusual patterns',
          body: "Look for rushed requests, mismatched information, repeated failed attempts, or orders that do not fit the customer's normal behavior.",
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  tapToPay: {
    metadata: {
      title: 'Tap to Pay - Charm Payments',
      description:
        'Accept in-person payments with flexible tap-to-pay workflows designed for mobile teams, service businesses, events, and modern merchants.',
    },
    hero: {
      eyebrow: 'TAP TO PAY',
      headline: 'Accept In-Person Payments With Less Hardware And More Flexibility.',
      body: 'Give your team a cleaner way to accept contactless payments in the field, at events, or anywhere the customer is ready to pay.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/sumup-qCYj9p4Xp2w-unsplash.jpg',
        alt: 'Mobile merchant accepting a contactless payment.',
        figureLabel: 'FIG. 01 - TAP TO PAY',
        barcodeLabel: 'TAP-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'CONTACTLESS. MOBILE. BUILT FOR MERCHANTS.',
      headline: 'Checkout That Moves With The Customer.',
      cards: [
        {
          icon: 'smartphone',
          title: 'Take Contactless Payments',
          body: 'Accept in-person payments with a lighter workflow for counters, mobile teams, events, and service calls.',
        },
        {
          icon: 'wallet',
          title: 'Move With The Sale',
          body: 'Support payment moments that happen away from a fixed terminal or traditional checkout lane.',
        },
        {
          icon: 'barChart',
          title: 'Track Every Transaction',
          body: 'Keep payment activity connected to reporting, settlement, refunds, and customer records.',
        },
        {
          icon: 'headphones',
          title: 'Support Mobile Teams',
          body: 'Give operators clearer workflows when payment questions or customer issues need attention.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Tap to pay overview',
        recentActivity: ['Tap payment approved', 'Receipt sent', 'Payout scheduled', 'Refund note added'],
      },
    },
    readiness: {
      eyebrow: 'PAYMENT READINESS',
      headline: 'Good practices for in-person authorization and receipts.',
      body: 'Tap to Pay is built for fast in-person payment moments. Charm helps merchants keep cleaner records around authorization, receipt delivery, customer context, and transaction review.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Confirm the payment moment',
          body: 'Make sure the customer understands the amount, goods, service, and timing before the payment is accepted.',
        },
        {
          icon: 'receipt',
          title: 'Send clear receipts',
          body: 'Provide payment confirmation that identifies the business, amount, date, and what the customer purchased.',
        },
        {
          icon: 'notebook',
          title: 'Document exceptions',
          body: 'Add notes when the sale includes special instructions, deposits, partial payments, or unusual circumstances.',
        },
        {
          icon: 'search',
          title: 'Review unusual activity',
          body: 'Watch for repeated attempts, mismatched customer details, or payment patterns that do not fit the sale.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  cardPresent: {
    metadata: {
      title: 'Card Present Payment Processing - Charm Payments',
      description:
        'Bring reliable in-person checkout to retail counters, service floors, events, and field teams with Charm Payments card-present workflows.',
    },
    hero: {
      eyebrow: 'CARD PRESENT',
      headline: 'Bring Clean, Reliable Checkout To Your Counter, Floor, Or Field.',
      body: 'Charm Payments helps merchants accept in-person card payments with clearer reporting, reliable workflows, and support for real operating environments.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/sumup-aM4vzfIsAo0-unsplash.jpg',
        alt: 'Card-present payment terminal on a merchant counter.',
        figureLabel: 'FIG. 01 - CARD PRESENT',
        barcodeLabel: 'CARD-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'COUNTER. FLOOR. FIELD.',
      headline: 'In-Person Checkout With Better Operating Context.',
      cards: [
        {
          icon: 'wallet',
          title: 'Accept At The Counter',
          body: 'Support in-person card payments for retail counters, service desks, field teams, and event setups.',
        },
        {
          icon: 'receipt',
          title: 'Document The Sale',
          body: 'Use receipts, refund records, and transaction details to keep customer payment history clearer.',
        },
        {
          icon: 'barChart',
          title: 'Track Settlement',
          body: 'See card-present activity alongside payouts, refunds, and dispute signals in one operating view.',
        },
        {
          icon: 'headphones',
          title: 'Support Checkout Issues',
          body: 'Create a clearer path when a payment, refund, terminal issue, or customer question needs follow-up.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Card-present overview',
        recentActivity: ['Terminal payment approved', 'Receipt confirmed', 'Refund processed', 'Batch ready'],
      },
    },
    readiness: {
      eyebrow: 'CHECKOUT READINESS',
      headline: 'Good practices for terminal, receipt, and refund documentation.',
      body: 'Card-present sales can still create disputes when receipts, refunds, or customer expectations are unclear. Charm helps merchants keep payment records, receipt details, and refund activity easier to review.',
      practices: [
        {
          icon: 'receipt',
          title: 'Keep receipt records',
          body: 'Retain receipts or payment confirmations that connect the customer, amount, date, and purchase details.',
        },
        {
          icon: 'notebook',
          title: 'Document refund decisions',
          body: 'Track refunds, partial refunds, exchanges, and customer service notes in a consistent workflow.',
        },
        {
          icon: 'check',
          title: 'Confirm terminal context',
          body: 'Make sure terminal names, locations, and transaction references make sense for later review.',
        },
        {
          icon: 'search',
          title: 'Watch dispute patterns',
          body: 'Review repeated refunds, customer complaints, and unusual terminal activity before they become larger issues.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  ecommerce: {
    metadata: {
      title: 'Ecommerce Payments - Charm Payments',
      description:
        'Take online payments with checkout, reporting, risk visibility, and chargeback workflow support built for real merchants.',
    },
    hero: {
      eyebrow: 'ECOMMERCE PAYMENTS',
      headline: 'Take Online Payments With A Checkout Flow Built For Real Merchants.',
      body: 'Charm Payments supports online payment acceptance, gateway-ready workflows, clearer reporting, and risk visibility for merchants selling through digital channels.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-mockup-photos-270767-821222.jpg',
        alt: 'Online payment and ecommerce checkout environment.',
        figureLabel: 'FIG. 01 - ONLINE CHECKOUT',
        barcodeLabel: 'ECOM-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'CHECKOUT. RISK. CONTROL.',
      headline: 'Online Payments With Merchant-First Visibility.',
      cards: [
        {
          icon: 'shoppingCart',
          title: 'Accept Online Payments',
          body: 'Support checkout, hosted payment pages, online invoices, and digital payment workflows.',
        },
        {
          icon: 'wallet',
          title: 'Connect Checkout Workflows',
          body: 'Create gateway-ready payment paths for online stores, service businesses, and digital sellers.',
        },
        {
          icon: 'search',
          title: 'Monitor Risk Signals',
          body: 'Review payment activity, refund patterns, failed attempts, and order context with clearer reporting.',
        },
        {
          icon: 'notebook',
          title: 'Support Dispute Readiness',
          body: 'Keep the transaction, order, and customer context needed for chargeback workflow support.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Ecommerce payment overview',
        recentActivity: ['Online payment approved', 'Order note attached', 'Refund processed', 'Risk review updated'],
      },
    },
    readiness: {
      eyebrow: 'ORDER READINESS',
      headline: 'Good practices for shipping, delivery proof, fraud signals, and clear policies.',
      body: 'Online payments depend on more than checkout. Charm helps merchants keep cleaner records around order details, fulfillment, delivery, refund policies, and risk signals.',
      practices: [
        {
          icon: 'receipt',
          title: 'Keep order records',
          body: 'Connect payment records with item details, customer information, order notes, and policy acknowledgments.',
        },
        {
          icon: 'check',
          title: 'Document fulfillment',
          body: 'Retain shipping, delivery, pickup, or service completion details where they apply.',
        },
        {
          icon: 'search',
          title: 'Watch fraud signals',
          body: 'Review mismatched details, rushed orders, unusual quantities, repeated attempts, and abnormal customer behavior.',
        },
        {
          icon: 'notebook',
          title: 'Make policies clear',
          body: 'Keep refund, cancellation, shipping, and delivery expectations visible before and after checkout.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  ach: {
    metadata: {
      title: 'ACH & eCheck Payments - Charm Payments',
      description:
        'Support account-based payments, invoices, recurring billing, and larger-ticket transactions with ACH and eCheck workflows.',
    },
    hero: {
      eyebrow: 'ACH & ECHECK',
      headline: 'Move Bank Payments With Clearer Workflows And Lower Transaction Friction.',
      body: 'Charm Payments helps merchants support account-based payments for invoices, repeat billing, and larger-ticket transactions where card payments are not always the best fit.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-mart-production-7667447.jpg',
        alt: 'Merchant reviewing payment records for account-based payments.',
        figureLabel: 'FIG. 01 - ACH WORKFLOW',
        barcodeLabel: 'ACH-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'BANK PAYMENTS. CLEANER WORKFLOWS.',
      headline: 'Account-Based Payments With Better Visibility.',
      cards: [
        {
          icon: 'wallet',
          title: 'Accept Bank Payments',
          body: 'Support ACH and eCheck workflows for invoices, B2B payments, retainers, and repeat billing.',
        },
        {
          icon: 'receipt',
          title: 'Support Larger Tickets',
          body: 'Give customers another payment path when account-based payments fit the transaction better.',
        },
        {
          icon: 'barChart',
          title: 'Track Payment Status',
          body: 'Keep timing, payment status, returns, and customer records easier to review.',
        },
        {
          icon: 'headphones',
          title: 'Reduce Collection Friction',
          body: 'Create a clearer operating flow around authorizations, timing expectations, and payment questions.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'ACH payment overview',
        recentActivity: ['ACH payment submitted', 'Authorization saved', 'Payout scheduled', 'Return review updated'],
      },
    },
    readiness: {
      eyebrow: 'ACH READINESS',
      headline: 'Good practices for authorization records and payment timing expectations.',
      body: 'ACH and eCheck workflows depend on clear authorization and timing expectations. Charm helps merchants create cleaner records around customer permission, payment status, and follow-up.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Record authorization',
          body: 'Keep customer permission, account-based payment details, and approval context connected to the transaction.',
        },
        {
          icon: 'notebook',
          title: 'Explain timing',
          body: 'Set expectations for payment submission, processing, settlement, and possible return timing.',
        },
        {
          icon: 'receipt',
          title: 'Send confirmation',
          body: 'Give customers clear confirmation of what was authorized, when it was initiated, and what it covers.',
        },
        {
          icon: 'search',
          title: 'Watch return patterns',
          body: 'Review returned payments, repeated failures, mismatched details, and customer follow-up needs.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee payment or dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  invoicing: {
    metadata: {
      title: 'Payment Invoicing - Charm Payments',
      description:
        'Send invoices, collect payments, track follow-up, and manage payment activity with Charm Payments invoicing workflows.',
    },
    hero: {
      eyebrow: 'INVOICING',
      headline: 'Send Invoices, Collect Payments, And Keep Follow-Up Organized.',
      body: 'Charm Payments gives service businesses a cleaner way to send invoices, collect payments, track status, and keep payment follow-up from getting lost.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-ketut-subiyanto-4353613.jpg',
        alt: 'Service business reviewing invoices and payment records.',
        figureLabel: 'FIG. 01 - INVOICE WORKFLOW',
        barcodeLabel: 'INV-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'SEND. TRACK. COLLECT.',
      headline: 'Invoice Payments With Less Follow-Up Noise.',
      cards: [
        {
          icon: 'receipt',
          title: 'Send Payment Requests',
          body: 'Create invoice payment workflows that give customers a clear path to pay.',
        },
        {
          icon: 'wallet',
          title: 'Collect With Less Friction',
          body: 'Use payment links and clearer payment instructions to reduce manual follow-up.',
        },
        {
          icon: 'barChart',
          title: 'Track What Is Outstanding',
          body: 'See invoice status, payment activity, refunds, and follow-up needs in a cleaner view.',
        },
        {
          icon: 'headphones',
          title: 'Support Client Questions',
          body: 'Keep payment context available when a customer asks about an invoice or charge.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Invoice payment overview',
        recentActivity: ['Invoice payment approved', 'Reminder scheduled', 'Receipt sent', 'Service note added'],
      },
    },
    readiness: {
      eyebrow: 'INVOICE READINESS',
      headline: 'Good practices for signed approvals, service records, and invoice clarity.',
      body: 'Invoice disputes often come from unclear approvals, vague descriptions, or missing service records. Charm helps merchants keep cleaner payment and invoice context around what was approved and delivered.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Capture approval',
          body: 'Keep written approvals, signed estimates, work authorizations, or other customer confirmation where applicable.',
        },
        {
          icon: 'receipt',
          title: 'Make invoices clear',
          body: 'Use descriptions that explain the service, product, dates, payment amount, and what the customer is paying for.',
        },
        {
          icon: 'notebook',
          title: 'Keep service records',
          body: 'Document completed work, delivery, milestones, customer requests, and any changes to scope.',
        },
        {
          icon: 'search',
          title: 'Review late disputes',
          body: 'Watch for unpaid balances, recurring complaints, refund requests, or mismatched expectations.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  textToPay: {
    metadata: {
      title: 'Text to Pay - Charm Payments',
      description:
        'Collect payments through simple text-based workflows designed to reduce follow-up friction and improve customer convenience.',
    },
    hero: {
      eyebrow: 'TEXT TO PAY',
      headline: 'Turn Payment Follow-Up Into A Simple Text-Based Workflow.',
      body: 'Charm Payments helps merchants send payment requests by text so customers can respond quickly without a complicated checkout process.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/sumup-vfCarwPznBw-unsplash.jpg',
        alt: 'Mobile payment workflow for text-based payment collection.',
        figureLabel: 'FIG. 01 - TEXT TO PAY',
        barcodeLabel: 'TEXT-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'TEXT. LINK. PAYMENT.',
      headline: 'Payment Follow-Up Built For Customer Convenience.',
      cards: [
        {
          icon: 'smartphone',
          title: 'Send Payment Links',
          body: 'Create a simple text-based path for customers who need a fast way to pay.',
        },
        {
          icon: 'wallet',
          title: 'Collect Faster',
          body: 'Reduce friction when the customer is not standing at the counter or sitting at a desktop.',
        },
        {
          icon: 'barChart',
          title: 'Track Responses',
          body: 'Keep payment activity, receipt status, and follow-up context in the same operating view.',
        },
        {
          icon: 'headphones',
          title: 'Support Remote Payments',
          body: 'Give teams a clearer workflow when customers have questions about payment links or charges.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Text payment overview',
        recentActivity: ['Text link sent', 'Payment approved', 'Receipt delivered', 'Customer note saved'],
      },
    },
    readiness: {
      eyebrow: 'TEXT PAYMENT READINESS',
      headline: 'Good practices for consent, payment links, and message context.',
      body: 'Text-based payment requests work best when the customer understands why they are receiving the message. Charm helps merchants keep cleaner context around consent, payment links, receipts, and follow-up.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Confirm message context',
          body: 'Make sure the customer expects the payment request and understands what the link is for.',
        },
        {
          icon: 'receipt',
          title: 'Include clear details',
          body: 'Reference the business, amount, order, invoice, or service so the customer can recognize the charge.',
        },
        {
          icon: 'lock',
          title: 'Use secure links',
          body: 'Send payment links through controlled workflows instead of improvised or unclear payment instructions.',
        },
        {
          icon: 'notebook',
          title: 'Keep follow-up notes',
          body: 'Document customer questions, approvals, service details, and receipt confirmation where useful.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  recurringBilling: {
    metadata: {
      title: 'Recurring Billing - Charm Payments',
      description:
        'Manage repeat payments for subscriptions, memberships, retainers, service plans, and ongoing customer billing with clearer visibility.',
    },
    hero: {
      eyebrow: 'RECURRING BILLING',
      headline: 'Manage Repeat Payments With Visibility, Control, And Cleaner Operations.',
      body: 'Charm Payments supports repeat billing workflows for merchants managing subscriptions, memberships, retainers, service plans, and ongoing customer relationships.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-amina-filkins-5414041.jpg',
        alt: 'Merchant reviewing recurring customer billing activity.',
        figureLabel: 'FIG. 01 - RECURRING BILLING',
        barcodeLabel: 'RECUR-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'REPEAT PAYMENTS. CLEARER CONTROL.',
      headline: 'Recurring Billing With Better Operating Visibility.',
      cards: [
        {
          icon: 'refresh',
          title: 'Schedule Repeat Payments',
          body: 'Support subscriptions, memberships, retainers, service plans, and repeat customer billing.',
        },
        {
          icon: 'userCheck',
          title: 'Manage Customer Billing',
          body: 'Keep customer details, billing context, payment status, and follow-up needs easier to review.',
        },
        {
          icon: 'barChart',
          title: 'Track Failed Payments',
          body: 'Monitor retries, payment issues, cancellations, and billing activity with clearer reporting.',
        },
        {
          icon: 'headphones',
          title: 'Support Retainers And Plans',
          body: 'Create a cleaner workflow for customer questions, plan changes, and payment operations.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Recurring billing overview',
        recentActivity: ['Membership payment approved', 'Renewal notice sent', 'Card update needed', 'Plan note saved'],
      },
    },
    readiness: {
      eyebrow: 'RECURRING BILLING READINESS',
      headline: 'Good practices for recurring consent, cancellation clarity, and renewal notices.',
      body: 'Repeat billing needs clear customer expectations. Charm helps merchants keep cleaner records around recurring consent, billing schedules, cancellation terms, and renewal communications.',
      practices: [
        {
          icon: 'userCheck',
          title: 'Record recurring consent',
          body: 'Keep customer authorization, billing amount, billing frequency, and plan details connected to the account.',
        },
        {
          icon: 'receipt',
          title: 'Send billing confirmations',
          body: 'Provide receipts or confirmations that clearly explain what was charged and when.',
        },
        {
          icon: 'notebook',
          title: 'Clarify cancellation terms',
          body: 'Make cancellation, pause, refund, and renewal expectations easy for customers to understand.',
        },
        {
          icon: 'refresh',
          title: 'Track renewal changes',
          body: 'Document plan updates, renewal notices, failed payments, and customer billing questions.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  qrCodes: {
    metadata: {
      title: 'QR Code Payments - Charm Payments',
      description:
        'Use QR code payment workflows for restaurants, events, mobile merchants, and businesses that need lightweight checkout options.',
    },
    hero: {
      eyebrow: 'QR CODE PAYMENTS',
      headline: 'Let Customers Scan, Pay, And Move On.',
      body: 'Charm Payments helps merchants create lightweight payment moments with QR code workflows that fit counters, tables, events, and mobile operations.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/sumup-q5rzJsLCrUc-unsplash.jpg',
        alt: 'Customer payment environment for lightweight checkout.',
        figureLabel: 'FIG. 01 - QR CHECKOUT',
        barcodeLabel: 'QR-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'SCAN. PAY. CONFIRM.',
      headline: 'Lightweight Checkout With Real Payment Context.',
      cards: [
        {
          icon: 'qr',
          title: 'Create Scan-To-Pay Moments',
          body: 'Support simple payment flows for tables, counters, events, mobile setups, and customer-facing materials.',
        },
        {
          icon: 'smartphone',
          title: 'Reduce Checkout Friction',
          body: 'Give customers a faster path to payment without adding unnecessary hardware to every interaction.',
        },
        {
          icon: 'barChart',
          title: 'Track QR Activity',
          body: 'Keep payment activity connected to reporting, receipts, refunds, and customer support workflows.',
        },
        {
          icon: 'headphones',
          title: 'Support Flexible Environments',
          body: 'Use QR workflows where the sale happens without losing payment operations context.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'QR payment overview',
        recentActivity: ['QR payment approved', 'Receipt confirmed', 'Refund processed', 'Table note saved'],
      },
    },
    readiness: {
      eyebrow: 'QR CHECKOUT READINESS',
      headline: 'Good practices for clear checkout context and receipt confirmation.',
      body: 'QR payments should make it obvious what the customer is paying for. Charm helps merchants keep cleaner context around checkout location, payment amount, receipt delivery, and customer support.',
      practices: [
        {
          icon: 'qr',
          title: 'Label the payment context',
          body: 'Make sure the QR code connects clearly to the table, invoice, event, product, service, or checkout location.',
        },
        {
          icon: 'receipt',
          title: 'Confirm the receipt',
          body: 'Give customers a confirmation that shows the business, amount, date, and what was purchased.',
        },
        {
          icon: 'notebook',
          title: 'Keep location notes',
          body: 'Track where QR codes are used and how they connect to orders, staff, tables, or service areas.',
        },
        {
          icon: 'search',
          title: 'Review mismatched activity',
          body: 'Watch for payments tied to the wrong code, unusual refund activity, or customer confusion.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
  fraudProtection: {
    metadata: {
      title: 'Fraud Protection - Charm Payments',
      description:
        'Improve risk visibility, review payment activity, and support chargeback workflows with Charm Payments fraud protection tools.',
    },
    hero: {
      eyebrow: 'FRAUD PROTECTION',
      headline: 'See Risk Earlier And Respond Before It Becomes A Bigger Problem.',
      body: 'Charm Payments helps merchants improve risk visibility, monitor payment activity, and support chargeback workflows with clearer operational context.',
      proofPills: sharedProofPills,
      primaryCta,
      secondaryCta,
      visual: {
        src: '/images/pexels-mikhail-nilov-7681664.jpg',
        alt: 'Payment risk review and fraud monitoring workflow.',
        figureLabel: 'FIG. 01 - RISK VISIBILITY',
        barcodeLabel: 'RISK-2026',
      },
    },
    proofStripItems: sharedProofStrip,
    capabilitySection: {
      eyebrow: 'RISK VISIBILITY. DISPUTE READINESS.',
      headline: 'Fraud Support Without The Overpromises.',
      cards: [
        {
          icon: 'search',
          title: 'Review Risk Signals',
          body: 'Bring suspicious payment activity, order context, and customer signals into clearer view.',
        },
        {
          icon: 'barChart',
          title: 'Monitor Payment Activity',
          body: 'Watch failed attempts, unusual transaction patterns, refunds, and chargeback activity over time.',
        },
        {
          icon: 'notebook',
          title: 'Prepare Dispute Context',
          body: 'Keep cleaner transaction records, receipts, notes, and supporting details for review workflows.',
        },
        {
          icon: 'headphones',
          title: 'Support Chargeback Workflows',
          body: 'Give merchants a clearer process when payment disputes or risk questions need attention.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Three steps to a platform that works for the merchant.',
      emphasizedText: 'works for the merchant.',
      steps: sharedSteps,
    },
    platform: {
      ...sharedPlatform,
      mockup: {
        ...sharedPlatform.mockup,
        title: 'Risk visibility overview',
        recentActivity: ['Risk signal reviewed', 'Evidence note added', 'Refund processed', 'Dispute workflow updated'],
      },
    },
    readiness: {
      eyebrow: 'RISK READINESS',
      headline: 'Good practices for risk signals, evidence collection, and dispute workflows.',
      body: 'Fraud protection is not about promises. It is about better visibility, cleaner records, and a more organized workflow when transaction activity needs review.',
      practices: [
        {
          icon: 'search',
          title: 'Review risk signals',
          body: 'Watch for mismatched details, unusual order velocity, repeated failures, rushed requests, and abnormal behavior.',
        },
        {
          icon: 'notebook',
          title: 'Collect useful evidence',
          body: 'Keep receipts, order details, delivery context, customer notes, and service records organized.',
        },
        {
          icon: 'barChart',
          title: 'Track dispute patterns',
          body: 'Review where disputes come from by payment type, product, channel, customer segment, or workflow.',
        },
        {
          icon: 'headphones',
          title: 'Create response workflows',
          body: 'Make it easier for teams to understand what happened and what records are available for review.',
        },
      ],
      disclaimer:
        'These practices are designed to support better payment operations and dispute readiness. They do not guarantee fraud prevention or dispute outcomes.',
    },
    testimonials: sharedTestimonials,
    finalCta: sharedFinalCta,
  },
} satisfies Record<string, ProductFeaturePageContent>
