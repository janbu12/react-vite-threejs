// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FaceModel from "./components/FaceModel";
import AnimatedText from "./components/AnimatedText";
import { useEffect, useRef, useState } from "react";
import useCustomScroll from "./hook/useCustomScroll";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Particles from "./components/Particles";
import GridMotion from "./components/GridMotion";
import SplashCursor from "./components/SplashCursor";
import Dock from "./components/Dock";
import { VscAccount, VscArchive, VscHome, VscSettingsGear } from "react-icons/vsc";
import BlurText from "./components/BlurText";
import RotatingText from "./components/RotatingText";
import Header from "./components/Header";
import SkillStack from "./components/SkillStack";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const sections = [
    { title: "Hello I'm Mizan", content: "Lorem ipsum dolor sit amet...", className: "", id:"home"},
    // { title: "Projects", content: "Some amazing projects...", className: "items-end"},
    // { title: "Contact", content: "Contact me at...", className: ""},
  ];

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => document.getElementById("home").scrollIntoView({ behavior: "smooth" })},
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => document.getElementById("projects").scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  useCustomScroll();

  return (
    <div>
      <div className="fixed w-full bottom-2 z-50">
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <div className="hidden md:block">
        <SplashCursor />
      </div>
      { isLoading && <Loading isLoading={isLoading} />}
      <div className="w-full fixed h-screen bg-[radial-gradient(ellipse_at_bottom,rgba(45,45,45,1)_10%,rgba(13,13,13,1)_70%)]">
        <div className="w-full fixed h-screen">
          <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
          />
        </div>
        <div className="w-full fixed h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width:'100vw', zIndex:30 }} gl={{ antialias: true }}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[2, -3, 2]} intensity={3}/>
            <directionalLight position={[-4, 0, -1]} intensity={5} color={'#A91D3A'}/>

            <FaceModel />

            <Environment preset="night" environmentIntensity={1.3} />
          </Canvas>
        </div>
      </div>
        

      <div className="flex flex-col gap-3">
      <Header/>
      <SkillStack/>
      <Projects/>
      </div>
    </div>
  );
}
