export const SPECS = {
  dental: {
    label: 'Dental OS', emoji: '🦷', isLive: true, status: 'Live',
    tagline: 'The complete operating system for dental practices. From chair-side AI documentation to multi-location DSO management.',
    features: [
      { icon: '🎙', t: 'AI Documentation', d: 'Voice-to-structured notes in 7 Indian languages. Doctor speaks, system fills the complete case sheet.' },
      { icon: '📅', t: 'Smart Scheduling', d: 'Chair-time optimisation, walk-in handling, multi-doctor conflict resolution.' },
      { icon: '💰', t: 'Revenue Intelligence', d: 'Real-time P&L, collection tracking, outstanding management.' },
      { icon: '📦', t: 'Inventory & Supplies', d: 'Auto-reorder triggers. Procedure-linked consumption.' },
      { icon: '🏥', t: 'Multi-Location DSO', d: 'Manage 1 or 100 clinics from a single dashboard.' },
      { icon: '📊', t: 'Clinical Analytics', d: 'Treatment acceptance, chair utilisation, per-doctor productivity — all real-time.' },
    ],
    modules: [
      { icon: '📅', title: 'Appointment & Queue', tag: 'Scheduling', desc: 'Intelligent scheduling handling walk-ins, emergency slots, multi-chair coordination, and cancellation recovery.', feats: ['Visual drag-and-drop chair schedule', 'Walk-in queue management', 'SMS/WhatsApp appointment reminders', 'Cancellation fill — auto-offer to waitlist', 'Multi-location schedule view', 'Recurring appointment series'] },
      { icon: '🎙', title: 'AI Clinical Documentation', tag: 'AI / Clinical', desc: 'Doctor speaks naturally during consultation — in any of 7 Indian languages. 70% reduction in documentation time.', feats: ['7 Indian language support', 'Auto-fill dental chart from voice', 'Treatment plan generation', 'Consent form pre-population', 'Prescription auto-generation', 'Integrated with patient history'] },
      { icon: '🦷', title: 'Digital Dental Chart', tag: 'Clinical Records', desc: 'Fully interactive digital tooth chart. Captures findings, treatment history, and procedure status tooth-by-tooth.', feats: ['Interactive 32-tooth visual chart', 'Procedure status tracking per tooth', 'Multi-visit treatment tracking', 'Radiograph attachment and annotation', 'Perio charting module', 'Treatment history timeline'] },
      { icon: '💳', title: 'Billing & Collections', tag: 'Finance', desc: 'Complete billing from treatment plan to final receipt. Handles partial payments, insurance, advance collection.', feats: ['Treatment plan to invoice in one click', 'Partial payment and advance management', 'GST-compliant invoicing', 'UPI / card / EMI integration', 'Outstanding reminders automation', 'Insurer billing support'] },
      { icon: '📦', title: 'Inventory & Supplies', tag: 'Operations', desc: 'Tracks every material from purchase to chairside use. Links consumption to procedures.', feats: ['Item-level stock tracking', 'Procedure-linked consumption', 'Auto-reorder triggers', 'Supplier management', 'Expiry date tracking', 'Cost-per-procedure analytics'] },
      { icon: '👥', title: 'Staff & Payroll', tag: 'HR & Ops', desc: 'Manage your entire clinic team — attendance, performance, commissions, and payroll from one module.', feats: ['Attendance and leave tracking', 'Performance metrics per staff', 'Commission and incentive calculation', 'Role-based access control', 'Payroll report generation', 'Multi-location staff management'] },
      { icon: '📊', title: 'Business Analytics', tag: 'Intelligence', desc: 'Real-time visibility into every metric that matters — revenue, collections, chair utilisation, doctor productivity.', feats: ['Live revenue and collection dashboard', 'Chair utilisation analytics', 'Doctor productivity metrics', 'Treatment acceptance rate tracking', 'Patient retention and recall analysis', 'Multi-location comparison'] },
      { icon: '🏥', title: 'Multi-Location DSO', tag: 'Enterprise', desc: 'Run a dental group or DSO from a single Alphatic account.', feats: ['Unified DSO dashboard', 'Cross-location patient records', 'Consolidated P&L reporting', 'Centralised inventory procurement', 'Per-clinic performance comparison', 'Group-level staff management'] },
    ],
  },
  obgyn: {
    label: 'OBGYN OS', emoji: '🤰', isLive: false, status: 'Mid-2026',
    tagline: 'Built for obstetrics and gynaecology practices. Antenatal tracking, delivery records, and specialty-specific clinical documentation.',
    features: [
      { icon: '🤰', t: 'Antenatal Tracking', d: 'Complete pregnancy monitoring from booking to delivery.' },
      { icon: '📋', t: 'OBGYN Case Sheets', d: 'Specialty-specific documentation built with OBGYN advisors.' },
      { icon: '🔬', t: 'Investigation Tracking', d: 'Blood work, ultrasound, and anomaly scan management.' },
      { icon: '👶', t: 'Delivery Records', d: 'LSCS, normal delivery, and neonatal record built in.' },
      { icon: '💊', t: 'Gynaecology Module', d: 'Menstrual history, PCOS management, and procedure documentation.' },
      { icon: '📅', t: 'High-Risk Monitoring', d: 'Flag and track high-risk pregnancies with automated follow-up.' },
    ],
    modules: [
      { icon: '🤰', title: 'Antenatal Care Module', tag: 'Obstetrics', desc: 'Complete ANC management from booking visit to delivery.', feats: ['Booking visit registration', 'Trimester-wise visit tracking', 'Weight, BP, fundal height monitoring', 'Risk stratification scoring', 'Vaccination schedule tracking', 'High-risk flag and escalation'] },
      { icon: '👶', title: 'Delivery & Postnatal', tag: 'Delivery', desc: 'Structured delivery documentation for normal, LSCS, and instrumental deliveries.', feats: ['Labour progress notes', 'Delivery summary documentation', 'Neonatal examination record', 'APGAR and weight capture', 'Postnatal visit scheduling', 'Discharge summary auto-fill'] },
      { icon: '💊', title: 'Gynaecology Case Management', tag: 'Gynaecology', desc: 'Specialty-specific documentation for gynaecological consultations.', feats: ['Menstrual history module', 'PCOS / PCOD tracking', 'Gynaecology examination chart', 'Procedure documentation', 'Follow-up scheduling', 'Investigation tracking'] },
    ],
  },
  cardiology: {
    label: 'Cardiology OS', emoji: '❤️', isLive: false, status: 'Mid-2026',
    tagline: 'Purpose-built for cardiac practices. ECG integration, echo reporting, and cardiology-specific clinical workflows.',
    features: [
      { icon: '❤️', t: 'ECG Integration', d: 'Connect your ECG machine. Auto-attach tracings to patient records.' },
      { icon: '🔬', t: 'Echo Reporting', d: 'Structured echocardiography reporting with standard parameters.' },
      { icon: '💊', t: 'Cardiac Medication Tracking', d: 'High-risk medication management with interaction alerts.' },
      { icon: '📊', t: 'Risk Stratification', d: 'Framingham, GRACE, and TIMI scoring built into the workflow.' },
      { icon: '🏥', t: 'Procedure Documentation', d: 'Angiography, angioplasty, pacemaker, and EP study records.' },
      { icon: '📋', t: 'Cardiac Rehab Tracking', d: 'Post-procedure rehabilitation programme management.' },
    ],
    modules: [
      { icon: '❤️', title: 'Cardiology Consultation', tag: 'Clinical', desc: 'Complete cardiology consultation documentation with specialty-specific examination fields.', feats: ['Cardiac history structured capture', 'Cardiovascular examination module', 'Risk score calculators (GRACE, TIMI)', 'Symptom progression tracking', 'Family history and genetics', 'Medication history'] },
      { icon: '🔬', title: 'Investigation & Imaging', tag: 'Diagnostics', desc: 'Integrated investigation management — ECG, echo, stress test, Holter, and cath lab reports.', feats: ['ECG device integration', 'Echo report structured entry', 'Stress test documentation', 'Holter analysis upload', 'Cath lab report management', 'Investigation timeline view'] },
      { icon: '🏥', title: 'Procedure & Intervention Records', tag: 'Procedures', desc: 'Structured documentation for all cardiac procedures.', feats: ['Angiography report template', 'PCI/angioplasty documentation', 'Pacemaker implant record', 'EP study report', 'Surgical referral tracking', 'Device follow-up scheduling'] },
    ],
  },
  nephrology: {
    label: 'Nephrology OS', emoji: '🩺', isLive: false, status: 'Late-2026',
    tagline: 'Built for nephrologists and dialysis centres. Dialysis session tracking, CKD staging, and renal case management.',
    features: [
      { icon: '🩺', t: 'CKD Staging', d: 'Automated CKD staging based on GFR and creatinine.' },
      { icon: '💉', t: 'Dialysis Session Tracking', d: 'Per-session documentation for haemodialysis and peritoneal dialysis.' },
      { icon: '🔬', t: 'Renal Investigation Panel', d: 'Structured tracking of KFT, urine routine, 24-hour protein.' },
      { icon: '💊', t: 'Renal Dosing Alerts', d: 'Drug dosing adjustments for CKD stage with interaction alerts.' },
      { icon: '📊', t: 'Transplant Tracking', d: 'Pre- and post-transplant monitoring protocols built in.' },
      { icon: '📋', t: 'Dialysis Centre Management', d: 'Multi-chair dialysis centre scheduling and session management.' },
    ],
    modules: [
      { icon: '🩺', title: 'CKD Management Module', tag: 'Nephrology', desc: 'Longitudinal CKD tracking with automated staging, progression alerts, and structured visit documentation.', feats: ['Automated CKD staging (G1-G5)', 'eGFR trend tracking', 'Proteinuria monitoring', 'Anaemia of CKD management', 'Complication tracking', 'Referral coordination'] },
    ],
  },
  orthopedics: {
    label: 'Orthopedics OS', emoji: '🦴', isLive: false, status: 'Mid-2026',
    tagline: 'For orthopaedic surgeons and physiotherapy practices. Musculoskeletal assessment, imaging integration, and surgical documentation.',
    features: [
      { icon: '🦴', t: 'Musculoskeletal Assessment', d: 'Body region-specific examination modules built with orthopaedic surgeons.' },
      { icon: '🔬', t: 'Imaging Integration', d: 'X-ray, MRI, and CT scan management with annotation tools.' },
      { icon: '🏃', t: 'Physiotherapy Module', d: 'Exercise prescription, progress tracking, and outcome measurement.' },
      { icon: '🔧', t: 'Surgical Documentation', d: 'Pre-op, intra-op, and post-op records for all orthopaedic procedures.' },
      { icon: '📊', t: 'Outcome Tracking', d: 'PROMS, VAS, and functional scores tracked across the treatment journey.' },
      { icon: '💊', t: 'Pain Management', d: 'Structured pain assessment and analgesic management protocols.' },
    ],
    modules: [
      { icon: '🦴', title: 'Orthopaedic Consultation', tag: 'Clinical', desc: 'Region-specific musculoskeletal examination modules — spine, upper limb, lower limb, and joint assessments.', feats: ['Region-specific exam modules', 'ROM measurement capture', 'Special test documentation', 'Gait and posture assessment', 'Deformity grading', 'Neurovascular status'] },
    ],
  },
  dermatology: {
    label: 'Dermatology OS', emoji: '🔬', isLive: false, status: 'Late-2026',
    tagline: 'Built for dermatologists and cosmetology practices. Skin condition tracking, procedure documentation, and aesthetic workflow management.',
    features: [
      { icon: '🔬', t: 'Skin Condition Library', d: '1,500+ dermatology diagnoses with ICD-10 codes.' },
      { icon: '📸', t: 'Photo Documentation', d: 'Before/after photo management with body region mapping.' },
      { icon: '💉', t: 'Procedure & Aesthetic Module', d: 'Botox, fillers, lasers — structured documentation for all aesthetic procedures.' },
      { icon: '💊', t: 'Prescription Templates', d: 'Specialty-specific templates for common dermatological conditions.' },
      { icon: '📋', t: 'Patch Test Management', d: 'Structured allergen patch test documentation and reaction tracking.' },
      { icon: '📊', t: 'Cosmetic Clinic Analytics', d: 'Revenue by procedure, repeat booking rates, and satisfaction tracking.' },
    ],
    modules: [
      { icon: '🔬', title: 'Dermatology Consultation', tag: 'Clinical', desc: 'Complete dermatology consultation documentation with lesion mapping and structured diagnosis.', feats: ['Lesion site body mapping', 'Morphology descriptor library', 'Photo attachment per lesion', 'Diagnosis from ICD-10 library', 'Treatment protocol links', 'Follow-up scheduling'] },
    ],
  },
  gp: {
    label: 'General Practice OS', emoji: '⚕️', isLive: false, status: 'Late-2026',
    tagline: 'For general practitioners and family medicine clinics. High-volume consultation tools with chronic disease management.',
    features: [
      { icon: '⚡', t: 'High-Volume Consultation', d: 'Fast consultation documentation for GPs seeing 60–100 patients per day.' },
      { icon: '💊', t: 'Prescription Management', d: 'Drug database, dosage calculators, and interaction alerts built in.' },
      { icon: '📋', t: 'Chronic Disease Protocols', d: 'DM, HTN, and thyroid management protocols with automated follow-up.' },
      { icon: '🔬', t: 'Lab Integration', d: 'Direct lab ordering and result return integrated with patient records.' },
      { icon: '📊', t: 'Population Health View', d: 'Panel management — track all your chronic disease patients at population level.' },
      { icon: '🏥', t: 'Referral Management', d: 'Structured specialist referrals with outcome tracking.' },
    ],
    modules: [
      { icon: '⚡', title: 'GP Consultation Module', tag: 'General Practice', desc: 'Speed-optimised consultation for high-volume GP practices. Complete SOAP note in under 90 seconds.', feats: ['SOAP note rapid documentation', 'Chief complaint auto-classification', 'Physical exam quick-select', 'Drug database with dosing', 'Interaction and allergy alerts', 'Prescription printing'] },
    ],
  },
};
