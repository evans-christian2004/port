import React from 'react'
import ImageCarousel from './ImageCarousel'

const CommunitySection = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex justify-around items-center">
            <div className="">
                <h1>What does he do?</h1>
            </div>
            <ImageCarousel/>
        </div>
    </div>
  )
}

export default CommunitySection