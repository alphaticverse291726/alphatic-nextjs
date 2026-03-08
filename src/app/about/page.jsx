'use client';
import { useModal } from '@/lib/ModalContext';

const TEAM = [
  { initials: 'AR', name: 'Arjun Rajan', role: 'Co-founder & CEO', prev: 'Ex-Practo, IIT Madras', quote: 'Healthcare IT in India is broken. We are fixing it.' },
  { initials: 'PK', name: 'Priya Krishnan', role: 'Co-founder & CPO', prev: 'Ex-Zoho Health, NIT Trichy', quote: 'Product should feel like it was built by clinicians.' },
  { initials: 'VN', name: 'Vikram Nair', role: 'Co-founder & CTO', prev: 'Ex-Freshworks, IIT Bombay', quote: 'Infrastructure that works at 3G speeds. Non-negotiable.' },
  { initials: 'SM', name: 'Sanjana Mehta', role: 'Head of Clinical Design', prev: 'Ex-Apollo Hospitals, AIIMS', quote: 'We do not build software for doctors. We build with them.' },
];

const TIMELINE = [
  { date: 'Q1 2023', status: 'done', title: 'Problem Validated & Company Founded', desc: 'Founders spent 6 months shadowing dental clinics, conducting 200+ interviews. Problem confirmed: no unified OS for clinic operations existed in India.' },
  { date: 'Q3 2023', status: 'done', title: 'Core Platform Architecture Built', desc: 'Foundational data architecture built — unified patient record model, real-time event system, and AI clinical documentation pipeline.' },
  { date: 'Q1 2024', status: 'done', title: 'Dental OS Pilot Launch', desc: 'Dental OS launched with 5 pilot clinics in Chennai. First real-world validation of AI documentation in Tamil and English.' },
  { date: 'Q3 2024', status: 'done', title: 'Seed Round Closed', desc: 'Seed funding round closed with leading healthcare and enterprise SaaS investors. Team scaled to 22 people.' },
  { date: 'Q1 2025', status: 'now', title: 'Dental OS Commercial Launch', desc: '50+ clinics live. Zero churn in 90 days. AI documentation, smart scheduling, and revenue intelligence all in production.' },
  { date: 'Q3 2026', status: 'future', title: 'OBGYN, Cardiology & Orthopedics Launch', desc: 'Three new specialties launching simultaneously. Each built with specialty-specific clinical advisors.' },
  { date: '2027', status: 'future', title: 'Pan-India Expansion & Hospital Modules', desc: 'Nephrology, Dermatology, GP, and hospital-level modules. Target: 10,000 clinics across India.' },
];

const VALUES = [
  { num: '01', title: 'Every doctor deserves their time back', desc: 'Documentation should not take 2 hours a day. Doctors should spend 100% of their time on patients.' },
  { num: '02', title: 'Every clinic owner should have real-time intelligence', desc: 'Revenue, collections, utilisation — all visible in real-time, from any device.' },
  { num: '03', title: 'Healthcare data should be structured at the source', desc: 'Not digitisation of paper, but actual structured capture at the point of care.' },
  { num: '04', title: 'Clinics should own their data', desc: 'Not locked in. Exportable anytime in standard formats.' },
];

export default function AboutPage() {
  const { openModal } = useModal();
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '80px 0 64px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">About Alphatic Labs</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,60px)', fontWeight: 400, fontStyle: 'italic', maxWidth: 800, marginBottom: 20, lineHeight: 1.05 }}>
            Building the OS healthcare <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>should have had years ago</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 520, lineHeight: 1.75 }}>
            Founded by healthcare operators who lived the problem. Now solving it for every clinic in the world.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="sec">
        <div className="wrap two-col">
          <div>
            <span className="sec-label">Our Story</span>
            <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 600, marginBottom: 20, letterSpacing: '-.01em' }}>How Alphatic started</h2>
            <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
              Alphatic was founded by operators who built healthcare companies before this. We have worked in clinics. We have managed patient data chaos. We have watched doctors waste hours on paperwork and seen revenue leak through disconnected systems.
            </p>
            <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 20 }}>
              At some point, we realised: the software is not the problem. The architecture is. Every clinic management software is built on the same flawed assumption — that clinics need better scheduling, better billing, better records as separate, disconnected systems.
            </p>
            <div style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderLeft: '2px solid var(--a1)', borderRadius: 4, padding: '18px 20px', marginBottom: 16 }}>
              <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Wrong.</p>
              <p style={{ color: 'var(--tm)', fontSize: 13, lineHeight: 1.75 }}>What clinics need is an <strong style={{ color: 'var(--tx)' }}>operating system</strong> — one that connects clinical workflows to patient data to financial operations to business intelligence.</p>
            </div>
            <p style={{ color: 'var(--a1)', fontFamily: 'var(--ff-mono)', fontSize: 12, letterSpacing: '.04em' }}>We decided to build that.</p>
          </div>
          <div>
            <span className="sec-label">The Problem We Saw</span>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, letterSpacing: '-.01em' }}>The broken state of healthcare IT</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 6, overflow: 'hidden' }}>
              {[
                { n: '01', t: 'Patient data lives in 5 places', d: 'Appointment, records, billing, imaging, pharmacy — all disconnected. Nobody has the complete picture.' },
                { n: '02', t: 'Doctors drown in paperwork', d: '30–40% of a doctor\'s day is spent documenting. Not diagnosing. Not treating.' },
                { n: '03', t: 'Nobody knows the real metrics', d: 'Clinic owners find out how much they made last month from their accountant. Not real-time.' },
                { n: '04', t: 'Coordination is manual', d: 'Staff coordinate on WhatsApp. Inventory on paper. Supplies run out mid-procedure.' },
              ].map((item) => (
                <div key={item.n} className="h-bg" style={{ padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--a1)', flexShrink: 0, marginTop: 2 }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{item.t}</div>
                    <div style={{ fontSize: 12, color: 'var(--tm)', lineHeight: 1.6 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 56 }}>
            <span className="sec-label">Our Journey</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              Where we have been. <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>Where we are going.</strong>
            </h2>
          </div>
          <div className="tl-wrap">
            {TIMELINE.map((item) => (
              <div key={item.date} className={`tl-item ${item.status}`}>
                <div className="tl-left">
                  <span className="tl-date">{item.date}</span>
                  <span className={`tl-status-dot ${item.status}`} />
                </div>
                <div className="tl-line-col" />
                <div className="tl-right">
                  <div className="tl-title">{item.title}</div>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="sec">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 48 }}>
            <span className="sec-label">The Team</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              Built by people who <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>understand clinics</strong>
            </h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-av">{m.initials}</div>
                <p className="team-quote">"{m.quote}"</p>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-prev">{m.prev}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: 48 }}>
            <span className="sec-label">Our Vision</span>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 400, fontStyle: 'italic' }}>
              What we believe <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>healthcare should be</strong>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden', maxWidth: 720, margin: '0 auto' }}>
            {VALUES.map((v) => (
              <div key={v.num} className="h-bg" style={{ padding: '20px 24px', display: 'flex', gap: 20 }}>
                <span style={{ fontFamily: 'var(--ff-mono)', color: 'var(--a1)', fontSize: 12, flexShrink: 0, width: 24 }}>{v.num}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.65 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner">
            <h2>Join the mission</h2>
            <p>Help us build the OS for modern healthcare. Start your free trial today.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial</button>
              <button className="btn btn-o btn-lg" onClick={openModal}>Talk to founders</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
