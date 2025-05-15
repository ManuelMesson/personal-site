export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Blog Post {params.id}</h1>
      <p className="text-lg">
        This is the content for blog post {params.id}. You can fetch and display dynamic content here.
      </p>
      <a href="/blog" className="text-blue-500 hover:underline">
        Back to Blog
      </a>
    </div>
  );
}