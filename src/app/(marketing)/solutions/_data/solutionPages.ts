import type { Metadata } from 'next'

export type SolutionIconKey =
  | 'barChart'
  | 'briefcase'
  | 'calendar'
  | 'card'
  | 'handHeart'
  | 'location'
  | 'risk'
  | 'shield'
  | 'shoppingCart'
  | 'smartphone'
  | 'store'
  | 'utensils'

type SolutionCta = {
  label: string
  href: string
}

type SolutionStep = {
  step: string
  title: string
  copy: string
}

export type SolutionPageContent = {
  slug: string
  industry: string
  metadata: Metadata
  eyebrow: string
  titleLines: string[]
  subtitle: string
  primaryCta: SolutionCta
  secondaryCta?: SolutionCta
  proofStrip: string[]
  supportCard: {
    eyebrow: string
    items: {
      icon: SolutionIconKey
      label: string
    }[]
  }
  figureLabel: string
  heroImage: {
    src: string
    alt: string
    caption: string
  }
  platformCard: {
    eyebrow: string
    items: string[]
    body: string
  }
  howItWorks: {
    kicker: string
    heading: string
    steps: SolutionStep[]
  }
  changes: {
    kicker: string
    items: SolutionStep[]
    image: {
      src: string
      alt: string
      caption: string
      body: string
    }
  }
  finalCta: {
    kicker: string
    title: string
    body: string
    primaryCta: SolutionCta
    secondaryCta?: SolutionCta
  }
  acceptedEverywhere: {
    eyebrow: string
    items: string[]
  }
}

const defaultPrimaryCta = { label: 'REQUEST AUDIT', href: '/quote' }
const defaultSecondaryCta = { label: 'TALK TO SALES', href: '/contact' }
const defaultFinalSecondaryCta = { label: 'TALK TO CHARM', href: '/contact' }
const defaultAcceptedEverywhere = [
  'Virtual Terminal',
  'Recurring Billing',
  'PCI DSS',
  'Visa',
  'Mastercard',
  'Amex',
  'Discover',
  'ACH/eCheck',
  'Apple Pay',
  'Google Pay',
]

