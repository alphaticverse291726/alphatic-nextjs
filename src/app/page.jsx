'use client';
import Link from 'next/link';
import { useModal } from '@/lib/ModalContext';

const TICKER_ITEMS = [
  '50+ live clinics', '70% less documentation time', '+13% collection rate',
  '0 churn in 90 days', '7 Indian languages', '30-day free trial',
  'Chennai · Bengaluru', 'Dental OS live', 'OBGYN coming Mid-2026',
];

const BENTO = [
  { icon: '🎙', num: '01', title: 'AI Clinical Documentation', desc: 'Doctor speaks naturally — in any of 7 Indian languages. System listens, structures, and fills the complete case sheet.', wide: true },
  { icon: '📅', num: '02', title: 'Smart Scheduling', desc: 'Chair-time optimisation, walk-in handling, and multi-doctor conflict resolution.' },
  { icon: '💰', num: '03', title: 'Revenue Intelligence', desc: 'Real-time P&L, collection tracking, outstanding dues — from any device.' },
  { icon: '📦', num: '04', title: 'Inventory & Supplies', desc: 'Auto-reorder triggers. Procedure-linked consumption.' },
  { icon: '🏥', num: '05', title: 'Multi-Location DSO', desc: 'Manage 1 or 100 clinics from one dashboard.', wide: true },
  { icon: '👥', num: '06', title: 'Staff & Payroll', desc: 'Attendance, commissions, roles, and payroll in one place.' },
];

const TESTIMONIALS = [
  { quote: 'The AI documentation alone saves me 90 minutes every day. I used to spend 40% of my time on paperwork. Now I spend 100% on patients.', initials: 'DR', name: 'Dr. Rajesh Kumar', role: 'Smile Studio · Chennai' },
  { quote: 'Our no-show rate dropped from 24% to 6% in the first month. Switching to Alphatic was the best operational decision we made.', initials: 'PA', name: 'Priya Acharya', role: 'OrthoCare · Bengaluru' },
  { quote: 'Managing 4 clinics with 12 doctors was a coordination nightmare. We improved group-level collection by 18% in 3 months.', initials: 'SN', name: 'Dr. Suresh Nair', role: 'NairDental Group · Kochi' },
];

const SPECIALTIES = [
  { emoji: '🦷', name: 'Dental', status: 'live' },
  { emoji: '🤰', name: 'OBGYN', status: 'Mid-2026' },
  { emoji: '❤️', name: 'Cardiology', status: 'Mid-2026' },
  { emoji: '🦴', name: 'Orthopedics', status: 'Mid-2026' },
  { emoji: '🩺', name: 'Nephrology', status: 'Late-2026' },
  { emoji: '🔬', name: 'Dermatology', status: 'Late-2026' },
  { emoji: '⚕️', name: 'General Practice', status: 'Late-2026' },
];

export default function HomePage() {
  const { openModal } = useModal();

  const tickerAll = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-line" />
        <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim-up" style={{ marginBottom: 24 }}>
            <span className="chip">
              <span className="live-dot" />
              Dental OS — Live in 50+ clinics
            </span>
          </div>
          <h1 className="hero-tagline anim-up-1">
            The clinic OS<br /><strong>India deserves</strong>
          </h1>
          <p className="hero-sub anim-up-2">
            Specialty-specific software that connects clinical workflows, patient data, and financial operations into one unified platform.
          </p>
          <div className="hero-btns anim-up-3">
            <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial — 30 days</button>
            <button className="btn btn-o btn-lg" onClick={openModal}>Watch demo →</button>
          </div>
          <div className="hero-stats anim-up-3">
            <div className="hero-stat"><div className="hero-stat-n">50+</div><div className="hero-stat-l">Live clinics</div></div>
            <div className="hero-stat"><div className="hero-stat-n">70%</div><div className="hero-stat-l">Less doc time</div></div>
            <div className="hero-stat"><div className="hero-stat-n">+13%</div><div className="hero-stat-l">Collection rate</div></div>
            <div className="hero-stat"><div className="hero-stat-n">0</div><div className="hero-stat-l">Churn in 90 days</div></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {tickerAll.map((item, i) => (
            <div key={i} className="ticker-item"><span>◆</span>{item}</div>
          ))}
        </div>
      </div>

      {/* FEATURES BENTO */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 48 }}>
            <span className="sec-label">Platform capabilities</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              Every tool your clinic <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>needs to run</strong>
            </h2>
          </div>
          <div className="bento">
            {BENTO.map((b) => (
              <div key={b.num} className={`bento-cell${b.wide ? ' bento-wide' : ''}`}>
                <span className="bento-icon">{b.icon}</span>
                <div className="bento-num">{b.num}</div>
                <div className="bento-title">{b.title}</div>
                <p className="bento-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 40 }}>
            <span className="sec-label">From our customers</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              Real feedback, <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>real clinics</strong>
            </h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testi-card">
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-meta">
                  <div className="testi-av">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES GRID */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="sec-label">Rolling out continuously</span>
              <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
                Built for every <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>specialty</strong>
              </h2>
            </div>
            <Link href="/product" className="btn btn-o">View all modules →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden' }}>
            {SPECIALTIES.map((s) => (
              <div key={s.name} className="h-bg" style={{ padding: 20 }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{s.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{s.name}</div>
                {s.status === 'live' ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 7px', background: 'rgba(34,197,94,.1)', borderRadius: 3, fontSize: 9, color: 'var(--a3)', fontFamily: 'var(--ff-mono)' }}>
                    <span style={{ width: 4, height: 4, background: 'var(--a3)', borderRadius: '50%', animation: 'blink 2s infinite', display: 'block' }} />
                    Live
                  </span>
                ) : (
                  <span style={{ padding: '2px 7px', background: 'var(--sf2)', borderRadius: 3, fontSize: 9, color: 'var(--tm)', fontFamily: 'var(--ff-mono)' }}>{s.status}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner">
            <h2>Ready to modernise your clinic?</h2>
            <p>Full access. No credit card. Onboarding team included.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial</button>
              <button className="btn btn-o btn-lg" onClick={openModal}>Schedule walkthrough</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
