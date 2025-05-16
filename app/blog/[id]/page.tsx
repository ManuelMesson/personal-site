"use client";

import blogPosts from '../../data/blogPosts';

export default function BlogDetails({ id }: { id: number }) {
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <article className="container">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </article>
  );
}
