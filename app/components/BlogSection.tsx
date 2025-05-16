import { useRouter } from 'next/navigation';
import blogPosts from '../data/blogPosts';

export default function BlogSection({ onNavigate }: { onNavigate: (section: string, id?: number) => void }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-8">Latest Posts</h2>
        <div className="grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="card">
              <time className="text-sm text-secondary mb-2 block">{post.date}</time>
              <h3 className="mb-4">{post.title}</h3>
              <p className="mb-6">{post.excerpt}</p>
              <button 
                onClick={() => onNavigate('BlogDetails', post.id)}
                className="button button-outline"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
