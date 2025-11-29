import React from 'react'
import ImageCarousel from '../ui/ImageCarousel'
import Rubix from '../ui/Rubix'
import Image from 'next/image'
import TopSongs from '../ui/TopSongs'
import Controllers from '../ui/Controllers'

const MoreSection = () => {
    const fam = [
        "/images/landing/fam/1.jpg", 
        "/images/landing/fam/2.jpg",
        "/images/landing/fam/3.jpg",
        "/images/landing/fam/4.jpg",
        "/images/landing/fam/5.jpg"
    ]
    const manga = [
        {
            name: "Witch Hat Atalier",
            image: "/images/landing/manga/1.jpg"
        },
        {
            name: "Otr of the Flame",
            image: "/images/landing/manga/2.jpg"
        },
        {
            name: "Frieren",
            image: "/images/landing/manga/3.jpg"
        },
    ]
  return (
    <div className='container mx-auto px-5 xl:px-0 min-h-screen flex pt-25 pb-15 flex-col gap-5'>
        <h1 className='text-5xl xl:text-8xl font-semibold pb-5'>More About Me!</h1>
        <div className="lg:grid grid-cols-5 grid-rows-6 flex flex-col gap-5 h-full w-full">
            <div className="h-full w-full bg-black/35 rounded-4xl lg:col-span-2 lg:row-span-3 flex flex-col items-center justify-center p-5">
                <h2 className='text-4xl font-semibold'>My people</h2>
                <p>Who I do everything for.</p>
                <div className="w-full">
                    <ImageCarousel images={fam}/>
                </div>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-3 row-span-2 p-5 pb-25">
                <h2 className='text-3xl font-semibold text-center'>I make music!</h2>
                <iframe 
                    className='w-full h-full pt-3 rounded-2xl'
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2020064537&color=%2334a06c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-3 row-span-2">
                <TopSongs/>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-2 row-span-1 flex flex-col items-center justify-center p-5">
                <h2 className='text-2xl font-bold text-center'>What I&apos;m working on:</h2>
                <p className='text-center'>Prepping for the Microsoft Azure Fundamentals Certification</p>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl row-span-2 col-span-2">
                <Controllers/>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-2 row-span-2 flex flex-col gap-3 sm:px-6 px-3 py-4">
                <h2 className='text-3xl font-semibold text-center'>Manga I&apos;m reading:</h2>
                <div className="flex grow items-start justify-evenly sm:gap-4 sm gap-1">
                {
                    manga.map((m) => (
                        <div className="flex flex-col items-center text-center gap-3" key={m.name}>
                            <div className="relative sm:h-36 sm:w-24 h-24 w-18 overflow-hidden rounded-xl">
                                <Image 
                                    src={m.image} 
                                    alt={m.name} 
                                    fill
                                    sizes="96px"
                                    className='object-cover'
                                    priority={false}
                                />
                            </div>
                            <p className='sm:text-xl font-medium w-25'>{m.name}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl row-span-2">
                <Rubix/>
            </div>
        </div>
        
    </div>
  )
}

export default MoreSection
