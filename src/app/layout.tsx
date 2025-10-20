import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";


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
          <Cursor/>
          <TopNav/>
          {children}
          <Footer/>
        </body>
      </>
      
    </html>
  );
}
