"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const TopNav = () => {
  const pathname = usePathname();

  
  return (
    <nav className='p-4 top-0 sticky flex items-center z-50 justify-around'>
      <Link href="/">
        <Image
          className='logo-shake transition-all ease-in-out'
          src="/Logo.svg"
          width={50}
          height={50}
          alt='logo'
        />
      </Link>
      <div className="flex gap-5 bg-secondary-500 px-10 py-4 rounded-full items-center">
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
    </nav>
  )
}

export default TopNav