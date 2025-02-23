import AnimatedText from './AnimatedText'
import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
        {
            title: 'Vouki App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dawdawdawd ada wdaw daw aw dawd awd ad awda ',
            image: '/Vouki Desktop.png',
            link: 'https://vouki-app.tscreativestudio.com/'
        },
        {
            title: 'NMBT App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/NMBT Tablet Mockup.png',
            link: 'https://nmbt.tscreativestudio.com/'
        },
        {
            title: 'Living Sphere App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/Living Sphere Desktop Mockup.png',
            link: 'https://livingsphereapp.tscreativestudio.com/'
        },
    ]
    return (
        <section className="section">
            <AnimatedText className='bg-[rgba(0,0,0,0.5)] backdrop-opacity-45 w-md'>
                <h2 className="font-semibold text-3xl md:text-5xl">My Projects</h2>
                <div className='flex gap-3 overflow-y-auto mt-4'>
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />
                    })}
                </div>
            </AnimatedText>
        </section>
    )
}

export default Projects