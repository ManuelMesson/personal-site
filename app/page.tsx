// app/page.tsx
'use client'

import { useState } from 'react'
import Nav from './Nav'
import Section from './components/Section';

export default function Home() {
  const [current, setCurrent] = useState('Home')

  return (
    <main className="max-w-3xl mx-auto">
      <Nav onNavigate={setCurrent} />

      {current === 'Home' && (
        <Section title="Welcome">
          <p>This is your personal site.</p>
        </Section>
      )}

      {current === 'About' && (
        <Section title="About Me">
          <p>I’m a creative barista-turned-dev with big plans.</p>
        </Section>
      )}

      {current === 'Projects' && (
        <Section title="Projects">
          <p>Here are some things I’ve built or plan to build.</p>
        </Section>
      )}

      {current === 'Contact' && (
        <Section title="Contact">
          <p>Email me at: you@example.com</p>
        </Section>
      )}
    </main>
  )
}
