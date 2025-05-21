// components/Nav.tsx
'use client';

import { useState } from 'react';

export default function Nav({ onNavigate }: { onNavigate: (value: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="nav">
      <div className="container">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('Home')} 
            className="text-xl font-bold"
          >
            Manuel Messon-Roque
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => onNavigate('About')} className="button button-outline">About</button>
            <button onClick={() => onNavigate('Projects')} className="button button-outline">Projects</button>
            <button onClick={() => onNavigate('Blog')} className="button button-outline">Blog</button>
            <button onClick={() => onNavigate('Contact')} className="button button-outline">Contact</button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col gap-2 mt-4`}>
          <button onClick={() => { onNavigate('About'); toggleMenu(); }} className="button button-outline w-full">About</button>
          <button onClick={() => { onNavigate('Projects'); toggleMenu(); }} className="button button-outline w-full">Projects</button>
          <button onClick={() => { onNavigate('Blog'); toggleMenu(); }} className="button button-outline w-full">Blog</button>
          <button onClick={() => { onNavigate('Contact'); toggleMenu(); }} className="button button-outline w-full">Contact</button>
        </div>
      </div>
    </nav>
  );
}
