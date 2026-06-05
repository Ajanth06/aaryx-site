"use client";

import { useEffect } from "react";

export function HorizontalScrollLock() {
  useEffect(() => {
    const resetHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    const scheduleReset = () => {
      window.requestAnimationFrame(resetHorizontalScroll);
    };

    resetHorizontalScroll();

    window.addEventListener("scroll", scheduleReset, { passive: true });
    window.addEventListener("resize", scheduleReset, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleReset);
      window.removeEventListener("resize", scheduleReset);
    };
  }, []);

  return null;
}
