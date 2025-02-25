// src/components/Projects.jsx
import React from 'react';
import AnimatedText from './AnimatedText';
import ProjectCarousel from './ProjectCarousel';
import Carousel from './Carousel';

function Projects() {
  const projects = [
    {
      title: 'Vouki App',
      stack:'Laravel - Mysql - Tailwind CSS - Bladewind UI',
      image: '/Vouki.png',
      link: 'https://vouki-app.tscreativestudio.com/',
      github: 'https://github.com/janbu12/VouKi',
      description: "VouKi (Volunteer Connect) is a Laravel-based web application that aims to connect volunteers with various social events. In a team of 7 people, I contributed in frontend and backend development, with the main focus on the event recommendation search feature as well as the nearest event search based on the user's location."
    },
    {
      title: 'NMBT App',
      stack: 'Laravel - Mysql - Tailwind CSS',
      image: '/NMBTTabletMockup.png',
      link: 'https://nmbt.tscreativestudio.com/',
      github: 'https://github.com/janbu12/nmbt-app',
      description: "NMBT (Nordic Mountain Bound Travelers) is a web-based platform that facilitates borrowing camping equipment, developed using Laravel, MySQL, and Tailwind CSS. In a team of 4 people, I act as a frontend and backend developer while leading the team in feature planning and development. My main focus is to ensure the system runs optimally, from a responsive user interface to an efficient backend in managing loan data."
    },
    {
      title: 'Living Sphere App',
      stack: 'React - Laravel API - Tailwind CSS',
      image: '/LivingSphereDesktopMockup.png',
      link: 'https://livingsphereapp.tscreativestudio.com/',
      github: 'https://github.com/janbu12/living-sphere-app',
      description: "Living Sphere is a web-based platform that recommends properties according to user preferences, developed with React, Google Maps API, and Laravel for backend and data scrapping. In a team of 4 people, I contribute to the backend development, ensuring efficient data management and recommendation logic, as well as supporting the frontend in API integration and display optimization."
    },
  ];

  return (
    <section className="section">
      <div className="w-full sm:max-w-svh absolute right-0">
        <h2 className="font-semibold px-3 text-end md:text-start md:px-0 text-3xl md:text-5xl">My Projects</h2>
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}

export default Projects;