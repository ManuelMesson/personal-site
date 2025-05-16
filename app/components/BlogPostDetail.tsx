'use client';

import blogPosts from '../data/blogPosts';

interface BlogPostDetailProps {
  id: number;
}

export default function BlogPostDetail({ id }: BlogPostDetailProps) {
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
      </div>
    );
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