// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FaceModel from "./components/FaceModel";
import AnimatedText from "./components/AnimatedText";
import { useEffect, useRef } from "react";


export default function App() {
  const sections = [
    { title: "About Me", content: "Lorem ipsum dolor sit amet...", className: "" },
    { title: "Projects", content: "Some amazing projects...", className: "items-end"},
    { title: "Contact", content: "Contact me at...", className: ""},
  ];

  const startYRef = useRef(0);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const slowDownFactor = 8;
      const scrollAmount = event.deltaY / slowDownFactor;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'instant',
      });
    };

    const handleTouchStart = (event) => {
      startYRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      const currentY = event.touches[0].clientY;
      const deltaY = startYRef.current - currentY;
      const slowDownFactor = 3;
      const scrollAmount = deltaY / slowDownFactor;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'instant',
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

  return (
    <div>
      <div className="w-full fixed h-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width:'100vw' }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={3} />

          <FaceModel />

          <Environment preset="night" />
        </Canvas>
      </div>

      <div className="flex flex-col gap-3">
        {sections.map((section, index) => (
          <section key={index} className="section">
            <AnimatedText index={index} className={section.className}>
              <h2 className="font-semibold text-3xl md:text-7xl">{section.title}</h2>
              <p className="text-base md:text-2xl">{section.content}</p>
            </AnimatedText>
          </section>
        ))}
      </div>
    </div>
  );
}
