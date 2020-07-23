import React from 'react';
import Project from './project';
import projects from '../data/projects';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  return (
    <div className='container'>
      <h3>Projects</h3>
      <div className='card-deck'>
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            sourceLink={project.sourceLink}
            webLink={project.webLink}
          ></Project>
        ))}
      </div>
      <div className='d-flex justify-content-end more-projects-link'>
        <a
          href='https://github.com/ThomYorke7?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
          className='d-flex align-items-center more-projects-link'
        >
          See more projects{' '}
          <FiArrowRight id='more-projects-icon' className='ml-1'></FiArrowRight>
        </a>
      </div>
    </div>
  );
};

export default Projects;
