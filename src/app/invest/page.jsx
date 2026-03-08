'use client';
import { useModal } from '@/lib/ModalContext';

const METRICS = [
  { val: '₹50K Cr+', label: 'Indian healthcare IT TAM' },
  { val: '1.5M+', label: 'Registered clinics in India' },
  { val: '<15%', label: 'Using modern software' },
  { val: '7', label: 'Specialties planned by 2027' },
];

const TRACTION = [
  { val: '50+', label: 'Live clinics' },
  { val: '0', label: 'Churn in 90 days' },
  { val: '+13%', label: 'Avg collection improvement' },
  { val: '70%', label: 'Documentation time saved' },
];

const WHY = [
  { icon: '🏥', title: 'Massive, underserved market', desc: 'India has 1.5M+ clinics with <15% using modern software. We are going after a ₹50,000 crore opportunity.' },
  { icon: '🔒', title: 'Deep moats', desc: 'Specialty-specific workflows, proprietary AI models in 7 Indian languages, and real clinical data create compounding advantages.' },
  { icon: '📈', title: 'Land and expand', desc: 'We start with one specialty per clinic and expand. Each additional specialty is near-zero CAC on an existing relationship.' },
  { icon: '🚀', title: 'Proven traction', desc: 'Dental OS live with 50+ clinics, zero churn, and measurable clinical and financial outcomes in 90 days.' },
];

export default function InvestPage() {
  const { openModal } = useModal();
  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Investor Relations</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,58px)', fontWeight: 400, fontStyle: 'italic', maxWidth: 680, marginBottom: 20, lineHeight: 1.05 }}>
            Invest in the operating system <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>for healthcare</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 520, lineHeight: 1.75 }}>
            Building vertical SaaS for every major medical specialty in India — starting with dental, expanding to cover the entire country.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two-col">
          <div>
            <span className="sec-label">The opportunity</span>
            <h2 style={{ fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 600, marginBottom: 20, letterSpacing: '-.01em' }}>
              India's healthcare IT market is massively underserved
            </h2>
            <div className="metric-grid">
              {METRICS.map((m) => (
                <div key={m.label} className="metric-cell">
                  <div className="metric-val">{m.val}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="sec-label">Current traction</span>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, letterSpacing: '-.01em' }}>Dental OS — 90-day proof</h3>
            <div className="metric-grid">
              {TRACTION.map((m) => (
                <div key={m.label} className="metric-cell">
                  <div className="metric-val" style={{ color: 'var(--a1)' }}>{m.val}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 48 }}>
            <span className="sec-label">Why invest</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              Why Alphatic wins <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>this market</strong>
            </h2>
          </div>
          <div className="inv-grid">
            {WHY.map((w) => (
              <div key={w.title} className="inv-cell">
                <span className="inv-icon">{w.icon}</span>
                <div className="inv-title">{w.title}</div>
                <p className="inv-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="cta-banner">
            <h2>Request investor materials</h2>
            <p>Deck, financials, and founder availability on request. We are raising our Series A.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-p btn-lg" onClick={openModal}>Request investor deck</button>
              <button className="btn btn-o btn-lg" onClick={openModal}>Meet the founders</button>
            </div>
            <p style={{ marginTop: 20, fontSize: 11, color: 'var(--td)', fontFamily: 'var(--ff-mono)' }}>invest@alphaticlabs.in</p>
          </div>
        </div>
      </section>
    </>
  );
}
