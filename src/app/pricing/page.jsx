'use client';
import { useState } from 'react';
import { PLANS, FAQS } from '@/data/pricing';
import { useModal } from '@/lib/ModalContext';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

export default function PricingPage() {
  const { openModal } = useModal();
  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Pricing</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 16 }}>
            Simple, <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>transparent pricing</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 15, maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
            All plans include a 30-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="plan-grid">
            {PLANS.map((plan) => (
              <div key={plan.key} className={`plan-card${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <div className="plan-featured-tag">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div>
                  <span className="plan-price">{plan.price}</span>
                  {plan.period && <span className="plan-period">{plan.period}</span>}
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-divider" />
                <ul className="plan-features">
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="plan-cta">
                  <button className={`btn ${plan.featured ? 'btn-p' : 'btn-o'}`} style={{ width: '100%', justifyContent: 'center' }} onClick={openModal}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Compare note */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden', marginBottom: 64 }}>
            {[
              { icon: '🛡', t: 'HIPAA Compliant', d: 'All plans include full compliance' },
              { icon: '🇮🇳', t: 'India-hosted Data', d: 'Data never leaves Indian servers' },
              { icon: '🔄', t: 'Free Migration', d: 'We migrate your data at no cost' },
              { icon: '🎓', t: 'Free Onboarding', d: 'Dedicated team for setup' },
            ].map((item) => (
              <div key={item.t} className="h-bg" style={{ padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 11, color: 'var(--tm)' }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <span className="sec-label">Frequently asked questions</span>
            {FAQS.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner">
            <h2>Start your free trial today</h2>
            <p>30 days. Full access. Onboarding team included. No credit card.</p>
            <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial →</button>
          </div>
        </div>
      </section>
    </>
  );
}
