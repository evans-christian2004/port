import React from 'react'
import ImageCarousel from '../ui/ImageCarousel'
import Link from 'next/link'
import Image from 'next/image'

const CommunitySection = () => {
  
  const images: string[] = [
    "/images/projects/tldr/3.jpg",
    "/images/projects/alto/4.jpg",
    "/images/projects/alto/5.jpg",
    "/images/projects/feai/4.jpg",
    "/images/landing/startupgroup.jpg",
  ];
  return (
    <div className='container mx-auto xl:px-0 px-5 py-12 lg:py-24 min-h-screen flex flex-col'>
      <h1 className='text-5xl xl:text-8xl font-semibold'>What Does He Do?</h1>
        <div className="mx-auto flex lg:flex-row flex-col-reverse items-center md:gap-12 justify-between">
            <div className="flex flex-col gap-5">
              <div className="sm:w-[45vw]">
                <ImageCarousel 
                  images={images} 
                />
              </div>
              
              <Link 
                className='group bg-primary-400 rounded-full flex items-center gap-2 justify-center p-10
                  hover:bg-[#e974e7] transition-all ease-in-out duration-300' 
                href="/projects"
              >
                <p 
                className='text-2xl xl:text-5xl 2xl:text-6xl font-bold text-background-[B94DA1] 
                  group-hover:mx-3 transition-all ease-in-out duration-300'
                >
                  SEE MY PROJECTS
                </p>
                <Image className='hidden md:inline' src="/icons/cta-arrow.svg" width={75} height={75} alt='diagonal-arrow'/>
              </Link>
            </div> 
            <div className="text-5xl xl:text-8xl md:mb-12 mt-10">
              <p className='text-sm sm:text-xl'>
                I am driven by a deep passion for <strong>full stack development</strong>, specifically where technical <strong>web architecture</strong>  meets <strong>intuitive UI/UX design</strong>. 
                While my professional background is rooted in <strong>IT</strong>, my enthusiasm expands to <strong>cloud services</strong> and the infrastructure that powers modern software. 
                I love the process of building web applications from the ground up, ensuring they are not only robust and scalable but also provide a seamless, 
                engaging experience for the user.
              </p>
              <p className='text-sm sm:text-xl pt-6'>
                One of my favorite parts of being a student at UCF is getting to compete alongside 
                my <Link href="https://club.knighthacks.org/" className="text-primary-500 underline">Knight Hacks</Link> community. <strong>Hackathons</strong> have
                become a core part of my journey as a developer. There&apos;s something special about being surrounded by people who 
                share the same drive to build, learn, and create under pressure. Each hackathon I&apos;ve attended has pushed me to grow not 
                only as a <strong>programmer</strong>, but as a <strong>teammate</strong> and <strong>problem-solver</strong>. Whether we&apos;re celebrating a successful demo or laughing over 
                the last-minute bugs, the experiences always reminds me why I fell in love with tech.
              </p>
            </div>
        </div>
    </div>
  )
}

export default CommunitySection