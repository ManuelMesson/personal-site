import Link from 'next/link';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const toSectionHref = (sectionHash: string) => `/${sectionHash}`;

  return (
    <header className="nav-shell">
      <div className="site-wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link href="/" className="brand">
            Manuel Messon-Roque
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={toSectionHref(item.href)} className="nav-link">
                {item.label}
              </a>
            ))}
            <Link href="/blog" className="nav-cta">
              All Posts
            </Link>
          </div>

          <details className="mobile-menu">
            <summary className="mobile-toggle">
              <span className="sr-only">Toggle menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2.5 4H13.5M2.5 8H13.5M2.5 12H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="mobile-panel">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={toSectionHref(item.href)} className="nav-link">
                    {item.label}
                  </a>
                ))}
                <Link href="/blog" className="button">
                  All Posts
                </Link>
              </div>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
