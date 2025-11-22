import React from 'react'
import ImageCarousel from '../ui/ImageCarousel'

const MoreSection = () => {
    const images = [
        "/images/landing/more/1.jpg", 
        "/images/landing/more/2.jpg",
        "/images/landing/more/3.jpg",
        "/images/landing/more/4.jpg",
        "/images/landing/more/5.jpg"
    ]
  return (
    <div className='container mx-auto min-h-screen flex items-center'>
        <div className="grid grid-cols-5 grid-rows-4 gap-5 h-full w-full">
            <div className="h-full w-full bg-black/65 rounded-4xl col-span-3 p-5">
                <iframe 
                    className='w-full'
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2020064537&color=%2334a06c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                </iframe>
            </div>
            <div className="h-full w-full bg-black/65 rounded-4xl col-span-2 row-span-3 flex flex-col items-center justify-center p-5">
                <h2 className='text-4xl font-semibold'>The Peeps&trade;</h2>
                <p>This is who I do everything for.</p>
                <div className="w-full">
                    <ImageCarousel images={images}/>
                </div>
                
            </div>
            <div className="h-full w-full bg-black/65 rounded-4xl col-span-3 row-span-2">
                <div className="flex gap-5 items-center justify-center m-5">
                    <div className="h-90 w-1/3 bg-gray-700/65 rounded-2xl">
                        
                    </div>
                    <div className="h-90 w-1/3 bg-gray-700/65 rounded-2xl"></div>
                    <div className="h-90 w-1/3 bg-gray-700/65 rounded-2xl"></div>
                </div>
            </div>
            <div className="h-full w-full bg-black/65 rounded-4xl col-span-2"></div>
            <div className="h-full w-full bg-black/65 rounded-4xl col-span-2"></div>
            <div className="h-full w-full bg-black/65 rounded-4xl"></div>
        </div>
        
    </div>
  )
}

export default MoreSection