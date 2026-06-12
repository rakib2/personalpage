import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.publication.name} — ${profile.name}`,
    template: `%s`,
  },
  description: profile.publication.tagline,
  openGraph: {
    title: profile.publication.name,
    description: profile.publication.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.publication.name,
    description: profile.publication.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#05080d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
