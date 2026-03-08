'use client';
import { useState } from 'react';
import { SPECS } from '@/data/products';
import { useModal } from '@/lib/ModalContext';

const SPEC_KEYS = ['dental', 'obgyn', 'cardiology', 'nephrology', 'orthopedics', 'dermatology', 'gp'];

export default function ProductPage() {
  const { openModal } = useModal();
  const [curSpec, setCurSpec] = useState('dental');
  const [curMod, setCurMod] = useState(0);

  const spec = SPECS[curSpec];
  const mod = spec.modules[curMod];

  const handleSpecChange = (key) => { setCurSpec(key); setCurMod(0); };

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Platform Overview</span>
          <h1 style={{ fontSize: 'clamp(30px,5vw,58px)', fontWeight: 400, fontStyle: 'italic', maxWidth: 640, marginBottom: 16 }}>
            Every module. <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>Every workflow.</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 15, maxWidth: 480, marginBottom: 32, lineHeight: 1.7 }}>
            12 deeply integrated modules. One platform. Built from scratch for each specialty.
          </p>
          <button className="btn btn-p btn-lg" onClick={openModal}>Start free trial — 30 days</button>
        </div>
      </section>

      {/* SPEC EXPLORER */}
      <section className="sec">
        <div className="wrap">
          <div style={{ marginBottom: 32 }}>
            <span className="sec-label">Select a specialty</span>
            <p style={{ color: 'var(--tm)', fontSize: 13 }}>Click any tab to explore features, modules, and rollout status</p>
          </div>

          {/* Tabs */}
          <div className="spec-tabs">
            {SPEC_KEYS.map((key) => {
              const s = SPECS[key];
              return (
                <button key={key} className={`spec-tab${curSpec === key ? ' active' : ''}`} onClick={() => handleSpecChange(key)}>
                  {s.emoji} {s.label.replace(' OS', '')}
                  {s.isLive ? (
                    <span className="live-badge">
                      <span style={{ width: 5, height: 5, background: 'var(--a3)', borderRadius: '50%', animation: 'blink 2s infinite', display: 'block' }} />
                      Live
                    </span>
                  ) : (
                    <span className="soon-badge">{s.status}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Overview */}
          <div className="spec-overview">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {spec.emoji} {spec.label}
                </div>
                <p style={{ fontSize: 14, color: 'var(--tm)', lineHeight: 1.7, maxWidth: 560 }}>{spec.tagline}</p>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 4, fontSize: 10, fontFamily: 'var(--ff-mono)', whiteSpace: 'nowrap', ...(spec.isLive ? { background: 'rgba(34,197,94,.1)', color: 'var(--a3)' } : { background: 'var(--sf2)', color: 'var(--tm)' }) }}>
                {spec.isLive ? (
                  <><span style={{ width: 5, height: 5, background: 'var(--a3)', borderRadius: '50%', display: 'block', animation: 'blink 2s infinite' }} />Live Now</>
                ) : `Coming ${spec.status}`}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 6, overflow: 'hidden' }}>
              {spec.features.map((f) => (
                <div key={f.t} className="h-bg" style={{ padding: '14px 16px', display: 'flex', gap: 10 }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{f.t}</div>
                    <div style={{ fontSize: 11, color: 'var(--tm)', lineHeight: 1.55 }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            {!spec.isLive && (
              <div style={{ marginTop: 16, padding: '14px 18px', background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 6, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                <span style={{ color: 'var(--tm)' }}><strong style={{ color: 'var(--tx)' }}>Pre-register for early access</strong> — Priority onboarding, 60-day free trial, and founding customer pricing.</span>
                <button onClick={openModal} style={{ background: 'var(--a1)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 5, fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--ff-body)' }}>Pre-Register →</button>
              </div>
            )}
          </div>

          {/* Module Explorer */}
          <div className="mod-layout">
            <div className="mod-sidebar">
              {spec.modules.map((m, i) => (
                <button key={m.title} className={`mod-btn${curMod === i ? ' active' : ''}`} onClick={() => setCurMod(i)}>
                  <span style={{ fontSize: 16 }}>{m.icon}</span>
                  <div>
                    <span className="mod-name">{m.title}</span>
                    <span className="mod-sub">{m.tag}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="mod-detail">
              <div style={{ animation: 'fadeUp .2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{mod.icon}</span>
                  <div>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 3, fontSize: 9, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', background: 'rgba(249,115,22,.1)', border: '1px solid rgba(249,115,22,.2)', color: 'var(--a1)', fontFamily: 'var(--ff-mono)', marginBottom: 6 }}>{mod.tag}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-.01em' }}>{mod.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--tm)', fontSize: 13, lineHeight: 1.75, marginBottom: 20 }}>{mod.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 24 }}>
                  {mod.feats.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--tm)' }}>
                      <span style={{ color: 'var(--a1)', fontFamily: 'var(--ff-mono)', flexShrink: 0 }}>→</span>{f}
                    </div>
                  ))}
                </div>
                <button className="btn btn-p" onClick={openModal}>
                  {spec.isLive ? 'See this module in action →' : 'Pre-register for early access →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
