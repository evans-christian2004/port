"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollHeader() {
  const { scrollYProgress } = useScroll();

  // Map the scroll progress (0 → 1) to horizontal movement (0px → -300px)
  const x = useTransform(scrollYProgress, [0, 2], ["0%", "-50%"]);

  return (
    <div className="relative bg-primary-500 text-background flex items-center justify-center overflow-hidden select-none">
      <motion.h1
        style={{ x }}
        className="text-6xl font-bold whitespace-nowrap"
      >
        {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-block">
                I MAKE THINGS
                <div className="rounded-full h-8 w-8 bg-background inline-block my-1.5 mx-5"/> 
            </span>
        ))}
      </motion.h1>
    </div>
  );
}
