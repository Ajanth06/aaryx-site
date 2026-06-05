"use client";

import { useEffect } from "react";

export function HorizontalScrollLock() {
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const resetHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      startX = touch.clientX;
      startY = touch.clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      const deltaX = Math.abs(touch.clientX - startX);
      const deltaY = Math.abs(touch.clientY - startY);

      if (deltaX > deltaY) {
        event.preventDefault();
        resetHorizontalScroll();
      }
    };

    resetHorizontalScroll();

    window.addEventListener("scroll", resetHorizontalScroll, { passive: true });
    window.addEventListener("resize", resetHorizontalScroll, { passive: true });
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("scroll", resetHorizontalScroll);
      window.removeEventListener("resize", resetHorizontalScroll);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
