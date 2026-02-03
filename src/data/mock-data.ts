import type { Service, Testimonial, Benefit, Stat, NavItem, Problem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    id: 'conversion-audit',
    title: 'Conversion QA Audit',
    description: 'Your store may look fine — but hidden issues can silently hurt conversions. Our Conversion QA Audit reviews your entire buying journey to uncover issues.',
    features: [
      'Homepage → PLP (Collection) → PDP (Product) → Cart → Checkout',
      'Payment gateways testing',
      'Discounts & coupons validation',
      'Shipping & taxes verification',
      'Mobile experience review',
      'Error handling & app/plugin conflicts',
    ],
    ctaText: 'Request Audit',
    ctaLink: '/services/conversion-qa',
    deliverable: 'Clear, actionable QA report with screenshots, Loom video walkthroughs, and fix recommendations.',
  },
  {
    id: 'bug-bash',
    title: 'Bug Bash (Shopify Expert QA Testing)',
    description: 'We deploy 10–50 Shopify QA experts to stress-test your store like real buyers — but with professional precision.',
    features: [
      'PLP, PDP, Cart & Checkout flows',
      'Mobile experience testing',
      'Payments & discounts validation',
      'Edge cases & error handling',
      'Conversion blockers & revenue leaks',
      'End-to-end customer journey',
    ],
    ctaText: 'Start Bug Bash',
    ctaLink: '/services/bug-bash',
    deliverable: 'Screenshots, screen recordings, Loom videos, detailed bug reports with prioritized issue list and fix guidance.',
  },
  {
    id: 'monthly-support',
    title: 'Monthly Release QA Support',
    description: 'Every store update can break something — especially checkout and payments. We provide structured QA checks for each release using a proven checklist.',
    features: [
      'Release regression testing',
      'Checkout & payment validation',
      'Mobile UX checks',
      'Critical flow verification',
      'Discount & app conflicts detection',
    ],
    ctaText: 'Get Monthly Support',
    ctaLink: '/services/monthly-qa',
    deliverable: 'Release QA checklist, bug reports, screenshots & Loom videos, and go-live confidence.',
  },
  {
    id: 'custom-support',
    title: 'Custom QA Support / Dedicated QA Team Member',
    description: 'Need flexible QA support for special projects or ongoing work? We offer scoped, on-demand QA services or a dedicated Shopify QA team member.',
    features: [
      'New theme or redesign testing',
      'App/plugin changes validation',
      'Store migrations support',
      'Major promotions & sales events',
      'Performance or UX reviews',
      'Dedicated Shopify QA team member (monthly or hourly)',
    ],
    ctaText: 'Discuss Custom Needs',
    ctaLink: '/contact',
    deliverable: 'Clear scope & timeline, dedicated QA support with professional documentation.',
  },
];

