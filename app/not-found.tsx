import Link from 'next/link';
import Nav from './Nav';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="section" id="main-content">
        <section className="site-wrap">
          <span className="section-kicker">404</span>
          <h1 className="section-title">Page not found</h1>
          <p className="section-lead section-copy">The page you requested is missing or no longer available.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="button">
              Go home
            </Link>
            <Link href="/blog" className="button button-outline">
              Visit blog
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
