import blogPosts from './../data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="section">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div className="mt-4">{post.content}</div>
    </article>
  );
}