export const serviceDetails = {
  'conversion-audit': {
    subtitle: '(One-Time Store Health Check)',
    bestFor: ['Stores running ads', 'Growing brands', 'New launches', 'Conversion optimization'],
    goal: 'Fix issues before they cost you sales.',
    issues: ['Checkout friction', 'Mobile UX problems', 'Payment failures', 'Broken flows', 'Conversion blockers', 'Revenue leaks'],
  },
  'bug-bash': {
    subtitle: '(Deep Testing Sprint)',
    bestFor: ['Pre-launch testing', 'Big updates', 'Theme changes', 'High-traffic campaigns', 'Sales events'],
    goal: 'Catch critical issues before customers do.',
  },
  'monthly-support': {
    subtitle: '(Checklist-Based Testing for Every Update)',
    bestFor: ['Growing Shopify brands', 'Frequent updates', 'Ongoing optimization', 'Dev teams without QA'],
    goal: 'Ship updates without breaking sales.',
  },
  'custom-support': {
    subtitle: '(Task-Based or Monthly / Hourly QA)',
    bestFor: ['Special projects', 'High-risk changes', 'Temporary QA staffing', 'Growing teams'],
    goal: 'Get expert QA help when you need it — without long-term risk.',
  },
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'ShopifyQA helped us identify critical checkout issues before our campaign launch. Their reports were clear, practical, and easy for our dev team to fix.',
    author: 'Founder',
    role: 'DTC Brand',
    company: 'USA',
  },
  {
    id: '2',
    quote: 'The Bug Bash uncovered payment and mobile issues we would have completely missed. ShopifyQA saved us from a risky launch.',
    author: 'E-commerce Manager',
    role: 'Shopify Store',
    company: '',
  },
  {
    id: '3',
    quote: 'Having ShopifyQA test every release gives us peace of mind. We ship faster now without worrying about breaking checkout or payments.',
    author: 'Product Lead',
    role: 'Shopify Plus Brand',
    company: '',
  },
  {
    id: '4',
    quote: 'Our mobile checkout had hidden UX problems. ShopifyQA caught them and shared Loom videos that made fixes easy.',
    author: 'Growth Manager',
    role: 'DTC Brand',
    company: '',
  },
  {
    id: '5',
    quote: 'We realized how much revenue we were risking without proper QA. ShopifyQA became an essential part of our release process.',
    author: 'Founder',
    role: 'E-commerce Brand',
    company: '',
  },
  {
    id: '6',
    quote: 'The audit revealed multiple conversion blockers we didn\'t even know existed. ShopifyQA\'s insights were extremely valuable.',
    author: 'Store Owner',
    role: 'Shopify Store',
    company: '',
  },
  {
    id: '7',
    quote: 'ShopifyQA fits perfectly into our development workflow. Their testing helps us deliver higher-quality stores to our clients.',
    author: 'Agency Partner',
    role: 'Development Agency',
    company: '',
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Shopify-Focused Specialists',
    description: 'We exclusively test Shopify stores. This deep specialization means we know exactly where bugs hide.',
  },
  {
    title: 'Revenue-Driven Testing',
    description: 'We prioritize testing checkout, payments, and conversion paths—the flows that directly impact your bottom line.',
  },
  {
    title: 'Expert QA Professionals',
    description: 'Our team consists of experienced Shopify testers who understand the platform inside and out.',
  },
  {
    title: 'Clear, Actionable Reports',
    description: 'Every bug comes with screenshots, steps to reproduce, and Loom video walkthroughs. No ambiguity.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Most audits are completed within 48-72 hours. Because every day with bugs is revenue lost.',
  },
  {
    title: 'Flexible Pricing',
    description: 'Professional QA testing that fits your budget. Get exactly what you need without overpaying.',
  },
];

export const stats: Stat[] = [
  { value: '500+', label: 'Stores Tested' },
  { value: '15,000+', label: 'Bugs Found' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$2.4M+', label: 'Revenue Protected' },
];

export const problems: Problem[] = [
  {
    title: 'Broken Checkout Flows',
    description: 'Hidden checkout bugs silently driving customers away at the critical moment of purchase.',
  },
  {
    title: 'Mobile UX Issues',
    description: 'Your mobile users see broken layouts, unclickable buttons, and frustrating experiences.',
  },
  {
    title: 'Payment Failures',
    description: 'Payment processing errors frustrate customers and lose sales when they\'re ready to buy.',
  },
  {
    title: 'App/Plugin Conflicts',
    description: 'After installing a new app or updating your theme, something broke—but you can\'t figure out what.',
  },
  {
    title: 'Slow Pages',
    description: 'Slow loading times cause customers to abandon before they even see your products.',
  },
  {
    title: 'Coupon & Discount Errors',
    description: 'Discount codes that don\'t work properly lead to frustrated customers and lost trust.',
  },
];

export const freeAuditIncludes = {
  tests: [
    'Mobile checkout experience',
    'Cart flow functionality',
    'Payment experience',
    'UX issues identification',
  ],
  deliverables: [
    '5–10 actionable insights',
    'Screenshots of issues found',
    'Fix suggestions for each issue',
  ],
};

export const solutionFeatures = [
  'Catch bugs before customers do',
  'Improve mobile checkout',
  'Fix conversion blockers',
  'Reduce cart abandonment',
  'Increase completed purchases',
];

export const trustIndicators = [
  'Shopify-focused QA specialists',
  'Revenue-driven testing',
  'Clear reports & Loom videos',
  'Fast turnaround',
];
