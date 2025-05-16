import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manuel Messon - Personal Site",
  description: "Personal website and blog of Manuel Messon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
