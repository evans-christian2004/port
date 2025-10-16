"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'

const TopNav = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
      setOpen(false)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    console.log(screenWidth)

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);


  return (
    <nav className='z-20 p-4 top-0 sticky flex justify-between items-center container mx-auto'>
      <Link href="/">
        <Image
          className='logo-shake transition-all ease-in-out'
          src="/icons/Logo.svg"
          width={50}
          height={50}
          alt='logo'
        />
      </Link>
      {/*nav links*/}
      
      <div className="z-20 bg-secondary-500 px-10 py-4 rounded-full transition-all ease-in-out">
        {!scrolled && screenWidth > 600 ? (
          <div className="flex gap-5 items-center">
            <div className="flex gap-2">
              <Link className='bg-primary-500 hover:bg-primary-400 transition-all ease-in-out duration-300 rounded-full p-2' href="https://github.com/evans-christian2004"><Image className='' src="/icons/github-dark.svg" width={25} height={25} alt='github'/></Link>
              <Link className='bg-primary-500 hover:bg-primary-400 transition-all ease-in-out duration-300 rounded-full p-2' href="https://www.linkedin.com/in/evanschristian/"><Image src="/icons/linkedin-dark.svg" width={25} height={25} alt='github'/></Link>
              <Link className='bg-primary-500 hover:bg-primary-400 transition-all ease-in-out duration-300 rounded-full p-2' href="/CSResume.pdf"><Image src="/icons/resume-dark.svg" width={25} height={35} alt='github'/></Link>
        </div>
        <Link 
          href="/experience"className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 ${pathname == "/experience" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
          Experience
        </Link>
        <Link href="/projects" className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 
          ${pathname == "/projects" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
          Projects
        </Link>
        <Link href="/blog" className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 
          ${pathname == "/blog" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
            Blog
        </Link>
          </div>
          
        ) : (
          <div className="h-8">
            <button onClick={() => {
              setOpen(!open);
            }} className='absolute top-8 right-10 z-20 p-0 m-0 hover:cursor-pointer'>
              <Image src={`/icons/${open ? "x.svg" : "menu.svg"}`} height={37} width={37} alt='menu icon'/>
            </button>
              <div className={`${open ? "right-0" : "-right-20"}`}>
                <SideNav isOpen={open}/>
              </div>
          </div>
          
          
        )}
        
      </div>  
    </nav>
  )
}

export default TopNav