import React from 'react'
import { getTopTracks } from '@/lib/spotify'
import { SpotifyTopTrackResponse } from '@/lib/types'
import Image from 'next/image';

export default async function TopSongs() {
  const response = await getTopTracks();

  const { items }: SpotifyTopTrackResponse = await response.json();

  if (!items) {
    return <p>Error loading tracks. That&apos;s embarassing</p>
  }

  return (
    <div className="p-4">
      <h2 className='text-3xl font-semibold text-center'>What I&apos;m listening to</h2>
      <ul className="flex gap-5 items-center justify-center m-5 mt-0">
          {items.map((track, index) => (
            <li key={track.id} className="flex flex-col items-start w-1/3 rounded-2xl">
              <p className="text-center p-1 pt-0 text-lg font-bold">#{index + 1}</p>
              <Image 
                width={150}
                height={150}
                src={track.album.images[0].url}
                alt={track.name}
                className="w-full max-w-40 aspect-square rounded-md mx-auto"
              />
              <div className="w-40 max-w-full mx-auto">
                <p
                  className="sm:text-md text-sm"
                >
                  {track.name}
                </p>
                <p className="sm:text-sm text-xs text-gray-500">
                  {track.artists.map((artist) => artist.name).join(', ')}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
