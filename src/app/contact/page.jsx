'use client';
import { useState } from 'react';
import { useModal } from '@/lib/ModalContext';

const TABS = ['Clinics', 'Partners & API', 'Investors', 'Press', 'Support'];

const CONTACT_CONTENT = [
  // Clinics
  <div key="clinics" className="two-col">
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>Start a free trial</h2>
      <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>30 days, full access, onboarding team included. No credit card required.</p>
      <button className="btn btn-p btn-lg" onClick={() => {}}>Start free trial →</button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden' }}>
      {[['Sales', 'sales@alphaticlabs.in'], ['General', 'hello@alphaticlabs.in'], ['Support', 'support@alphaticlabs.in']].map(([label, email]) => (
        <div key={label} style={{ background: 'var(--bg)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--tm)' }}>{label}</span>
          <span style={{ fontSize: 13, color: 'var(--a1)' }}>{email}</span>
        </div>
      ))}
    </div>
  </div>,
  // Partners
  <div key="partners" className="two-col">
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>Partner with Alphatic</h2>
      <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>API access, white-label, integration, and reseller partnerships available.</p>
      <button className="btn btn-p btn-lg" onClick={() => {}}>Request partnership →</button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden' }}>
      {[['Partnerships', 'partners@alphaticlabs.in'], ['API Access', 'api@alphaticlabs.in']].map(([label, email]) => (
        <div key={label} style={{ background: 'var(--bg)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--tm)' }}>{label}</span>
          <span style={{ fontSize: 13, color: 'var(--a1)' }}>{email}</span>
        </div>
      ))}
    </div>
  </div>,
  // Investors
  <div key="investors" className="two-col">
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>Investor Relations</h2>
      <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>We are currently raising our Series A. Talk to us about the opportunity.</p>
      <button className="btn btn-p btn-lg" onClick={() => {}}>Request investor deck →</button>
    </div>
    <div style={{ background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 8, padding: 24 }}>
      <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>Investor contact</div>
      <div style={{ fontSize: 14, color: 'var(--a1)' }}>invest@alphaticlabs.in</div>
    </div>
  </div>,
  // Press
  <div key="press" className="two-col">
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>Press & Media</h2>
      <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>Press kit, founder interviews, product screenshots, and company backgrounders available on request.</p>
      <button className="btn btn-p btn-lg" onClick={() => {}}>Request press kit →</button>
    </div>
    <div style={{ background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 8, padding: 24 }}>
      <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>Press contact</div>
      <div style={{ fontSize: 14, color: 'var(--a1)' }}>press@alphaticlabs.in</div>
    </div>
  </div>,
  // Support
  <div key="support">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden', maxWidth: 640, marginBottom: 24 }}>
      {[['Email', 'support@alphaticlabs.in'], ['Hours', 'Mon–Sat, 9 AM–7 PM IST'], ['Response time', 'Under 4 hours'], ['Phone', '+91 98765 43210']].map(([label, value]) => (
        <div key={label} style={{ background: 'var(--bg)', padding: 20 }}>
          <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>{label}</div>
          <div style={{ fontSize: 14, color: label === 'Email' ? 'var(--a1)' : 'var(--tx)' }}>{value}</div>
        </div>
      ))}
    </div>
    <p style={{ fontSize: 13, color: 'var(--tm)' }}>For detailed documentation, visit our <a href="/help" style={{ color: 'var(--a1)' }}>Help Center →</a></p>
  </div>,
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { openModal } = useModal();

  // Inject openModal into JSX elements that need it
  const content = CONTACT_CONTENT[activeTab];

  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Contact</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 14 }}>
            Get in <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>touch</strong>
          </h1>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="ctabs">
            {TABS.map((tab, i) => (
              <button key={tab} className={`ctab${activeTab === i ? ' active' : ''}`} onClick={() => setActiveTab(i)}>{tab}</button>
            ))}
          </div>

          {/* Clinics tab */}
          {activeTab === 0 && (
            <div className="two-col">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>Start a free trial</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>30 days, full access, onboarding team included. No credit card required.</p>
                <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial →</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden' }}>
                {[['Sales', 'sales@alphaticlabs.in'], ['General', 'hello@alphaticlabs.in'], ['Support', 'support@alphaticlabs.in']].map(([label, email]) => (
                  <div key={label} style={{ background: 'var(--bg)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: 'var(--tm)' }}>{label}</span>
                    <span style={{ fontSize: 13, color: 'var(--a1)' }}>{email}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Partners */}
          {activeTab === 1 && (
            <div className="two-col">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Partner with Alphatic</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>API access, white-label, integration, and reseller partnerships available.</p>
                <button className="btn btn-p btn-lg" onClick={openModal}>Request partnership →</button>
              </div>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 8, padding: 24 }}>
                <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>Partnerships</div>
                <div style={{ fontSize: 14, color: 'var(--a1)' }}>partners@alphaticlabs.in</div>
              </div>
            </div>
          )}

          {/* Investors */}
          {activeTab === 2 && (
            <div className="two-col">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Investor Relations</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>We are currently raising our Series A. Talk to us about the opportunity.</p>
                <button className="btn btn-p btn-lg" onClick={openModal}>Request investor deck →</button>
              </div>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 8, padding: 24 }}>
                <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>Investor contact</div>
                <div style={{ fontSize: 14, color: 'var(--a1)' }}>invest@alphaticlabs.in</div>
              </div>
            </div>
          )}

          {/* Press */}
          {activeTab === 3 && (
            <div className="two-col">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Press & Media</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>Press kit, founder interviews, product screenshots, and company backgrounders available on request.</p>
                <button className="btn btn-p btn-lg" onClick={openModal}>Request press kit →</button>
              </div>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 8, padding: 24 }}>
                <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>Press contact</div>
                <div style={{ fontSize: 14, color: 'var(--a1)' }}>press@alphaticlabs.in</div>
              </div>
            </div>
          )}

          {/* Support */}
          {activeTab === 4 && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden', maxWidth: 640, marginBottom: 24 }}>
                {[['Email', 'support@alphaticlabs.in'], ['Hours', 'Mon–Sat, 9 AM–7 PM IST'], ['Response time', 'Under 4 hours'], ['Phone', '+91 98765 43210']].map(([label, value]) => (
                  <div key={label} style={{ background: 'var(--bg)', padding: 20 }}>
                    <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>{label}</div>
                    <div style={{ fontSize: 14, color: label === 'Email' ? 'var(--a1)' : 'var(--tx)' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
