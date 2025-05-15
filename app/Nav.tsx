// components/Nav.tsx
'use client'

import { useState } from 'react'

export default function Nav({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <nav className="flex gap-4 p-4">
      {['Home', 'About', 'Projects', 'Contact'].map((section) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="text-blue-600 hover:underline"
        >
          {section}
        </button>
      ))}
    </nav>
  )
}
