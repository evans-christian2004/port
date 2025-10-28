import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type SideNavProps = {
  isOpen: boolean;
}

const SideNav = ({ isOpen }: SideNavProps) => {
    const pathname = usePathname();

  return (
    <div className={`z-10 fixed top-0 px-25 pt-25 h-screen bg-primary-400 transition-all ease-in-out duration-300 ${isOpen ? "right-0" : "-right-[150%]"}`}>
        <div className="flex gap-3 mb-2">
              <Link className='bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-3' href="https://github.com/evans-christian2004"><Image className='' src="/icons/github-dark.svg" width={35} height={35} alt='github'/></Link>
              <Link className='bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-3' href="https://www.linkedin.com/in/evanschristian/"><Image src="/icons/linkedin-dark.svg" width={35} height={35} alt='github'/></Link>
              <Link className='bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-3' href="/CSResume.pdf"><Image src="/icons/resume-dark.svg" width={35} height={35} alt='github'/></Link>
        </div>
        <nav className='p-4 flex gap-5 flex-col justify-between items-center'>
            <Link 
          href="/experience"className={`text-2xl hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 ${pathname == "/experience" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
          Experience
        </Link>
        <Link href="/projects" className={`text-2xl hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 
          ${pathname == "/projects" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
          Projects
        </Link>
        {/* <Link href="/blog" className={`text-2xl hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 
          ${pathname == "/blog" ? "bg-foreground text-background hover:px-3 px-2" : ""}`}
        >
            Blog
        </Link> */}
        </nav>
    </div>
  )
}

export default SideNav