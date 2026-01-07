import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan Rufus - Performance Marketing Expert",
  description:
    "Performance Marketing Expert with 4+ years UAE experience. Empowering brands with full-funnel marketing to accelerate growth.",
  keywords: [
    "Performance Marketing",
    "Digital Marketing",
    "PPC",
    "CRO",
    "GTM",
    "Google Tag Manager",
    "AI Coding",
    "UAE Marketing",
  ],
  authors: [{ name: "Allan Rufus" }],
  openGraph: {
    title: "Allan Rufus - Performance Marketing Expert",
    description:
      "4+ years UAE experience. Empowering brands with full-funnel marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
