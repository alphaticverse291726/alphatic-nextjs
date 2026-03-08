'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/ThemeContext';
import { useModal } from '@/lib/ModalContext';

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { openModal } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/help', label: 'Help' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
    { href: '/invest', label: 'Invest' },
  ];

  const legalLinks = [
    { href: '/policies', label: '🔒 Privacy Policy' },
    { href: '/policies', label: '🛡 Security Policy' },
    { href: '/policies', label: '⚡ SLA & Uptime' },
    { href: '/policies', label: '📋 Data Processing' },
    { href: '/terms', label: '📄 Terms of Service' },
  ];

  return (
    <nav className="navbar">
      <div className="wrap nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">α</span>
          <span className="logo-text">Alphatic<span className="logo-sub">Labs</span></span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href + l.label}>
              <Link href={l.href} className="nav-link">{l.label}</Link>
            </li>
          ))}
          <li className="nav-dropdown">
            <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              Legal <span style={{ fontSize: 9, opacity: 0.5 }}>▾</span>
            </button>
            <div className="nav-dd-menu">
              {legalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="nav-dd-item">{l.label}</Link>
              ))}
            </div>
          </li>
        </ul>

        <div className="nav-acts">
          <div className="theme-toggle">
            <button className={`theme-btn${theme === 'dark' ? ' active' : ''}`} onClick={() => setTheme('dark')} title="Dark mode"><MoonIcon /></button>
            <button className={`theme-btn${theme === 'light' ? ' active' : ''}`} onClick={() => setTheme('light')} title="Light mode"><SunIcon /></button>
          </div>
          <button className="btn btn-o btn-sm" onClick={openModal}>Demo</button>
          <button className="btn btn-p btn-sm" onClick={openModal}>Start free</button>
          <button className={`hamburger${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.href + l.label} href={l.href} className="mob-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/policies" className="mob-link" onClick={() => setMobileOpen(false)}>Legal & Policies</Link>
        <Link href="/terms" className="mob-link" onClick={() => setMobileOpen(false)}>Terms of Service</Link>
        <div style={{ display: 'flex', gap: 8, padding: '10px 12px' }}>
          <button className="btn btn-o btn-sm" style={{ flex: 1, justifyContent: 'center' }} onClick={openModal}>Demo</button>
          <button className="btn btn-p btn-sm" style={{ flex: 1, justifyContent: 'center' }} onClick={openModal}>Start free</button>
        </div>
      </div>
    </nav>
  );
}
