function ProjectCard({project, index, currentIndex}) {
  return (
    <div className="flex flex-col w-full max-w-max items-center bg-[rgba(255,255,255,0.03)] px-4 py-3 rounded"
      style={{
        boxShadow:`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`,
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
        <h2 className="font-semibold text-xl text-start w-full">{project.title}</h2>
        <div className="w-80 mt-2">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded"/>
        </div>
        <div className="flex flex-col w-full">
            <h2 className="mt-4 font-semibold">Technology Used</h2>
            <p className="text-sm text-gray-400">{project.description}</p>
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