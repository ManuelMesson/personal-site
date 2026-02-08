import Nav from './Nav';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import { siteConfig } from './siteConfig';

export default function Home() {
  const sameAs = [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Entrepreneur',
    knowsAbout: ['SaaS', 'React', 'Next.js', 'TypeScript', 'Hospitality'],
    sameAs,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <main id="main-content">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
