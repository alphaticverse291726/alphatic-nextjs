import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: 12, display: 'inline-flex' }}>
              <span className="logo-mark" style={{ width: 24, height: 24, fontSize: 11 }}>α</span>
              <span className="logo-text" style={{ fontSize: 14 }}>Alphatic<span className="logo-sub">Labs</span></span>
            </Link>
            <p style={{ color: 'var(--td)', fontSize: 12, lineHeight: 1.7, maxWidth: 200, fontFamily: 'var(--ff-mono)' }}>
              The operating system of modern healthcare. Built in India 🇮🇳
            </p>
          </div>
          <div className="fc">
            <h4>Product</h4>
            <ul>
              <li><Link href="/product">Platform Overview</Link></li>
              <li><Link href="/product">For Dental</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/help">Help Center</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about">Our Vision</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Careers</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/policies">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/policies">Security</Link></li>
              <li><Link href="/policies">SLA & Uptime</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>More</h4>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/invest">Invest</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2025 Alphatic Labs Pvt. Ltd. All rights reserved.</span>
          <span>Chennai · Bengaluru · India</span>
        </div>
      </div>
    </footer>
  );
}
