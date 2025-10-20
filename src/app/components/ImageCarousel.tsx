"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";

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
    <div className="embla relative max-w-4xl">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] flex items-center justify-center bg-gray-200"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
      >
        →
      </button>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex
                ? "bg-primary-500 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
