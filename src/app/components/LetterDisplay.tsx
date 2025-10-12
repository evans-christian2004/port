import React from 'react'

function getRandomSpeed() {
    return 0.8 + Math.random() * 0.7;
}

export function LetterDisplay({ word }: {word: string}) {
  return (
    <>
        {word.split('').map((char, i) => (
            <div suppressHydrationWarning
                key={i}
                className="letter"
                data-speed={getRandomSpeed()}
            >
                {char}
            </div>
        ))}
    </>
  )
}
