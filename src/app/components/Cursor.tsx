"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX - 18,
      y: e.clientY - 18,
      duration: 0.15,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const el = cursor.current;

    // 🟡 Move cursor
    window.addEventListener("mousemove", moveCursor);

    // 🟢 Scale up when hovering any interactive element
    const interactiveSelectors = "Link, a, button, input, select, [role='button']";

    const handleMouseEnter = () => {
      gsap.to(el, {
        scale: 2,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Attach hover listeners to all interactive elements
    const interactives = document.querySelectorAll(interactiveSelectors);
    interactives.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // 🧹 Cleanup listeners on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="w-8 h-8 hidden md:block fixed z-50 rounded-full pointer-events-none bg-white mix-blend-difference "
    />
  );
};

export default Cursor;
