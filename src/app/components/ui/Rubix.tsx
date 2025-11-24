"use client"
import React, { useState } from 'react'

const COLORS = ['white', 'yellow', 'red', 'green', 'blue', 'orange']

const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]
const createSolvedFace = () => Array(9).fill(randomColor())

const Rubix = () => {
  const [tiles, setTiles] = useState<string[]>(() => createSolvedFace())

  const scrambleTileSet = () => {
    const shouldSolve = Math.floor(Math.random() * 6) === 0
    if (shouldSolve) {
      setTiles(createSolvedFace())
      return
    }

    const scrambled = Array.from({ length: 9 }, () => {
      const randomIndex = Math.floor(Math.random() * COLORS.length)
      return COLORS[randomIndex]
    })
    setTiles(scrambled)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={scrambleTileSet}
        className="rounded-2xl bg-zinc-900 p-2 shadow-[0_15px_30px_rgba(0,0,0,0.45)] transition hover:-translate-y-1"
      >
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-black/80 p-1">
          {tiles.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="h-10 w-10 rounded-md border border-black/30 shadow-inner"
              style={{ background: color }}
            />
          ))}
        </div>
      </button>
    </div>
  )
}

export default Rubix
