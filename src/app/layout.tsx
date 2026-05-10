import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// Sans-serif for body text and UI
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace — used for code/tags if needed
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif for headlines — adds elegance and editorial feel
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Multiple weights for flexibility
});

// SEO metadata — what shows in browser tabs, Google search,
// LinkedIn previews, etc.
export const metadata: Metadata = {
  title: "Joshua Abraham — AI & Cloud Engineer",
  description:
    "AI & Cloud Engineer building scalable, intelligent systems — and leading teams to ship them. GCP-certified, with experience at KPMG, HPE, and SLB.",
  keywords: [
    "AI Engineer",
    "Cloud Engineer",
    "GCP",
    "Terraform",
    "Machine Learning",
    "Joshua Abraham",
  ],
  authors: [{ name: "Joshua Abraham" }],
  // Open Graph tags — what shows when you share the link on
  // LinkedIn, Twitter, Slack, etc.
  openGraph: {
    title: "Joshua Abraham — AI & Cloud Engineer",
    description:
      "AI & Cloud Engineer building scalable, intelligent systems — and leading teams to ship them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}