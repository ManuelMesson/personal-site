import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import blogPosts from '../../data/blogPosts';

export async function generateMetadata(props: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPost(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params;
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
