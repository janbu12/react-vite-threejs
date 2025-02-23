// src/components/FaceModel.tsx
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FaceModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/model/stylized_face.glb", true);

  const [position, setPosition] = useState([0, -0.9, 0]);

  useEffect(() => {
    if (!modelRef.current) return;

    const updatePosition = () => {
        const isMobile = window.innerWidth < 768;
        setPosition(isMobile ? [1, -0.95, 0] : [0, -0.95, 0]);
    };

    updatePosition();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(modelRef.current.position, { x: -1.5, ease: "linear" }) // Geser ke kiri
      .to(modelRef.current.rotation, { y: Math.PI / 2, ease: "power2.inOut" }, "<")
      // .to(modelRef.current.position, { x: 1.5, ease: "linear" }) // Geser ke kanan
      // .to(modelRef.current.rotation, { y: -Math.PI / 2, ease: "power2.inOut" }, "<");

      window.addEventListener("resize", updatePosition);

      // Bersihkan event listener saat komponen unmount
      return () => {
        window.removeEventListener("resize", updatePosition);
      };
  }, []);

  return <primitive ref={modelRef} object={scene} scale={0.3} position={position} />;
}

useGLTF.preload("/model/stylized_face.glb");
