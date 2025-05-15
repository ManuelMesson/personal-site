// app/page.tsx
'use client'

import { useState } from 'react'
import Nav from './Nav'
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [current, setCurrent] = useState('Home');

  return (
    <main className="max-w-3xl mx-auto">
      <Nav onNavigate={setCurrent} />

      {current === 'Home' && <HomeSection />}
      {current === 'About' && <AboutSection />}
      {current === 'Projects' && <ProjectsSection />}
      {current === 'Contact' && <ContactSection />}
    </main>
  );
}
