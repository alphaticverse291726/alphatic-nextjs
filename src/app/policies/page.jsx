'use client';
import { useState } from 'react';

const POLICIES = [
  { id: 'privacy', icon: '🔒', label: 'Privacy Policy',
    content: (
      <>
        <h2>Privacy Policy</h2>
        <span className="pol-meta">Last updated: January 2025</span>
        <h3>Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, configure your clinic profile, or contact us for support. This includes clinic name, contact information, and configuration preferences.</p>
        <h3>Patient Data</h3>
        <p>All patient data entered into Alphatic is owned by the clinic. We process this data solely to provide the platform services. We do not use patient data for any purpose other than delivering the contracted service.</p>
        <h3>Data Storage</h3>
        <p>All data is stored on servers located in India. We do not transfer personal data outside India without explicit consent and appropriate safeguards.</p>
        <h3>Data Retention</h3>
        <p>Clinic data is retained for the duration of the subscription and for 90 days after termination, during which you may request an export. After 90 days, all data is permanently deleted.</p>
        <h3>Your Rights</h3>
        <p>You have the right to access, correct, or delete any personal data we hold about you. Contact privacy@alphaticlabs.in for any such requests.</p>
      </>
    )
  },
  { id: 'security', icon: '🛡', label: 'Security Policy',
    content: (
      <>
        <h2>Security Policy</h2>
        <span className="pol-meta">Last updated: January 2025</span>
        <h3>Encryption</h3>
        <p>All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Encryption keys are managed using a dedicated key management service with automatic rotation.</p>
        <h3>Access Control</h3>
        <p>Role-based access control is enforced at every layer. Clinic data is strictly isolated — no clinic can access another clinic's data. Internal Alphatic staff access to production data requires multi-party approval and is fully logged.</p>
        <h3>Infrastructure</h3>
        <p>Alphatic is hosted on AWS Mumbai region with multi-AZ redundancy. We maintain 99.9% uptime SLA. All infrastructure is provisioned through infrastructure-as-code with automated security scanning.</p>
        <h3>Vulnerability Management</h3>
        <p>We conduct quarterly penetration tests with certified third-party security firms. All critical vulnerabilities are patched within 24 hours. We maintain a responsible disclosure programme at security@alphaticlabs.in.</p>
        <h3>Compliance</h3>
        <p>Alphatic is HIPAA-compliant and ABDM-ready. We are ISO 27001 certified. Annual third-party audits are conducted to maintain compliance posture.</p>
      </>
    )
  },
  { id: 'sla', icon: '⚡', label: 'SLA & Uptime',
    content: (
      <>
        <h2>SLA & Uptime</h2>
        <span className="pol-meta">Last updated: January 2025</span>
        <h3>Uptime Commitment</h3>
        <p>Alphatic commits to 99.9% monthly uptime for all production services. This excludes scheduled maintenance windows communicated at least 72 hours in advance and force majeure events.</p>
        <h3>Incident Response</h3>
        <p>Critical incidents (full platform unavailability) will receive a response within 15 minutes and a public status update within 30 minutes. All incidents are tracked at status.alphaticlabs.in.</p>
        <h3>Support SLA by Plan</h3>
        <p>Starter plan: Email support, response within 8 business hours. Growth plan: Phone + email, response within 4 hours. Enterprise plan: Dedicated support, response within 1 hour with 24/7 on-call for critical issues.</p>
        <h3>Credits</h3>
        <p>If monthly uptime falls below 99.9%, affected clinics will receive a service credit of 10% of their monthly fee for each 0.1% below the SLA, up to 30% of the monthly fee.</p>
      </>
    )
  },
  { id: 'dpa', icon: '📋', label: 'Data Processing',
    content: (
      <>
        <h2>Data Processing Agreement</h2>
        <span className="pol-meta">Last updated: January 2025</span>
        <h3>Roles</h3>
        <p>The clinic is the Data Controller. Alphatic Labs acts as a Data Processor. We process personal data only on documented instructions from the clinic.</p>
        <h3>Sub-processors</h3>
        <p>We use a limited number of sub-processors including AWS (infrastructure), Twilio (SMS notifications), and Razorpay (payment processing). A full list is available on request.</p>
        <h3>Data Transfers</h3>
        <p>All data processing occurs within India. We do not transfer data to third countries except where explicitly requested by the clinic for integration purposes.</p>
        <h3>Breach Notification</h3>
        <p>In the event of a data breach, we will notify affected clinics within 72 hours of becoming aware of the breach, including the nature of the breach, likely consequences, and measures taken.</p>
        <h3>Audit Rights</h3>
        <p>Enterprise customers have the right to conduct annual audits of our data processing activities. Audits must be pre-notified 30 days in advance and conducted at the customer's cost.</p>
      </>
    )
  },
];

export default function PoliciesPage() {
  const [activePolicy, setActivePolicy] = useState('privacy');
  const current = POLICIES.find((p) => p.id === activePolicy);

  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Legal</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 14 }}>
            Policies & <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>Compliance</strong>
          </h1>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="pol-layout">
            <div className="pol-nav">
              {POLICIES.map((p) => (
                <button key={p.id} className={`pol-btn${activePolicy === p.id ? ' active' : ''}`} onClick={() => setActivePolicy(p.id)}>
                  {p.icon} {p.label}
                </button>
              ))}
            </div>
            <div className="pol-content">
              <div className="pol-pane active">
                {current?.content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
