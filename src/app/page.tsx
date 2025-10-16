import Image from "next/image";
import { LetterCollision } from "./components/LetterCollision";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="">
        <LetterCollision/>
      </section>
      <section className="min-h-screen bg-[#073a4b]">
        <div className="container mx-auto pt-24">
          <div className="display flex md:flex-row flex-col-reverse items-center">
            <div className="p-12 text-xl">
              <p className="">
                Hello and welcome! My name is Christian Evans, and I'm an Information Technology Student at the <Link href="https://www.ucf.edu/" className="text-primary-500 underline">University of
                Central Florida</Link>. I am a software engineer and IT technician with a passion for learning and growing my skills.
                I currently am an active memeber of <Link href="https://club.knighthacks.org/" className="text-primary-500 underline">Knight Hacks</Link>, the primary software engineering.
                student organization at UCF, as well as <Link href="https://www.colorstack.org/" className="text-primary-500 underline">Color Stack</Link> and <Link href="https://www.nsbeucf.org/" className="text-primary-500 underline">NSBE</Link> &#40;National Society of Black Engineers&#41;.

              </p>
              <p className="pt-6">
                Professionally, I currnntly work at <Link href="https://it.ucf.edu/" className="text-primary-500 underline">UCF's IT department</Link> as an IT Student Technician, where I Provide Tier 1 technical Support
                For UCF's largest IT zone. I provide support for over 500 students, faculty, and staff.
              </p>
              <p className="pt-6">
                Previously, I worked at <Link href="https://thestartuplife.io/" className="text-primary-500 underline">The Startup Life</Link>, an LLC based in Miami with the goal of growing the digital brand of different small organizations
                and companies. While working there I developed and deployed the primary landing pages for budding startups and the comany itself. It was a small team, where 
                I often had the pleasure of taking a leadership role in decision making and design decisions.
              </p>
            </div>
            <div className="">
              <Image className="rounded-4xl p-4" src="/images/me.webp" alt="a picture of me" width={3000} height={4000}/>
            </div>

          </div>
        </div>
        {/* <Image className="rotate-180 mx-auto pt-4" src="/Down-Arrow.svg" width={50} height={50} alt='Arrow'/> */}
      </section>
    </main>
  );
}
