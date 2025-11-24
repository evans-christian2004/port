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
    <div className='container mx-auto min-h-screen flex py-15 flex-col gap-5'>
        <h1 className='text-5xl xl:text-8xl font-semibold'>A little more...</h1>
        <div className="grid grid-cols-5 grid-rows-3 gap-5 h-full w-full">
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-2 row-span-2 flex flex-col items-center justify-center p-5">
                <h2 className='text-4xl font-semibold'>The Peeps&trade;</h2>
                <p>This is who I do everything for.</p>
                <div className="w-full">
                    <ImageCarousel images={fam}/>
                </div>
                
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-3 p-5">
                <h2 className='text-3xl font-semibold text-center'>I make music!</h2>
                <iframe 
                    className='h-50 w-full pt-3 rounded-2xl'
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2020064537&color=%2334a06c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-3 row-span-1">
                <TopSongs/>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-2">
                <Controllers/>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl col-span-2 flex flex-col gap-3 px-6 py-4">
                <h2 className='text-3xl font-semibold text-center'>Manga I'm reading</h2>
                <div className="flex grow items-start justify-evenly gap-4">
                {
                    manga.map((m) => (
                        <div className="flex flex-col items-center text-center gap-3" key={m.name}>
                            <div className="relative h-36 w-24 overflow-hidden rounded-xl">
                                <Image 
                                    src={m.image} 
                                    alt={m.name} 
                                    fill
                                    sizes="96px"
                                    className='object-cover'
                                    priority={false}
                                />
                            </div>
                            <p className='text-xl font-medium w-25'>{m.name}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="h-full w-full bg-black/35 rounded-4xl">
                <Rubix/>
            </div>
        </div>
        
    </div>
  )
}

export default MoreSection
