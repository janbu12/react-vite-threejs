// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FaceModel from "./components/FaceModel";
import AnimatedText from "./components/AnimatedText";
import { useEffect, useRef, useState } from "react";
import useCustomScroll from "./hook/useCustomScroll";
import Loading from "./components/Loading";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const sections = [
    { title: "About Me", content: "Lorem ipsum dolor sit amet...", className: "" },
    { title: "Projects", content: "Some amazing projects...", className: "items-end"},
    { title: "Contact", content: "Contact me at...", className: ""},
  ];

  useCustomScroll();

  return (
    <div>
      { isLoading && <Loading isLoading={isLoading} />}
      <div className="w-full fixed h-screen bg-[radial-gradient(ellipse_at_bottom,rgba(45,45,45,1)_10%,rgba(13,13,13,1)_70%)]">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width:'100vw' }} gl={{ antialias: true }}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[2, -3, 2]} intensity={3}/>
          <directionalLight position={[-4, 0, -1]} intensity={5} color={'#A91D3A'}/>

          <FaceModel />

          <Environment preset="night" environmentIntensity={1.3} />
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
