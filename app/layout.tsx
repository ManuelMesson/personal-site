import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Ensure text remains visible during webfont load
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manuelMesson-Roque.com'),
  title: {
    default: "Manuel Messon-Roque - Web Developer",
    template: "%s | Manuel Messon-Roque"
  },
  description: "Full-stack developer specializing in modern web applications with React, Next.js, and TypeScript",
  keywords: ["web developer", "full-stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Manuel Messon-Roque" }],
  creator: "Manuel Messon-Roque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manuelMesson-Roque.com",
    siteName: "Manuel Messon-Roque",
    title: "Manuel Messon-Roque - Web Developer",
    description: "Full-stack developer specializing in modern web applications",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manuel Messon-Roque - Web Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Messon-Roque - Web Developer",
    description: "Full-stack developer specializing in modern web applications",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
