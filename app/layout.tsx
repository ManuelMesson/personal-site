import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Ensure text remains visible during webfont load
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manuelmesson.com'),
  title: {
    default: "Manuel Messon-Roque - Entrepreneur",
    template: "%s | Manuel Messon-Roque"
  },
  description: "Entrepreneur building SaaS tools and coffee businesses that blend tech, creativity, and human connection",
  keywords: ["web developer", "full-stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Manuel Messon-Roque" }],
  creator: "Manuel Messon-Roque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manuelmesson.com",
    siteName: "Manuel Messon-Roque",
    title: "Manuel Messon-Roque - Entrepreneur",
    description: "Entrepreneur building SaaS tools and coffee businesses that blend tech, creativity, and human connection",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manuel Messon-Roque - Entrepreneur"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Messon-Roque - Entrepreneur",
    description: "Entrepreneur building SaaS tools and coffee businesses that blend tech, creativity, and human connection",
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
