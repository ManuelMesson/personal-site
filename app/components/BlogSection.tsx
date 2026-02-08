import Link from 'next/link';
import { formatDate } from '../lib/formatDate';
import { getLatestBlogPosts } from '../lib/blog';
import Section from './Section';

export default function BlogSection() {
  const latestPosts = getLatestBlogPosts(2);

  return (
    <Section id="blog">
      <span className="section-kicker">Blog</span>
      <h2 className="section-title">Latest notes</h2>
      <p className="section-lead section-copy">Writing about product decisions, technical execution, and what works in practice.</p>

      {latestPosts.length > 0 ? (
        <div className="card-grid two">
          {latestPosts.map((post) => (
            <article key={post.id} className="card">
              <time dateTime={post.date} className="muted text-sm">
                {formatDate(post.date)}
              </time>
              <h3 className="card-title mt-3">{post.title}</h3>
              <p className="card-copy muted">{post.excerpt}</p>
              <div className="card-meta flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.id}`} className="read-link">
                Read article
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <article className="card">
          <h3 className="card-title">No posts yet</h3>
          <p className="muted mb-0">New articles will appear here soon.</p>
        </article>
      )}

      <div className="section-action">
        <Link href="/blog" className="button button-outline">
          View all posts
        </Link>
      </div>
    </Section>
  );
}
