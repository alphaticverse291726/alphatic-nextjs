'use client';
import { useState } from 'react';

const HELP_CATS = [
  { icon: '🚀', title: 'Getting Started', desc: 'Set up your clinic, onboard your team, and go live in under 48 hours.',
    articles: [{ t: 'Setting up your clinic profile', time: '5 min' }, { t: 'Adding your first doctor and staff', time: '4 min' }, { t: 'Configuring your appointment slots', time: '6 min' }, { t: 'Importing existing patient records', time: '10 min' }, { t: 'Going live — your launch checklist', time: '8 min' }] },
  { icon: '📅', title: 'Appointments & Scheduling', desc: 'Manage your calendar, walk-ins, and multi-doctor scheduling.',
    articles: [{ t: 'Creating and editing appointment slots', time: '4 min' }, { t: 'Managing walk-in patients', time: '3 min' }, { t: 'Setting up appointment reminders', time: '5 min' }, { t: 'Multi-doctor schedule coordination', time: '7 min' }, { t: 'Handling cancellations and no-shows', time: '5 min' }] },
  { icon: '🎙', title: 'AI Documentation', desc: 'Use voice documentation, manage templates, and review AI-generated notes.',
    articles: [{ t: 'Your first AI consultation note', time: '6 min' }, { t: 'Switching languages mid-consultation', time: '3 min' }, { t: 'Editing and approving AI-generated notes', time: '5 min' }, { t: 'Customising note templates', time: '8 min' }, { t: 'Troubleshooting audio and recognition', time: '7 min' }] },
  { icon: '💰', title: 'Billing & Payments', desc: 'Generate invoices, handle partial payments, track outstanding dues.',
    articles: [{ t: 'Creating treatment plan invoices', time: '5 min' }, { t: 'Recording partial payments and advances', time: '4 min' }, { t: 'Setting up UPI and card collection', time: '7 min' }, { t: 'Managing outstanding dues', time: '6 min' }, { t: 'GST invoicing configuration', time: '8 min' }] },
  { icon: '📦', title: 'Inventory Management', desc: 'Track supplies, set reorder points, link consumption to procedures.',
    articles: [{ t: 'Adding items to your inventory', time: '4 min' }, { t: 'Linking items to treatment procedures', time: '6 min' }, { t: 'Setting reorder triggers and alerts', time: '5 min' }, { t: 'Managing supplier purchase orders', time: '7 min' }, { t: 'Tracking expiry dates', time: '4 min' }] },
  { icon: '📊', title: 'Reports & Analytics', desc: 'Access performance data, revenue reports, and operational metrics.',
    articles: [{ t: 'Understanding your revenue dashboard', time: '5 min' }, { t: 'Doctor productivity reports', time: '6 min' }, { t: 'Patient recall and retention analytics', time: '5 min' }, { t: 'Exporting data for accountants', time: '3 min' }, { t: 'Automated monthly reports', time: '4 min' }] },
];

function HelpCard({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="help-card" onClick={() => setOpen(!open)}>
      <span className="help-icon">{cat.icon}</span>
      <div className="help-title">{cat.title}</div>
      <p className="help-desc">{cat.desc}</p>
      {open && (
        <div className="help-articles">
          {cat.articles.map((a) => (
            <div key={a.t} className="help-article-item">
              <span className="help-article-title">{a.t}</span>
              <span className="help-article-time">{a.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Help Center</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 14 }}>
            How can we <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>help?</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 15, maxWidth: 420, lineHeight: 1.75 }}>
            Step-by-step guides, video walkthroughs, and answers to common questions.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="sec-label">Browse by topic</span>
          <div className="help-grid">
            {HELP_CATS.map((cat) => <HelpCard key={cat.title} cat={cat} />)}
          </div>

          <div style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid var(--bd)' }}>
            <span className="sec-label">Still need help?</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 1, background: 'var(--bd)', border: '1px solid var(--bd)', borderRadius: 8, overflow: 'hidden', maxWidth: 600 }}>
              {[
                { label: 'Email', value: 'support@alphaticlabs.in' },
                { label: 'Hours', value: 'Mon–Sat, 9 AM–7 PM IST' },
                { label: 'Response time', value: 'Under 4 hours' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'var(--bg)', padding: 20 }}>
                  <div style={{ fontSize: 12, fontFamily: 'var(--ff-mono)', color: 'var(--tm)', marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 14, color: item.label === 'Email' ? 'var(--a1)' : 'var(--tx)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
