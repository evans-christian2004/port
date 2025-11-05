"use client";

import { frame, motion, useSpring } from "motion/react";
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
    const selector = "a, button, [role='button']";

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (target?.closest(selector)) scale.set(2);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest(selector)) return;

      const next = event.relatedTarget as Element | null;
      if (!next?.closest(selector)) scale.set(1);
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [scale]);


  return (
    <motion.div
      ref={ref}
      className="fixed hidden lg:block mix-blend-exclusion z-50 pointer-events-none"
      style={{
        ...ball,
        x,
        y,
        scale,
      }}
    />
  );
}

