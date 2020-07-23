import React from 'react';
import { FaGithub, FaGlobeAfrica } from 'react-icons/fa';

const Project = ({ title, description, sourceLink, webLink }) => {
  return (
    <div className='card col-lg-4 my-3 px-0'>
      <div className='card-body'>
        <h5 className='card-title font-weight-bold'>{title}</h5>
        {/* <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6> */}
        <p className='card-text'>{description}</p>
      </div>
      <div className='card-footer'>
        <a
          href={sourceLink}
          className='card-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='project-icon'></FaGithub>
        </a>
        <a
          href={webLink}
          className='card-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGlobeAfrica className='project-icon'></FaGlobeAfrica>
        </a>
      </div>
    </div>
  );
};

export default Project;
