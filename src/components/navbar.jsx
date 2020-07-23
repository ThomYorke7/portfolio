import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary' id='navbar'>
      <a className='navbar-brand' href='#'>
        <RiCodeSSlashLine id='code-icon'></RiCodeSSlashLine>
      </a>
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
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
