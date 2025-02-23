function ProjectCard({project}) {
  return (
    <div className="flex flex-col w-full max-w-max items-center">
        <h2 className="font-semibold text-xl text-start w-full">{project.title}</h2>
        <div className="w-80 mt-2">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded"/>
        </div>
        <div className="">
            <h2 className="mt-4 font-semibold">Technology Used</h2>
            <p className="text-wrap">{project.description}</p>
        </div>
        <div className="bg-blue-900 px-4 py-2 rounded mt-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
    </div>
  )
}

export default ProjectCard