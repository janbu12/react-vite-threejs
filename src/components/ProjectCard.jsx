import { motion } from "framer-motion";

function ProjectCard({project, index, currentIndex}) {
  const isActive = index === currentIndex;
  
  return (
    <div className="flex flex-col h-full max-w-max items-center bg-[rgba(255,255,255,0.03)] px-4 py-3 rounded group"
    >
        <h2 className="font-semibold text-xl text-start w-full">{project.title}</h2>
        {/* Gambar Project */}
        <div className="relative w-64 sm:w-80 mt-2">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded transition-all duration-300" />
          
          {isActive && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-white flex flex-col items-center justify-center text-justify opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <p className="text-sm px-4">{project.description}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
            <h2 className="mt-4 font-semibold">Technology Used</h2>
            <p className="text-sm text-white sm:text-gray-400">{project.stack}</p>
        </div>
        <div className="flex gap-4 mt-4">
        <a
          href={`${index === currentIndex ? project.link : ""}`}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-all"
        >
          Visit Site
        </a>
        <a
          href={project.github}
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition-all"
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default ProjectCard