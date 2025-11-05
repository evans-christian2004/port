import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-primary-500 text-background md:h-36 h-60">
        <div className='flex md:flex-row flex-col gap-5 justify-around items-center pt-6 pb-6'>
            <div className="px-12">
              <Link href="/">
                <Image
                  className='logo-shake transition-all ease-in-out'
                  src="/icons/Logo-dark.svg"
                  width={50}
                  height={50}
                  alt='logo'
                />
              </Link>
            </div>
            <div className="">
                Made with <Image className='inline' src="/icons/heart.svg" width={32} height={32} alt="love"/> by Chris
            </div>
            <div className="flex gap-1">
                <Link className='bg-white hover:bg-primary-500 transition-all ease-in-out rounded-full p-2' href="https://github.com/evans-christian2004"><Image className='' src="/icons/github-dark.svg" width={35} height={35} alt='github'/></Link>
                <Link className='bg-white hover:bg-primary-500 transition-all ease-in-out rounded-full p-2' href="https://www.linkedin.com/in/evanschristian/"><Image src="/icons/linkedin-dark.svg" width={35} height={35} alt='github'/></Link>
                <Link className='bg-white hover:bg-primary-500 transition-all ease-in-out rounded-full p-2' href="/CSResume.pdf"><Image src="/icons/resume-dark.svg" width={35} height={35} alt='github'/></Link>
            </div>
            
        </div>
        <p className='text-xs text-background w-fit mx-auto'>&#169; Christian Evans. all rights reserved</p>
    </div>
    
  )
}

export default Footer