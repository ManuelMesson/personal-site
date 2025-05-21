import { useRouter } from 'next/navigation';
import blogPosts from '../data/blogPosts';

export default function BlogSection({ onNavigate }: { onNavigate: (section: string, id?: number) => void }) {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center md:text-left mb-12">
          <h2 className="mb-4">Latest Posts</h2>
          <p className="text-secondary text-lg md:max-w-2xl">
            Thoughts, insights, and experiences from my journey in web development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group relative bg-muted/30 rounded-2xl p-6 md:p-8 transition-all duration-300 
                hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <header className="space-y-4">
                  <time 
                    className="inline-block text-sm text-secondary px-3 py-1 rounded-full bg-accent/10"
                    dateTime={post.date}
                  >
                    {post.date}
                  </time>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </header>

                <p className="text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <footer className="pt-4">
                  <button 
                    onClick={() => onNavigate('BlogDetails', post.id)}
                    className="inline-flex items-center gap-2 text-accent group/link"
                  >
                    <span className="relative font-medium">
                      Read more
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
                    </span>
                    <svg 
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </button>
                </footer>
              </div>

              {/* Decorative corner pattern */}
              <div className="absolute top-6 right-6 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>
                  <path d="M15 7H9v2h6V7zm0 4H9v2h6v-2zm0 4H9v2h6v-2z"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
