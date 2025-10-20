import React from 'react'
import ImageCarousel from './ImageCarousel'

const CommunitySection = () => {
  return (
    <div className='container mx-auto px-12 py-24 h-screen flex'>
        <div className="mx-auto flex lg:flex-row flex-col-reverse items-center gap-12 justify-between">
            <div className="mr-auto text-5xl xl:text-8xl mb-12 font-semibold">
                <h1>What does he do?</h1>
                <p className='text-sm sm:text-xl'></p>
            </div>
            <ImageCarousel/>
        </div>
    </div>
  )
}

export default CommunitySection