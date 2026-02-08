import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../Nav';
import { formatDate } from '../lib/formatDate';
import { getAllBlogPosts } from '../lib/blog';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on product building, web development, and hospitality operations.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Articles on product building, web development, and hospitality operations.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `Blog | ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description: 'Articles on product building, web development, and hospitality operations.',
    images: ['/twitter-image'],
  },
};

export default function BlogIndexPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Nav />
      <main className="section" id="main-content">
        <div className="site-wrap">
          <header className="section-intro">
            <span className="section-kicker">Blog Archive</span>
            <h1 className="section-title">Thoughts and operating notes</h1>
            <p className="section-lead">Insights from building products, writing code, and running experiments in hospitality-tech.</p>
          </header>

          {blogPosts.length > 0 ? (
            <section className="card-grid two">
              {blogPosts.map((post) => (
                <article key={post.id} className="card">
                  <time className="muted text-sm" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <h2 className="card-title mt-3 text-3xl">{post.title}</h2>
                  <p className="card-copy muted">{post.excerpt}</p>
                  <div className="card-meta flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="read-link">
                    Read post
                  </Link>
                </article>
              ))}
            </section>
          ) : (
            <article className="card">
              <h2 className="card-title text-3xl">No posts published</h2>
              <p className="muted mb-0">Check back soon for new writing.</p>
            </article>
          )}
        </div>
      </main>
    </>
  );
}
