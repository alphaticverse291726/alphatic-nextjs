export const PLANS = [
  { key: 'starter', name: 'Starter', price: '₹15,000', period: '/month', featured: false,
    desc: 'Single clinic. Everything a solo practice needs.',
    features: ['Single clinic, single location', 'Up to 5 users', 'Core modules (patient, scheduling, billing)', '100 AI documentation credits/month', 'Email support'],
    cta: 'Start 30-day free trial' },
  { key: 'growth', name: 'Growth', price: '₹35,000', period: '/month', featured: true,
    desc: 'Multi-doctor clinic with advanced features and priority support.',
    features: ['Multi-doctor clinic', 'Up to 20 users', 'All modules including inventory & analytics', '500 AI documentation credits/month', 'Phone + priority email support'],
    cta: 'Start 30-day free trial' },
  { key: 'enterprise', name: 'Enterprise', price: 'Custom', period: '', featured: false,
    desc: 'Multi-location DSO, hospital networks, or group practices.',
    features: ['Unlimited locations & users', 'Full module suite + custom integrations', 'Unlimited AI documentation', 'Dedicated onboarding + 24/7 SLA support'],
    cta: 'Talk to sales' },
];

export const FAQS = [
  { q: 'Is there a free trial?', a: 'Yes — all plans include a 30-day free trial with full access and a dedicated onboarding team. No credit card required to start.' },
  { q: 'What happens after the trial ends?', a: "You'll be contacted by our team to convert to a paid plan. If you choose not to continue, your data is exported and deleted within 30 days. No charges without explicit confirmation." },
  { q: 'Is my clinic data secure?', a: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Stored on servers in India. HIPAA-compliant and ABDM-ready.' },
  { q: 'Can I migrate from another system?', a: 'Yes. Our onboarding team handles data migration from Dental Desk, Practo, Marg, and others. Migrations are done at no charge.' },
  { q: 'Does it work in low-connectivity areas?', a: 'Core functions work with 3G connectivity. AI documentation queues and syncs when connectivity is restored.' },
  { q: 'What specialties are supported?', a: 'Dental is live today. OBGYN, Cardiology, and Orthopedics launching Mid-2026. Nephrology, Dermatology, and GP planned for Late-2026.' },
];
