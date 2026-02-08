import type { ReactNode } from 'react';
import Section from './Section';
import { siteConfig } from '../siteConfig';

interface SocialLink {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    description: 'Professional profile',
    href: siteConfig.social.linkedin,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    name: 'GitHub',
    description: 'Code and experiments',
    href: siteConfig.social.github,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    name: 'Email',
    description: 'Direct contact',
    href: `mailto:${siteConfig.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
];

const availableLinks = socialLinks.filter((link) => {
  if (link.name === 'Email') {
    return siteConfig.email.length > 0;
  }

  return link.href.length > 0;
});

export default function ContactSection() {
  return (
    <Section id="contact">
      <span className="section-kicker">Contact</span>
      <h2 className="section-title">Open to focused conversations.</h2>
      <p className="section-lead section-copy">Email and LinkedIn are the fastest paths. I reply to collaboration and product inquiries.</p>

      <div className="card-grid three">
        {availableLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="card transition-transform hover:-translate-y-0.5"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-muted)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {link.icon}
              </svg>
            </div>
            <h3 className="card-title">{link.name}</h3>
            <p className="muted mb-0">{link.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
