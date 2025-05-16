// components/Nav.tsx
'use client';

export default function Nav({ onNavigate }: { onNavigate: (value: string) => void }) {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-links">
          <button onClick={() => onNavigate('Home')} className="button button-outline">Home</button>
          <button onClick={() => onNavigate('About')} className="button button-outline">About</button>
          <button onClick={() => onNavigate('Projects')} className="button button-outline">Projects</button>
          <button onClick={() => onNavigate('Blog')} className="button button-outline">Blog</button>
          <button onClick={() => onNavigate('Contact')} className="button button-outline">Contact</button>
        </div>
      </div>
    </nav>
  );
}
