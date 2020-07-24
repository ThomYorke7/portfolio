import React from 'react';
import { Link } from 'react-scroll';
import designerImg from '../imgs/designer.svg';

const Header = () => {
  return (
    <header className='header py-5 px-3' id='header-section'>
      <div className='container-xl'>
        <div className='row align-items-center justify-content-around'>
          <div className='text-center text-lg-left col-lg-6'>
            <h1 className='header-title'>Hi there!</h1>
            <h1 className='header-subtitle '>
              I'm Fabio and I'm a web developer.
            </h1>
            <Link to='contact-section' className='btn btn-primary text-light'>
              Hire me
            </Link>
          </div>
          <div className='col-lg-6 text-center'>
            <img src={designerImg} alt='designer' className='undraw-img'></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
