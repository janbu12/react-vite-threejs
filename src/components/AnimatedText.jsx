import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

// Pastikan GSAP mendukung ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function AnimatedText({ children, index, className = "" }) {
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const element = textRef.current;
    const direction = index % 2 === 0 ? "-100%" : "100%";

    // Konfigurasi ScrollTrigger untuk Lenis
    const animation = gsap.fromTo(
        element,
        { x: "0%" },
        {
          x: direction,
          duration: 1,
          ease: "power2.out",
        }
      );

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse",
      animation: animation,
    });

    return () => {
        scrollTrigger.kill();
        animation.kill();
      };
    
  }, [index, isMobile]);

  return (
    <div
      ref={textRef}
      className={`content  lg:bg-transparent px-4 py-2 ${className} rounded`}
    >
      {children}
    </div>
  );
}

export default AnimatedText;