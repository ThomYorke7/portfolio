import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container py-5'>
        <div className='row justify-content-between align-items-baseline'>
          <div className='col-lg copyright p-3 p-lg-0 text-center text-lg-left'>
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
          <div className='col-lg-4 social-icons p-3 p-lg-0 d-flex justify-content-center justify-content-lg-end'>
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
