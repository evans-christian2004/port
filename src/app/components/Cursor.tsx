"use client";

import { frame, motion, useSpring, useMotionValue } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

//additional cursor styles
const ball = {
  width: 30,
  height: 30,
  backgroundColor: "white",
  borderRadius: "50%",
};

const spring = { damping: 15, stiffness: 200, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      frame.read(() => {
        x.set(clientX - element.offsetWidth / 2);
        y.set(clientY - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y, ref]);

  return { x, y };
}

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  const scale = useSpring(1, { damping: 15, stiffness: 200, restDelta: 0.001 });

  useEffect(() => {
    const links = document.querySelectorAll("a, button, [role='button']");
    
    const handleEnter = () => scale.set(2);   // expand cursor
    const handleLeave = () => scale.set(1);   // shrink back

    links.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [scale]);

  return (
    <motion.div
      ref={ref}
      className="fixed hidden md:block mix-blend-exclusion z-50 pointer-events-none"
      style={{
        ...ball,
        x,
        y,
        scale,
      }}
    />
  );
}

