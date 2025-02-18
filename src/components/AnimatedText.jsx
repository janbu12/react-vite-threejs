import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

// Pastikan GSAP mendukung ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function AnimatedText({ children, index, className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const element = textRef.current;
    const direction = index % 2 === 0 ? "-100%" : "100%";

    // Konfigurasi ScrollTrigger untuk Lenis
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse",
      animation: gsap.fromTo(
        element,
        { x: "0%" },
        {
          x: direction,
        }
      ),
    });
  }, [index]);

  return (
    <div
      ref={textRef}
      className={`content bg-[rgba(0,0,0,0.5)] lg:bg-transparent px-4 py-2 ${className} rounded`}
    >
      {children}
    </div>
  );
}

export default AnimatedText;