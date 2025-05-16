import { useRouter } from 'next/navigation';

export default function BlogPost({ id, title, date, excerpt }: { id: number; title: string; date: string; excerpt: string }) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <article>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-secondary mb-4">{date}</p>
      <p className="mb-4 text-gray-700">{excerpt}</p>
      <button onClick={handleNavigation} className="hover:bg-accent">
        Read More
      </button>
    </article>
  );
}
