import React, { useEffect, useMemo, useState } from 'react';
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';

function ProjectCarousel({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 400) {
                setItemsPerView(2); // Desktop: 3 kartu
            } else {
                setItemsPerView(1); // Mobile: 1 kartu
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

  const extendedProjects = useMemo(() => [
    projects[projects.length - 1],
    ...projects,
    projects[0]
  ], [projects]);
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedProjects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentIndex === extendedProjects.length - 1) {
        setCurrentIndex(1);
    }
    if (currentIndex === 0) {
        setCurrentIndex(extendedProjects.length - 2);
    }
  }, [currentIndex, extendedProjects]);


  return (
    <div className="relative w-full right-0 lg:max-w-3xl overflow-hidden bg-[rgba(0,0,0,0.3)] px-8 py-5 mt-5 rounded-lg">
      {/* Wrapper untuk animasi geser */}
      <motion.div
        className="flex gap-5"
        animate={{ x: `-${(currentIndex) * (100 / itemsPerView)}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {extendedProjects.map((project, index) => (
          <div key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-full rounded-lg cursor-pointer transition-all duration-300
                ${currentIndex === index
                    ? "opacity-100 shadow-[0px_0px_15px_2px_rgba(46,37,146,0.3)]" 
                    : "opacity-50 blur-[3px] scale-80 hover:scale-90"
                }`
            }
          > 
            <ProjectCard project={project} index={index} currentIndex={currentIndex} />
          </div>
        ))}
      </motion.div>

      {/* Tombol Navigasi */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-slate-900 hover:cursor-pointer"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left-fill size-6" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </button>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-slate-900 hover:cursor-pointer"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left-fill size-6 rotate-180" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </button>
    </div>
  );
}

export default ProjectCarousel;
