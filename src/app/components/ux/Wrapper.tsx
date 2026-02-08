"use client"

import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

	useEffect(() => {
		const scroller = new Lenis();
    lenisRef.current = scroller;

		const raf = (time: number) => {
			scroller.raf(time)
			rafRef.current = requestAnimationFrame(raf)
		}
		rafRef.current = requestAnimationFrame(raf)

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current)
			}
			scroller.destroy()
			lenisRef.current = null;
			rafRef.current = null;
		}
	}, [])
  return (
    <>
		{children}
    </>
  )
}

export default Wrapper
