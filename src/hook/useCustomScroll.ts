// src/hooks/useCustomScroll.ts
import { useRef, useEffect } from "react";

export default function useCustomScroll() {
  const startYRef = useRef(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const slowDownFactor = 8;
      const scrollAmount = event.deltaY / slowDownFactor;
      window.scrollBy({
        top: scrollAmount,
        behavior: "instant",
      });
    };

    const handleTouchStart = (event: TouchEvent) => {
      startYRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const currentY = event.touches[0].clientY;
      const deltaY = startYRef.current - currentY;
      const slowDownFactor = 3;
      const scrollAmount = deltaY / slowDownFactor;
      window.scrollBy({
        top: scrollAmount,
        behavior: "instant",
      });
      startYRef.current = currentY;
    };

    // Tambahkan event listener
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
}