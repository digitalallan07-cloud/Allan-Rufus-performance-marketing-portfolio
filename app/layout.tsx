import type { Metadata } from "next";
// NOTE: Google Fonts import - uncomment when deploying or running with internet access
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

// NOTE: Uncomment these when deploying or running with internet access
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Allan Rufus - Performance Marketing Expert",
  description:
    "Performance Marketing Expert with 4+ years UAE experience. Empowering brands with full-funnel marketing to accelerate growth.",
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
        className="font-sans antialiased"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
