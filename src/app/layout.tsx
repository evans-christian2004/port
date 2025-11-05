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
})

export const metadata: Metadata = {
  title: "Christian Evans",
  description: "Hi I'm Christian Evans, a web developer and Information Technology Professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <>
        <body
          className={`${lexend.variable} ${lexend.variable} antialiased`}
        >
          <Preloader />
          <Cursor/>
          <TopNav/>
          {children}
          <Footer/>
        </body>
      </>
      
    </html>
  );
}
