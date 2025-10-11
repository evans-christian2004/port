'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { LetterDisplay } from './LetterDisplay';


gsap.registerPlugin(ScrollTrigger);

const lines = [
  'Hi, ',
  "I'm ",
  'Christian',
  'web development UI/UX IT',
];

function getRandomRotation(){
    // 
    return Math.random() * 60 - 30;
}
function animateLettersOnScroll(ref: React.RefObject<HTMLDivElement>){
    const nodes = ref.current?.querySelectorAll<HTMLElement>('.letter') || [];
    nodes.forEach(letter => {
      console.log()
        const speed = parseFloat(letter.dataset.speed || '1');
        gsap.to(letter, {
            y: (1 - speed) * ScrollTrigger.maxScroll(window),
            rotation: getRandomRotation(),
            ease: 'power2.out',
            duration: 0.8,
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.5,
                invalidateOnRefresh: true
            }
        });
    });
}


export function LetterCollision() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!ref.current) return;

      animateLettersOnScroll(ref as React.RefObject<HTMLDivElement>);
      ScrollTrigger.refresh(); // refresh once instead of in an event listener

      return () => {
        ScrollTrigger.killAll(); // cleanup on unmount
      };
    }, []);
    return (
      <div ref={ref} className="ml-24 scroll-smooth">
        {/* layout for two lines + sub-sentence */}
        <div className="-mt-24 mb-36 flex h-screen flex-col justify-end lg:mb-24">
          <div className="flex letter text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] ">
            <LetterDisplay word={lines[0]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[1]} />
          </div>
          <div className="flex flex-wrap text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] text-primay-500 text-primary-500">
            <LetterDisplay word={lines[2]} />
            <div className="w-4 sm:w-10" />
            
          </div>
        </div>
        <div className="flex flex-wrap text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px]">
          <LetterDisplay word={lines[3]} />
        </div>
        
      </div>
    )
}