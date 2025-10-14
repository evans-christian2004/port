import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-primary-500 text-background h-40">
        <div className='flex justify-around items-center pt-6 pb-12'>
            <div className="flex gap-1">
                <Link className='bg-primary-400 rounded-full p-2' href="https://github.com/evans-christian2004"><Image className='svg-hover' src="/github-dark.svg" width={35} height={35} alt='github'/></Link>
                <Link className='bg-primary-400 rounded-full p-2' href="https://www.linkedin.com/in/evanschristian/"><Image src="/linkedin-dark.svg" width={35} height={35} alt='github'/></Link>
                <Link className='bg-primary-400 rounded-full p-2' href="/CSResume.pdf"><Image src="/resume-dark.svg" width={35} height={35} alt='github'/></Link>
            </div>
            <div className="">
                Made with <Image className='inline' src="/heart.svg" width={32} height={32} alt="love"/> by Chris
            </div>
        </div>
        <p className='text-xs text-background w-fit mx-auto'>&#169; Christian Evans. all rights reserved</p>
    </div>
    
  )
}

export default Footer