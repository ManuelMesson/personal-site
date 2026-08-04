import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '../../Nav';
import { getAllBlogPosts, getBlogPostById } from '../../lib/blog';
import { formatDate } from '../../lib/formatDate';
import { siteConfig } from '../../siteConfig';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

function parsePostId(idParam: string) {
  return Number.parseInt(idParam, 10);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostById(parsePostId(resolvedParams.id));

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const canonicalPath = `/blog/${post.id}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'article',
      url: `${siteConfig.url}${canonicalPath}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/twitter-image'],
    },
  };
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostById(parsePostId(resolvedParams.id));

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.id}`,
    },
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    url: `${siteConfig.url}/blog/${post.id}`,
  };

  return (
    <>
      <Nav />
      <main className="section" id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        <article className="site-wrap">
          <Link href="/blog" className="button button-outline section-copy inline-flex">
            Back to blog
          </Link>

          <header className="section-intro">
            <h1 className="section-title">{post.title}</h1>
            <time dateTime={post.date} className="muted block card-copy">
              {formatDate(post.date)}
            </time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="card post-body">
            {post.content
              .split('\n\n')
              .map((paragraph) => paragraph.trim())
              .filter(Boolean)
              .map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="break-words text-lg leading-8 text-[var(--text)]"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </article>
      </main>
    </>
  );
}
