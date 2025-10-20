"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

const images = [
  "/images/heroImgs/shell25group.jpg",
  "/images/heroImgs/gemiknights25group.jpg",
  "/images/heroImgs/startupgroup.jpg",
];

export default function ImageCarousel() {
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
    <div className="embla relative max-w-4xl min-w-xl">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex w-40 items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-[500px] h-[350px] rounded-4xl"
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

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex
                ? "bg-primary-500"
                : "bg-white hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
