import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import blogPosts from '../../data/blogPosts';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Manuel Messon'],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params, searchParams }: Props) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <time dateTime={post.date} className="text-gray-600 mb-6 block">
        {post.date}
      </time>
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}
