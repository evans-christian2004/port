"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'

const colors = ['#ED33B9', '#F6AF65', '#F9E900', '#00C2D1', '#0A1045', '#7D53DE']

const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
const createSolvedFace = () => Array(9).fill(randomColor())

const Rubix = () => {
  const [tiles, setTiles] = useState<string[]>(() => createSolvedFace())

  const scrambleTileSet = () => {
    const shouldSolve = Math.floor(Math.random() * 9) === 0
    if (shouldSolve) {
      setTiles(createSolvedFace())
      return
    }

    const scrambled = Array.from({ length: 9 }, () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      return colors[randomIndex]
    })
    setTiles(scrambled)
  }

  return (
    <div className="flex flex-col items-center gap-1 p-4">
      <h2 className='text-3xl font-semibold text-center'>I love this cube</h2>
      <motion.button
        type="button"
        onClick={scrambleTileSet}
        whileTap={{ y: 4 }}
        transition={{ duration: 0.08, ease: 'easeOut' }}
        className="rounded-2x p-1 transition hover:-translate-y-1"
      >
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-gray-200 p-1">
          {tiles.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="h-10 w-10 rounded-md border-4 border-black/30 shadow-inner"
              style={{ background: color }}
            />
          ))}
        </div>
      </motion.button>
    </div>
  )
}

export default Rubix