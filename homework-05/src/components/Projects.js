/*
  Modified by: Alan Espana
  CS 247 - Front End Dev
  Homework 95 - Responsive Web Design
  Last updated: 6/7/2024
*/

import React from 'react';
import './Projects.css';
import KongImage from '../images/kong.jpg'; 
import BaconImage from '../images/bacon.jpg'; 

// Bacon image https://www.pexels.com/search/bacon/
// Kong toy image https://unsplash.com/s/photos/dog-toy

const projectData = [
  {
    title: 'Kong Chew Toy',
    image: KongImage,
  },
  {
    title: 'Bacon',
    image: BaconImage,
  },
  ...new Array(8).fill({ title: 'Add an Item', image: '' }),
];

function Projects() {
  return (
    <section className="projects">
      <h2>My current projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
            <h3 className='projectTitle'>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;