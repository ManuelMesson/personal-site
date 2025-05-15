export default function Blog() {
  const posts = [
    { id: 1, title: "My First Blog Post", description: "An introduction to my blog." },
    { id: 2, title: "Learning Next.js", description: "Sharing my journey with Next.js." },
    { id: 3, title: "Tailwind CSS Tips", description: "How I style my projects efficiently." },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg hover:shadow-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
            <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}