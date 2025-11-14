import React from 'react'
import ImageCarousel from '../ui/ImageCarousel'

const MoreSection = () => {
  return (
    <div className='container mx-auto min-h-screen'>
        <div className="">
            <div className="">
                <h2 className='font-semibold'>Lorem Ipsum dolor sit</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias officia magnam ipsa beatae illo aspernatur 
                    saepe ullam odio quas quae accusantium minima maxime, delectus nemo reiciendis adipisci autem id iste laboriosam 
                    excepturi eveniet porro incidunt debitis! Neque, iste? Dolores, harum.
                </p>                
            </div>
            <iframe 
                className='w-full'
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2020064537&color=%2334a06c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            <ImageCarousel images={[]}/>
        </div>
        
    </div>
  )
}

export default MoreSection