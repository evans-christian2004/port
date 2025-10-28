import React from 'react'
import ImageCarousel from './ImageCarousel'
import Link from 'next/link'
import Image from 'next/image'

const CommunitySection = () => {
  
  const images: string[] = [
    "/images/heroImgs/shell25group.jpg",
    "/images/heroImgs/gemiknights25group.jpg",
    "/images/heroImgs/startupgroup.jpg",
  ];
  return (
    <div className='container mx-auto px-6 py-12 lg:px-12 lg:py-24 min-h-screen flex flex-col'>
      <h1 className='text-5xl xl:text-8xl font-semibold'>What Does He Do?</h1>
        <div className="mx-auto flex lg:flex-row flex-col-reverse items-center md:gap-12 justify-between">
            <div className="flex flex-col gap-5">
              <ImageCarousel 
                images={images} 
              />
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
            <div className="mr-auto text-5xl xl:text-8xl md:mb-12 mt-10">
                <p className='text-sm sm:text-xl'>
                  One of my favorite parts of being a student at UCF is getting to compete alongside 
                  my <Link href="https://club.knighthacks.org/" className="text-primary-500 underline">Knight Hacks</Link> brethren. 
                  Hackathons have become a core part of my journey as a developer. There’s something special about being surrounded by people who 
                  share the same drive to build, learn, and create under pressure. Each hackathon I’ve attended has pushed me to grow not 
                  only as a programmer, but as a teammate and problem-solver. Whether we’re celebrating a successful demo or laughing over 
                  the inevitable last-minute bugs, the experiences always reminds me why I fell in love with tech in the first place.
                </p>
                <p className='text-sm sm:text-xl pt-6'>
                  My driving motivations are the people around me, and the sense of community I have 
                  the pleasure of fostering in the tech community. Whether it’s the late nights spent implementing a 
                  feature for a hackathon with my team, the workshops where I grow my skills as a Knight Hacks Kickstart Mentee, 
                  or just the time spent socializing with other developers on campus—community is a big part of what makes me succeed.
                </p>
            </div>
        </div>
    </div>
  )
}

export default CommunitySection