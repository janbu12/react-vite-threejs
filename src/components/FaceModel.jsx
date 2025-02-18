// src/components/FaceModel.tsx
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FaceModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/model/stylized_face.glb", true);

  useEffect(() => {
    if (!modelRef.current) return;

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
      .to(modelRef.current.position, { x: 1.5, ease: "linear" }) // Geser ke kanan
      .to(modelRef.current.rotation, { y: -Math.PI / 2, ease: "power2.inOut" }, "<");
  }, []);

  return <primitive ref={modelRef} object={scene} scale={0.3} position={[0, -0.9, 0]} />;
}

useGLTF.preload("/model/stylized_face.glb");
