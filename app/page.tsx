// app/page.tsx
'use client';

import { useState } from 'react';
import Script from 'next/script';
import Nav from './Nav';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import BlogPostDetail from './components/BlogPostDetail';

export type SectionName = 'Home' | 'About' | 'Projects' | 'Contact' | 'Blog' | 'BlogDetails';

const validSections: SectionName[] = ['Home', 'About', 'Projects', 'Contact', 'Blog', 'BlogDetails'];

type SectionComponent = React.ReactNode | ((onNavigate: (section: string, id?: number) => void) => React.ReactNode);

export default function Home() {
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

  const sections: Record<SectionName, SectionComponent> = {
    Home: <HomeSection />,
    About: <AboutSection />,
    Projects: <ProjectsSection />,
    Contact: <ContactSection />,
    Blog: (onNavigate) => <BlogSection onNavigate={onNavigate} />,
    BlogDetails: <></>,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manuel Messon',
    url: 'https://manuelmesson.com',
    jobTitle: 'Web Developer',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Web Development'],
    image: 'https://manuelmesson.com/profile-image.jpg',
    sameAs: [
      'https://github.com/yourhandle',
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourhandle'
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="max-w-screen-lg mx-auto px-4">
        <Nav onNavigate={handleNavigate} />
        {current === 'BlogDetails' && blogId ? (
          <BlogPostDetail id={blogId} />
        ) : typeof sections[current] === 'function' ? (
          (sections[current] as Function)(handleNavigate)
        ) : (
          sections[current]
        )}
      </main>
    </>
  );
}
