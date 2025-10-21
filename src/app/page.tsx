import Image from "next/image";
import { Hero } from "./components/Hero";
import Link from "next/link";
import SkillsSection from "./components/SkillsSection";
import IMakeThings from "./components/IMakeThings";
import CommunitySection from "./components/CommunitySection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="">
        <Hero/>
      </section>
      <section className="min-h-screen max-h-fit bg-[#073a4b] rounded-t-full">
        <div className="container mx-auto py-12 lg:py-24">
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className="px-6 lg:px-12 text-xl">
              <h1 className="text-5xl xl:text-7xl mb-12 font-semibold">Who Is This Guy?</h1>
              <p className="text-sm sm:text-xl">
                Hello and welcome! My name is Christian Evans, and I'm an Information Technology Student at the <Link href="https://www.ucf.edu/" className="text-primary-500 underline">
                University of Central Florida</Link>. I am a software engineer and IT technician with a passion for learning and growing my skills in thriving communities.
                I currently am an active memeber of <Link href="https://club.knighthacks.org/" className="text-primary-500 underline">Knight Hacks</Link>, the primary software engineering 
                student organization at UCF, as well as <Link href="https://www.colorstack.org/" className="text-primary-500 underline">Color Stack </Link> 
                and <Link href="https://www.nsbeucf.org/" className="text-primary-500 underline">NSBE</Link> &#40;National Society of Black Engineers&#41;.

              </p>
              <p className="text-sm sm:text-xl pt-6">
                Professionally, I currnntly work at <Link href="https://it.ucf.edu/" className="text-primary-500 underline">UCF's IT department</Link> as an IT Student Technician, where I Provide Tier 1 technical Support
                For UCF's largest IT zone. I provide support for over 500 students, faculty, and staff.
              </p>
              <p className="text-sm sm:text-xl pt-6">
                Previously, I worked at as front-end engineer intern for <Link href="https://thestartuplife.io/" className="text-primary-500 underline">The Startup Life</Link>, an LLC based in Miami with the goal of growing the digital brand of different small organizations
                and companies. While working there I developed and deployed the primary landing pages for budding startups and the comany itself. It was a small team, where 
                I often had the pleasure of taking a leadership role in decision making and design decisions.
              </p>
            </div>
            <div className="">
              <Image className="sm:rounded-[20rem] rounded-full p-5" src="/images/heroimgs/me.jpg" alt="a picture of me" width={2400} height={3200}/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#073a4b] rounded-b-[20rem] pb-24" >
        <IMakeThings/>
        <CommunitySection/>
      </section>
      <section>
        <SkillsSection/>
      </section>
    </main>
  );
}
