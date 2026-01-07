import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allan Rufus - Performance Marketing Specialist",
  description:
    "Performance Marketing Specialist with 4+ years driving measurable growth through data-driven campaigns. Expert in Google Ads, Meta Ads, LinkedIn Ads, and CRM automation.",
  keywords: [
    "Performance Marketing",
    "Digital Marketing",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "CRM",
    "Marketing Analytics",
    "Lead Generation",
  ],
  authors: [{ name: "Allan Rufus" }],
  openGraph: {
    title: "Allan Rufus - Performance Marketing Specialist",
    description:
      "4+ years driving measurable growth through data-driven campaigns",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
