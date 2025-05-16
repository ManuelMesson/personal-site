// app/page.tsx
'use client';

import React from 'react';
import { FC, useState } from 'react';
import Nav from './Nav';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import BlogDetails from './blog/[id]/page';

export type SectionName = 'Home' | 'About' | 'Projects' | 'Contact' | 'Blog' | 'BlogDetails';

const validSections: SectionName[] = ['Home', 'About', 'Projects', 'Contact', 'Blog', 'BlogDetails'];

const sections: Record<SectionName, JSX.Element | ((onNavigate: (section: string, id?: number) => void) => JSX.Element)> = {
  Home: <HomeSection />,
  About: <AboutSection />,
  Projects: <ProjectsSection />,
  Contact: <ContactSection />,
  Blog: (onNavigate: (section: string, id?: number) => void) => <BlogSection onNavigate={onNavigate} />,
  BlogDetails: <></>,
};

const Home: FC = () => {
  const [current, setCurrent] = useState<SectionName>('Home');
  const [blogId, setBlogId] = useState<number | null>(null);

  const handleNavigate = (value: string, id?: number) => {
    if (value === 'BlogDetails' && id) {
      setCurrent('BlogDetails');
      setBlogId(id);
    } else if (validSections.includes(value as SectionName)) {
      setCurrent(value as SectionName);
    }
  };

  return (
    <main className="max-w-screen-lg mx-auto px-4">
      <Nav onNavigate={handleNavigate} />
      {current === 'BlogDetails' && blogId ? (
        <BlogDetails id={blogId} />
      ) : typeof sections[current] === 'function' ? (
        sections[current](handleNavigate)
      ) : (
        sections[current]
      )}
    </main>
  );
};

export default Home;
