import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-primary sticky-top'
      id='navbar'
    >
      <button className='btn' onClick={scrollToTop}>
        <RiCodeSSlashLine id='code-icon'></RiCodeSSlashLine>
      </button>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor01'>
        <div className='navbar-nav ml-auto'>
          <Link class='nav-item nav-link' to='projects-section' offset={-70}>
            Projects
          </Link>
          <Link class='nav-item nav-link' to='about-section' offset={-70}>
            About
          </Link>
          <Link class='nav-item nav-link' to='contact-section'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
