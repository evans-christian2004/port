"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const markReady = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      const id = setTimeout(markReady, 150);
      return () => clearTimeout(id);
    }

    window.addEventListener("load", markReady);
    const fallbackId = setTimeout(markReady, 3000);

    return () => {
      window.removeEventListener("load", markReady);
      clearTimeout(fallbackId);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const hideDelay = setTimeout(() => setShouldRender(false), 400);
    return () => clearTimeout(hideDelay);
  }, [isLoaded]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-4 bg-background transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
    </div>
  );
}
