import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "./components/sections/Hero";
import Link from "next/link";
import IMakeThings from "./components/sections/IMakeThings";
import CommunitySection from "./components/sections/CommunitySection";
import MoreSection from "./components/sections/MoreSection";

export const metadata: Metadata = {
  title: "About | Christian Evans",
  description:
    "Dive into Christian Evans' portfolio—software engineering projects, IT experience, and community work from a Florida-based developer focused on performant web experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "About | Christian Evans",
    description:
      "Explore the projects, story, and community impact of Christian Evans, a Next.js developer and IT professional in Orlando, FL.",
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
    title: "About | Christian Evans",
    description:
      "Christian Evans' portfolio of software projects, IT work, and community leadership.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="">
        <Hero/>
      </section>
      <section className="min-h-screen max-h-fit bg-[#073a4b] rounded-t-full flex items-center justify-center">
        <div className="container mx-auto py-12 lg:py-24">
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className="px-6 lg:px-12 text-xl">
              <h1 className="text-5xl xl:text-7xl mb-12 font-semibold">Who Is This Guy?</h1>
              <p className="text-sm sm:text-xl">
                Hello and welcome! My name is <strong>Christian Evans</strong>, and I&apos;m a <strong>software engineer and IT technician studying Information Technology</strong> at the <Link href="https://www.ucf.edu/" className="text-primary-500 underline">
                University of Central Florida</Link>. I&apos;ve always had a passion for learning and growing my skills in thriving communities, so thats what I surround myself with!
                As an active member of <Link href="https://club.knighthacks.org/" className="text-primary-500 underline">Knight Hacks</Link>, the primary software engineering 
                student organization at UCF, as well as <Link href="https://www.colorstack.org/" className="text-primary-500 underline">Color Stack </Link> 
                and <Link href="https://www.nsbeucf.org/" className="text-primary-500 underline">NSBE</Link> &#40;National Society of Black Engineers&#41; I&apos;m able grow and contribute to communities that matter to me.

              </p>
              <p className="text-sm sm:text-xl pt-6">
                Professionally, I currently work at <Link href="https://it.ucf.edu/" className="text-primary-500 underline">UCF&apos;s IT department</Link> as an IT Student Technician, where I Provide <strong>Tier 1 technical Support for UCF&apos;s largest IT zone</strong>. 
                I provide support for over 500 students, faculty, and staff.
              </p>
              <p className="text-sm sm:text-xl pt-6">
                Previously, I was a <strong>front-end engineer intern</strong> for <Link href="https://thestartuplife.io/" className="text-primary-500 underline">The Startup Life</Link>, an LLC based in Miami with the goal of growing the digital brand of different small organizations
                and companies. While working there I developed the primary landing pages for budding startups and the company itself. It was a small team, where 
                I often had the pleasure of taking a leadership role in decision making and design decisions.
              </p>
            </div>
            <div className="">
              <Image className="sm:rounded-[20rem] rounded-full p-5" src="/images/landing/me.jpg" alt="a picture of me" width={2400} height={3200}/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#073a4b] rounded-b-[20rem] pb-24" >
        <IMakeThings/>
        <CommunitySection/>
      </section>
      <section>
        <MoreSection/>
      </section>
    </main>
  );
}
