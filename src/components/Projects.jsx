// src/components/Projects.jsx
import React from 'react';
import AnimatedText from './AnimatedText';
import ProjectCarousel from './ProjectCarousel';

function Projects() {
  const projects = [
    {
      title: 'Vouki App',
      description:
        'Laravel - Mysql - Tailwind CSS - Bladewind UI',
      image: '/Vouki Desktop.png',
      link: 'https://vouki-app.tscreativestudio.com/',
      github: 'https://github.com/janbu12/VouKi'
    },
    {
      title: 'NMBT App',
      description: 'Laravel - Mysql - Tailwind CSS',
      image: '/NMBT Tablet Mockup.png',
      link: 'https://nmbt.tscreativestudio.com/',
      github: 'https://github.com/janbu12/nmbt-app'
    },
    {
      title: 'Living Sphere App',
      description: 'React - Laravel API - Tailwind CSS',
      image: '/Living Sphere Desktop Mockup.png',
      link: 'https://livingsphereapp.tscreativestudio.com/',
      github: 'https://github.com/janbu12/living-sphere-app'
    },
  ];

  return (
    <section className="section">
      <div className="max-w-svh absolute right-0">
        <h2 className="font-semibold text-3xl md:text-5xl">My Projects</h2>
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}

export default Projects;