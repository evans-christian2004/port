"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

type imageCarouselProps = {
    images: string[]
}

export default function ImageCarousel({images}: imageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
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
    <div className="embla relative aspect-3/2 mx-auto my-5">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden rounded-4xl" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex aspect-3/2 items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover aspect-3/2 rounded-4xl"
              />
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
    </div>
  );
};
