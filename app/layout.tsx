import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VLOGS - Modern Tech Blog",
  description: "A blueprint for a modern blog built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/sample.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-74BVQR0SDN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-74BVQR0SDN');
          `}
        </Script>
        <Navbar />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-gray-100 dark:border-gray-800 py-12 mt-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500">© 2026 VLOGS. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
