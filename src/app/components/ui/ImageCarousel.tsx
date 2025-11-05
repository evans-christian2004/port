"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

type imageCarouselProps = {
    images: string[]
}

export default function ImageCarousel({images}: imageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Scroll functions
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Update selected dot
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up Embla events
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(); // initial
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative mx-auto my-5">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden rounded-4xl" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex items-center justify-center"
            >
              <div className="relative w-full aspect-3/2 overflow-hidden rounded-4xl">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, (min-width: 768px) 75vw, 90vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
      >
        <Image src="/icons/arrow.svg" className="rotate-90" height={25} width={25} alt="right-arrow"/>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
      >
        <Image src="/icons/arrow.svg" className="-rotate-90" height={25} width={25} alt="right-arrow"/>
      </button>
            {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex
                ? "bg-primary-500"
                : "bg-gray-400 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