export const solutionPages = {
  retail: {
    slug: 'retail',
    industry: 'Retail',
    metadata: {
      title: 'Retail & Boutique Payment Processing - Charm Payments',
      description: 'Premium merchant infrastructure for retail, boutiques, and multi-channel businesses.',
    },
    eyebrow: 'Retail payment solutions',
    titleLines: ['Take Payments.', 'Manage Your Store.', 'All In One Place.'],
    subtitle:
      'Charm Payments helps retail businesses accept payments, manage sales, reduce chargebacks, and keep operations moving from one simple platform.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['No Setup Fees', 'Transparent Pricing', 'No Long-Term Contracts'],
    supportCard: {
      eyebrow: 'Built for retail stores',
      items: [
        { icon: 'store', label: 'In-store, online, and mobile payments' },
        { icon: 'shield', label: 'Chargeback and fraud support' },
        { icon: 'barChart', label: 'Reporting built for daily sales' },
      ],
    },
    figureLabel: 'FIG. 01 - RETAIL FLOOR',
    heroImage: {
      src: '/images/sumup-K8c091KtYXs-unsplash.jpg',
      alt: 'Retail merchant checkout environment',
      caption: 'Retail merchant / checkout crop',
    },
    platformCard: {
      eyebrow: 'Works with your store setup',
      items: ['Shopify', 'WooCommerce', 'WordPress'],
      body: 'Connect online checkout, product pages, and store workflows without rebuilding your business.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Simple enough for the floor. Strong enough for the back office.',
      steps: [
        {
          step: '01',
          title: 'Accept payments anywhere',
          copy: 'Take payments in-store, online, and on the go without changing your workflow.',
        },
        {
          step: '02',
          title: 'Manage the store',
          copy: 'See sales, payouts, fees, and support in one simple dashboard.',
        },
        {
          step: '03',
          title: 'Keep risk moving down',
          copy: 'Reduce chargebacks and fraud with clear support when issues show up.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'For every kind of retail',
          copy: 'Built for local shops, boutiques, beauty supply, sneaker shops, pop-ups, and specialty retail.',
        },
        {
          step: '04.B',
          title: 'Clear pricing',
          copy: 'No setup fees, transparent pricing, and support that keeps the business moving.',
        },
        {
          step: '04.C',
          title: 'Retail operations',
          copy: 'Payments, chargebacks, fraud review, and day-to-day support in one place.',
        },
      ],
      image: {
        src: '/images/sumup-aM4vzfIsAo0-unsplash.jpg',
        alt: 'Retail payment terminal on a counter',
        caption: 'Retail terminal',
        body: 'Operational clarity without the extra noise.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See the operating picture.',
      body: 'Charm reviews the statement, payment workflow, and chargeback exposure before asking you to onboard. No fake urgency, no processor cosplay, no obligation.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  restaurants: {
    slug: 'restaurants',
    industry: 'Restaurants',
    metadata: {
      title: 'Restaurants & Food Service Payment Processing - Charm Payments',
      description:
        'Premium restaurant payment systems for restaurants, cafes, food trucks, bakeries, takeout, online ordering, and tip-friendly checkout flows.',
    },
    eyebrow: 'Restaurant payment solutions',
    titleLines: ['Serve Guests.', 'Settle Cleanly.', 'Know Every Cost.'],
    subtitle:
      'Charm Payments helps restaurants, cafes, food trucks, bakeries, takeout teams, and online ordering operations accept payments with tip-friendly checkout, clearer reporting, and chargeback support.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Tip-Friendly Checkout', 'Next-Day Settlement', 'Multi-Location Reporting'],
    supportCard: {
      eyebrow: 'Built for food service',
      items: [
        { icon: 'utensils', label: 'Counter, table, online, and mobile payments' },
        { icon: 'shield', label: 'Dispute support for tips and order issues' },
        { icon: 'barChart', label: 'Batch reporting by location and channel' },
      ],
    },
    figureLabel: 'FIG. 01 - SERVICE FLOW',
    heroImage: {
      src: '/images/christiann-koepke-WiE01mC9AtY-unsplash.jpg',
      alt: 'Restaurant counter payment environment',
      caption: 'Restaurant checkout / service crop',
    },
    platformCard: {
      eyebrow: 'Works with restaurant operations',
      items: ['Tableside', 'Online Ordering', 'Takeout', 'Food Trucks'],
      body: 'Connect card-present checkout, online orders, mobile events, and tip flows without fragmenting settlement.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Fast enough for the rush. Clear enough for the closeout.',
      steps: [
        {
          step: '01',
          title: 'Accept every channel',
          copy: 'Run in-house, takeout, online ordering, and mobile payments through a cleaner merchant setup.',
        },
        {
          step: '02',
          title: 'Keep tips clean',
          copy: 'Use tip-friendly checkout flows that settle predictably and reduce post-sale disputes.',
        },
        {
          step: '03',
          title: 'Read the closeout',
          copy: 'Track batches, fees, chargebacks, and settlement by location, terminal, or channel.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'Less processor mystery',
          copy: 'See what each payment type costs instead of guessing from a blended statement.',
        },
        {
          step: '04.B',
          title: 'More predictable deposits',
          copy: 'Build the payment workflow around settlement clarity after busy weekends and high-volume days.',
        },
        {
          step: '04.C',
          title: 'Better dispute posture',
          copy: 'Capture clearer payment data when guests dispute tips, orders, or delivery charges.',
        },
      ],
      image: {
        src: '/images/sumup-q5rzJsLCrUc-unsplash.jpg',
        alt: 'Restaurant payment terminal',
        caption: 'Restaurant terminal',
        body: 'Cleaner checkout for the table, counter, and back office.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See what the rush actually costs.',
      body: 'Charm reviews card mix, tip flow, online ordering, chargebacks, and settlement before recommending a restaurant payment setup.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  beauty: {
    slug: 'beauty',
    industry: 'Beauty',
    metadata: {
      title: 'Beauty & Salon Payment Processing - Charm Payments',
      description:
        'Payment systems for salons, barbershops, beauty supply stores, spas, nail techs, and appointment-based businesses.',
    },
    eyebrow: 'Beauty payment solutions',
    titleLines: ['Book Services.', 'Take Deposits.', 'Protect the Chair.'],
    subtitle:
      'Charm Payments supports salons, barbershops, beauty supply stores, spas, nail techs, and appointment-based businesses with card acceptance, deposits, memberships, and dispute support.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Deposits', 'Membership Billing', 'No-Show Protection'],
    supportCard: {
      eyebrow: 'Built for beauty operators',
      items: [
        { icon: 'calendar', label: 'Appointment, deposit, and card-on-file workflows' },
        { icon: 'store', label: 'Salon, spa, supply store, and mobile setups' },
        { icon: 'shield', label: 'Chargeback support for services and no-shows' },
      ],
    },
    figureLabel: 'FIG. 01 - APPOINTMENT FLOW',
    heroImage: {
      src: '/images/pexels-amina-filkins-5414041.jpg',
      alt: 'Beauty service payment environment',
      caption: 'Beauty merchant / appointment crop',
    },
    platformCard: {
      eyebrow: 'Works with beauty operations',
      items: ['Deposits', 'Memberships', 'Tips', 'Card on File'],
      body: 'Support appointment-based payments, retail product sales, tips, memberships, and secure client card storage.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Polished at checkout. Disciplined in the back office.',
      steps: [
        {
          step: '01',
          title: 'Protect the booking',
          copy: 'Collect deposits, keep cards on file, and reduce lost revenue from late cancellations.',
        },
        {
          step: '02',
          title: 'Run every service',
          copy: 'Accept payments for appointments, retail products, memberships, and mobile beauty work.',
        },
        {
          step: '03',
          title: 'Defend disputes',
          copy: 'Keep payment records clear when a service, deposit, or no-show becomes a chargeback.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'For appointment businesses',
          copy: 'Built for salons, barbershops, spas, nail techs, beauty supply, and mobile beauty pros.',
        },
        {
          step: '04.B',
          title: 'Cleaner recurring revenue',
          copy: 'Membership billing and card-on-file workflows reduce manual collection work.',
        },
        {
          step: '04.C',
          title: 'Less no-show exposure',
          copy: 'Deposits and documentation give operators a stronger position when appointments are missed.',
        },
      ],
      image: {
        src: '/images/pexels-rdne-7697434.jpg',
        alt: 'Salon payment counter',
        caption: 'Beauty checkout',
        body: 'Service payments, tips, and retail sales in one operating picture.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See what every service really nets.',
      body: 'Charm reviews service mix, tips, deposits, memberships, card-on-file needs, and chargeback exposure before recommending a beauty payment setup.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  ecommerce: {
    slug: 'ecommerce',
    industry: 'Ecommerce',
    metadata: {
      title: 'Ecommerce Payment Processing - Charm Payments',
      description:
        'Online payment infrastructure for stores that need checkout, fraud controls, gateway flexibility, and chargeback protection.',
    },
    eyebrow: 'Ecommerce payment solutions',
    titleLines: ['Convert Checkout.', 'Control Risk.', 'Keep More Margin.'],
    subtitle:
      'Charm Payments gives online stores payment infrastructure for checkout, fraud controls, gateway flexibility, recurring billing, and chargeback protection.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Gateway Flexibility', 'Fraud Controls', 'Chargeback Defense'],
    supportCard: {
      eyebrow: 'Built for online merchants',
      items: [
        { icon: 'shoppingCart', label: 'Checkout, carts, invoices, and hosted payment links' },
        { icon: 'risk', label: 'Fraud rules, risk review, and dispute workflows' },
        { icon: 'barChart', label: 'Reporting for online volume and card mix' },
      ],
    },
    figureLabel: 'FIG. 01 - CHECKOUT FLOW',
    heroImage: {
      src: '/images/pexels-mockup-photos-270767-821222.jpg',
      alt: 'Online checkout and ecommerce payment environment',
      caption: 'Online checkout / gateway crop',
    },
    platformCard: {
      eyebrow: 'Works with your commerce stack',
      items: ['Shopify', 'WooCommerce', 'BigCommerce', 'Custom API'],
      body: 'Support hosted checkout, cart integrations, subscriptions, digital wallets, and gateway routing.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Flexible enough for checkout. Controlled enough for risk.',
      steps: [
        {
          step: '01',
          title: 'Connect checkout',
          copy: 'Bring online payments, hosted pages, subscriptions, and cart flows into one merchant setup.',
        },
        {
          step: '02',
          title: 'Tune risk rules',
          copy: 'Use fraud controls, AVS, CVV, velocity rules, and review workflows that match your product mix.',
        },
        {
          step: '03',
          title: 'Defend revenue',
          copy: 'Improve documentation and chargeback response when online orders are disputed.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'Gateway choice',
          copy: 'Avoid getting locked into one checkout path when your store needs flexibility.',
        },
        {
          step: '04.B',
          title: 'Fraud visibility',
          copy: 'See risk patterns by product, channel, customer, or card type before losses compound.',
        },
        {
          step: '04.C',
          title: 'Chargeback readiness',
          copy: 'Keep the payment data and order evidence needed to respond quickly.',
        },
      ],
      image: {
        src: '/images/hero-devices.png',
        alt: 'Payment dashboard across devices',
        caption: 'Online payment stack',
        body: 'Checkout, gateway routing, fraud controls, and reporting in one operating layer.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See what checkout is costing.',
      body: 'Charm reviews card mix, gateway needs, fraud exposure, chargebacks, subscriptions, and checkout flow before recommending the right payment infrastructure.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  'high-risk': {
    slug: 'high-risk',
    industry: 'High Risk',
    metadata: {
      title: 'High-Risk Payment Processing - Charm Payments',
      description:
        'Payment strategy for merchants that need stronger underwriting, risk controls, gateway routing, and chargeback defense.',
    },
    eyebrow: 'High-risk payment solutions',
    titleLines: ['Underwrite Clearly.', 'Route Smarter.', 'Defend Revenue.'],
    subtitle:
      'Charm Payments helps higher-risk merchants build payment strategy around underwriting, risk controls, gateway routing, fraud reduction, and chargeback defense.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Risk Review', 'Gateway Routing', 'Chargeback Defense'],
    supportCard: {
      eyebrow: 'Built for complex risk',
      items: [
        { icon: 'risk', label: 'Underwriting strategy for complex merchant profiles' },
        { icon: 'shield', label: 'Fraud reduction and chargeback response support' },
        { icon: 'barChart', label: 'Volume, reserve, and dispute visibility' },
      ],
    },
    figureLabel: 'FIG. 01 - RISK PROFILE',
    heroImage: {
      src: '/images/pexels-mikhail-nilov-7681664.jpg',
      alt: 'Risk and payment operations review',
      caption: 'Risk review / underwriting crop',
    },
    platformCard: {
      eyebrow: 'Works with risk operations',
      items: ['Underwriting', 'Routing', 'Fraud Rules', 'Disputes'],
      body: 'Support stronger applications, gateway flexibility, fraud filters, reserves, and chargeback documentation.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Structured enough for underwriting. Practical enough to operate.',
      steps: [
        {
          step: '01',
          title: 'Review the risk profile',
          copy: 'Map volume, product, fulfillment, refund, and dispute factors before choosing a path.',
        },
        {
          step: '02',
          title: 'Build the payment stack',
          copy: 'Align gateway routing, fraud controls, reserves, and settlement expectations with the business.',
        },
        {
          step: '03',
          title: 'Improve defense',
          copy: 'Reduce preventable disputes and prepare clearer evidence when chargebacks arrive.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'Better application posture',
          copy: 'Underwriting starts with a clearer story, cleaner documents, and realistic processing expectations.',
        },
        {
          step: '04.B',
          title: 'More control over routing',
          copy: 'Gateway flexibility helps protect approval rates and continuity as risk changes.',
        },
        {
          step: '04.C',
          title: 'Stronger dispute workflow',
          copy: 'Chargeback defense is built into the operating model instead of handled after losses spike.',
        },
      ],
      image: {
        src: '/images/pexels-shkrabaanthony-7342621.jpg',
        alt: 'Payment risk documentation review',
        caption: 'Risk operations',
        body: 'Underwriting, routing, fraud controls, and dispute defense with fewer blind spots.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See where the risk is concentrated.',
      body: 'Charm reviews statements, chargebacks, fulfillment model, gateway needs, and underwriting constraints before recommending a high-risk payment path.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  mobile: {
    slug: 'mobile',
    industry: 'Mobile',
    metadata: {
      title: 'Mobile Payment Processing - Charm Payments',
      description:
        'Payment acceptance for mobile businesses, pop-ups, field services, food trucks, delivery, and on-the-go merchants.',
    },
    eyebrow: 'Mobile payment solutions',
    titleLines: ['Take Payments.', 'Move Locations.', 'Keep Selling.'],
    subtitle:
      'Charm Payments supports mobile businesses, pop-ups, field services, food trucks, delivery operators, and on-the-go merchants with flexible payment acceptance and clear reporting.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Mobile Readers', 'Payment Links', 'Field Reporting'],
    supportCard: {
      eyebrow: 'Built for mobile merchants',
      items: [
        { icon: 'smartphone', label: 'Mobile card, tap, invoice, and payment link flows' },
        { icon: 'location', label: 'Pop-up, event, delivery, and field service support' },
        { icon: 'barChart', label: 'Reporting that follows every location and route' },
      ],
    },
    figureLabel: 'FIG. 01 - MOBILE CHECKOUT',
    heroImage: {
      src: '/images/sumup-qCYj9p4Xp2w-unsplash.jpg',
      alt: 'Mobile merchant accepting payment',
      caption: 'Mobile payment / field crop',
    },
    platformCard: {
      eyebrow: 'Works wherever you sell',
      items: ['Card Reader', 'Tap to Pay', 'Text Links', 'Invoices'],
      body: 'Accept payments at events, job sites, deliveries, pop-ups, and mobile appointments without losing reporting clarity.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Portable at the point of sale. Serious in the back office.',
      steps: [
        {
          step: '01',
          title: 'Take payment in the field',
          copy: 'Use mobile readers, tap flows, links, invoices, and card-on-file where the sale happens.',
        },
        {
          step: '02',
          title: 'Track every location',
          copy: 'Keep batches, deposits, fees, and disputes visible even when the business moves.',
        },
        {
          step: '03',
          title: 'Keep options open',
          copy: 'Support in-person, remote, invoice, and delivery payments from one merchant setup.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'For businesses on the move',
          copy: 'Built for pop-ups, food trucks, contractors, delivery, field services, and mobile professionals.',
        },
        {
          step: '04.B',
          title: 'More payment options',
          copy: 'Take cards in person or send secure links when hardware is not the right fit.',
        },
        {
          step: '04.C',
          title: 'Cleaner route reporting',
          copy: 'See what was processed by location, day, operator, or channel.',
        },
      ],
      image: {
        src: '/images/sumup-uALOu8Rdv9M-unsplash.jpg',
        alt: 'Mobile payment terminal in use',
        caption: 'Field payment terminal',
        body: 'A mobile payment stack that still behaves like real infrastructure.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See what mobile sales actually cost.',
      body: 'Charm reviews mobile volume, channels, card mix, settlement, and dispute exposure before recommending an on-the-go payment setup.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
  services: {
    slug: 'services',
    industry: 'Services',
    metadata: {
      title: 'Service Business Payment Processing - Charm Payments',
      description:
        'Payments for service businesses, contractors, consultants, agencies, repair companies, and professional operators.',
    },
    eyebrow: 'Service business payment solutions',
    titleLines: ['Invoice Clients.', 'Collect Faster.', 'Protect Cash Flow.'],
    subtitle:
      'Charm Payments helps service businesses, contractors, consultants, agencies, repair companies, and professional operators accept invoices, retainers, ACH, and card payments with less friction.',
    primaryCta: defaultPrimaryCta,
    secondaryCta: defaultSecondaryCta,
    proofStrip: ['Virtual Terminal', 'ACH Payments', 'Recurring Billing'],
    supportCard: {
      eyebrow: 'Built for service operators',
      items: [
        { icon: 'briefcase', label: 'Invoices, retainers, contracts, and B2B payments' },
        { icon: 'card', label: 'Card, ACH, virtual terminal, and payment link acceptance' },
        { icon: 'barChart', label: 'Cash flow and settlement reporting for operators' },
      ],
    },
    figureLabel: 'FIG. 01 - CLIENT PAYMENT',
    heroImage: {
      src: '/images/pexels-ketut-subiyanto-4353613.jpg',
      alt: 'Professional service payment workflow',
      caption: 'Service business / invoice crop',
    },
    platformCard: {
      eyebrow: 'Works with service workflows',
      items: ['Invoices', 'ACH', 'Retainers', 'Payment Links'],
      body: 'Support card-not-present payments, recurring retainers, bank transfers, and secure payment links.',
    },
    howItWorks: {
      kicker: 'How it works',
      heading: 'Built for invoices, retainers, and real cash flow.',
      steps: [
        {
          step: '01',
          title: 'Collect the invoice',
          copy: 'Send secure links, take phone payments, or accept ACH for larger balances.',
        },
        {
          step: '02',
          title: 'Automate retainers',
          copy: 'Use recurring billing for contracts, subscriptions, service plans, and ongoing client work.',
        },
        {
          step: '03',
          title: 'Watch settlement',
          copy: 'See fees, batches, deposits, disputes, and failed payments clearly.',
        },
      ],
    },
    changes: {
      kicker: 'What changes',
      items: [
        {
          step: '04.A',
          title: 'For professional operators',
          copy: 'Built for contractors, consultants, agencies, repair companies, and service firms.',
        },
        {
          step: '04.B',
          title: 'Lower-cost payment choices',
          copy: 'Use ACH for large invoices and cards where speed or convenience matters.',
        },
        {
          step: '04.C',
          title: 'Less collection drag',
          copy: 'Payment links, recurring billing, and virtual terminal access reduce follow-up work.',
        },
      ],
      image: {
        src: '/images/pexels-mart-production-7667447.jpg',
        alt: 'Service business reviewing payment records',
        caption: 'Service payment operations',
        body: 'Invoice, retainer, ACH, and card payments in one payment operating layer.',
      },
    },
    finalCta: {
      kicker: 'Start with the audit',
      title: 'Send the statement. See what collection really costs.',
      body: 'Charm reviews invoice mix, ACH opportunity, recurring billing needs, card costs, and dispute exposure before recommending a service business payment setup.',
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultFinalSecondaryCta,
    },
    acceptedEverywhere: {
      eyebrow: 'Accepted everywhere',
      items: defaultAcceptedEverywhere,
    },
  },
} satisfies Record<string, SolutionPageContent>
