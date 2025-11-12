'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { LetterDisplay } from '../LetterDisplay';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  'Hi! ',
  "I'm ",
  'Christian',
  'Web Dvelopment UI/UX IT',
];

const sub = [
  "A", 
  "Software", 
  "Engineer", 
  "and", 
  "Information", 
  "Technology", 
  "Professional",
]

const floatingShapes = [
  {
    className:
      'absolute -left-8 -top-8 w-16 h-16 rounded-3xl bg-primary-500 shadow-xl shadow-primary-500/30',
    speed: 1.2,
  },
  {
    className:
      'absolute right-6 top-16 w-20 h-20 rounded-full bg-primary-400 shadow-xl shadow-primary-400/30',
    speed: 0.9,
  },
  {
    className:
      'absolute left-1/2 -bottom-10 -translate-x-1/2 w-24 h-24 rounded-[40%] bg-secondary-500 shadow-2xl shadow-secondary-500/30',
    speed: 0.95,
  },
  {
    className:
      'absolute left-[5%] bottom-8 w-12 h-12 rounded-2xl bg-secondary-600 shadow-lg shadow-secondary-600/30',
    speed: 1.05,
  },
  {
    className:
      'absolute right-[15%] -bottom-16 w-28 h-10 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30',
    speed: 0.9,
  },
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
            y: (.895 - speed) * ScrollTrigger.maxScroll(window),
            rotation: getRandomRotation(),
            ease: 'power2.out',
            duration: 0.8,
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: .5,
                invalidateOnRefresh: true
            }
        });
    });
}


export function Hero() {
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
      <div ref={ref} className="relative ml-8 xs:ml-8 sm:ml-12 md:ml-18 xl:ml-24 scroll-smooth select-none">
        <div className="pointer-events-none absolute top-1/6 sm:top-1/8 right-0 -z-10">
          <Image
            src="/icons/flare/star1.svg"
            alt="decorative star flare"
            width={400}
            height={400}
            className="spin-slow"
            priority
          />
        </div>
        {/* layout for two lines + sub-sentence */}
        <div className="-mt-36 mb-24 flex h-screen flex-col justify-end lg:mb-24">
          <div className="flex text-7xl shadow-white  xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] ">
            <LetterDisplay word={lines[0]} />
            <div className="w-4 sm:w-8" />
            <LetterDisplay word={lines[1]} />
          </div>
          <div className="flex flex-wrap text-7xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] text-primay-500 text-primary-500">
            <LetterDisplay word={lines[2]} />
            <div className="w-4 sm:w-10" />
          </div>
          <div className="flex flex-wrap text-3xl xs:text-[16px] xs:leading-none mt-2 ml-4 md:text-[30px] lg:text-[35px] xl:text-[50px] text-primay-500">
            {sub.map((word, index) => (
              <div key={index} className="flex items-center">
                <LetterDisplay word={word} />
                {/* whitespace divider, except after last item */}
                {index < sub.length - 1 && <div className="w-2 sm:w-3" />}
              </div>
            ))}
          </div>
          <Image className='ml-[calc(35vw)] sm:ml-[calc(40vw)] flex animate-bounce letter mt-12' alt="down arrow" src="/icons/arrow.svg" width={50} height={50}/>
        </div>
        {/* I may keep this extra text section or I may not. removing it makes snapping sections easier but the extra letters are cool */}
        <div className="mb-25 flex flex-wrap text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px]">
        </div>
        <div className="mb-25 flex flex-wrap text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] relative pointer-events-none">
          {floatingShapes.map((shape, index) => (
            <div
              key={`floating-shape-${index}`}
              className={`${shape.className} letter`}
              data-speed={shape.speed}
              aria-hidden="true"
            />
          ))}
          <LetterDisplay word={lines[3]} />
        </div>
        
      </div>
    )
}
// ...existing code...
