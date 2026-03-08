export default function TermsPage() {
  const sections = [
    { title: 'Acceptance of Terms', body: 'By accessing or using Alphatic Labs services, you agree to be bound by these Terms of Service. If you are using the services on behalf of a clinic or organisation, you represent and warrant that you have the authority to bind that organisation to these terms.' },
    { title: 'Description of Services', body: 'Alphatic Labs provides cloud-based clinic management software including but not limited to appointment scheduling, clinical documentation, billing, inventory management, and business analytics. Services are provided on a subscription basis and are subject to the features and limitations of your chosen plan.' },
    { title: 'Clinic Data & Ownership', body: 'All patient and clinical data entered into the Alphatic platform belongs to the clinic. Alphatic Labs does not claim ownership of any clinic data. You grant Alphatic Labs a limited licence to store, process, and transmit your data solely for the purpose of providing the contracted services.' },
    { title: 'Acceptable Use', body: 'You agree to use Alphatic Labs services only for lawful purposes and in accordance with these Terms. You may not use the services to store or transmit any information that is illegal, harmful, or that infringes on the intellectual property rights of others.' },
    { title: 'Payment & Billing', body: 'Subscription fees are billed monthly or annually in advance. All fees are exclusive of applicable taxes. Payment is due within 7 days of invoice date. Failure to pay may result in suspension of services. We reserve the right to modify pricing with 30 days notice.' },
    { title: 'Service Availability', body: 'We commit to 99.9% monthly uptime as described in our SLA. We are not liable for downtime caused by circumstances beyond our control, including internet service provider failures, government actions, or force majeure events.' },
    { title: 'Confidentiality', body: 'Each party agrees to keep confidential any information designated as confidential by the other party. Alphatic Labs treats all clinic data as confidential. This obligation survives termination of these Terms for a period of 5 years.' },
    { title: 'Termination', body: 'Either party may terminate this agreement with 30 days written notice. Upon termination, you will retain access to export your data for 90 days. After 90 days, all data is permanently deleted. Alphatic Labs may terminate immediately for material breach.' },
    { title: 'Limitation of Liability', body: 'To the maximum extent permitted by law, Alphatic Labs total liability for any claims arising under or related to these Terms shall not exceed the total fees paid by you in the 3 months preceding the claim.' },
    { title: 'Governing Law', body: 'These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.' },
  ];

  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Legal</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 14 }}>
            Terms of <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>Service</strong>
          </h1>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--td)' }}>Last updated: January 2025 · Effective: January 1, 2025</span>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: 760 }}>
            {sections.map((s, i) => (
              <div key={s.title} style={{ marginBottom: 36 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, fontFamily: 'var(--ff-body)', letterSpacing: '-.01em', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--a1)', letterSpacing: '.06em' }}>{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <p style={{ fontSize: 14, color: 'var(--tm)', lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
            <div style={{ marginTop: 48, padding: '24px 28px', background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 8 }}>
              <p style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.75 }}>
                For legal enquiries contact: <span style={{ color: 'var(--a1)' }}>legal@alphaticlabs.in</span> · Alphatic Labs Pvt. Ltd. · Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
