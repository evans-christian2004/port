import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import Cursor from "./components/ui/Cursor";
import Preloader from "./components/ui/Preloader";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const siteUrl = new URL("https://christianevans.dev");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Christian Evans | Software Engineer & IT Professional",
    template: "%s | Christian Evans",
  },
  description:
    "Portfolio of Christian Evans, a Florida-based software engineer and IT technician building performant web experiences, developer tools, and community-driven projects.",
  keywords: [
    "Christian Evans",
    "software engineer",
    "web developer",
    "Next.js portfolio",
    "frontend engineer",
    "IT technician",
    "Orlando developer",
  ],
  authors: [{ name: "Christian Evans" }],
  creator: "Christian Evans",
  publisher: "Christian Evans",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Christian Evans | Software Engineer & IT Professional",
    description:
      "Explore the projects, experience, and skills of Christian Evans—a Next.js developer and IT professional focused on thoughtful UI and reliable systems.",
    siteName: "Christian Evans Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 2802,
        height: 1512,
        alt: "Christian Evans portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Evans | Software Engineer & IT Professional",
    description:
      "Developer portfolio highlighting projects, experience, and community involvement from Christian Evans.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <Preloader />
        <Cursor />
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
