import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container py-5'>
        <div className='row justify-content-between align-items-baseline'>
          <div className='copyright'>
            © All rights are reserved | 2020 | Powered by{' '}
            <a
              href='https://it.reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </a>{' '}
            ,{' '}
            <a
              href='https://getbootstrap.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bootstrap
            </a>{' '}
            and{' '}
            <a
              href='https://www.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Netlify
            </a>
            | Made with{' '}
            <span role='img' aria-label='heart'>
              💖
            </span>
          </div>
          <div className='social-icons'>
            <a
              href='https://www.linkedin.com/in/fabio-carrella'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-2'
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href='https://github.com/ThomYorke7'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-2'
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href='https://twitter.com/fabiocarrella'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
