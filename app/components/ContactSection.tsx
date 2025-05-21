'use client';

import { useState, FormEvent } from 'react';
import type { ReactNode } from 'react';

interface SocialLink {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    description: 'Connect professionally',
    href: 'https://linkedin.com/in/yourprofile',
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
    description: 'View my code',
    href: 'https://github.com/yourusername',
    icon: (
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
      />
    ),
  },
  {
    name: 'Email',
    description: 'Send me a message',
    href: 'mailto:your.email@example.com',
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

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="section py-16 md:py-24">
      <div className="container flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-secondary text-lg md:text-xl leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Let's create something amazing together.
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="bg-muted/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-4 rounded-xl bg-background/70 border border-accent/10
                          focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30
                          transition-all duration-200"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-4 rounded-xl bg-background/70 border border-accent/10
                          focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30
                          transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full p-4 rounded-xl bg-background/70 border border-accent/10
                          focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30
                          transition-all duration-200 resize-none"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center md:justify-start">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full md:w-auto min-w-[200px] px-8 py-4 bg-accent text-white rounded-xl
                        hover:bg-accent/90 active:bg-accent/80 transform hover:-translate-y-0.5 
                        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                        disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : formStatus === 'success' ? (
                        <span>Message Sent!</span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Links */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-muted/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 -mx-2 rounded-xl hover:bg-accent/5 
                          transition-colors duration-200"
                      >
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {link.icon}
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-medium">{link.name}</h4>
                          <p className="text-sm text-secondary">{link.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
