import React from 'react';
import designerImg from '../imgs/designer.svg';

const Header = () => {
  return (
    <header className='header my-5'>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-lg-6'>
            <h1 className='header-title'>Hi there!</h1>
            <h1 className='header-subtitle '>
              I'm Fabio and I'm a web developer!
            </h1>
          </div>
          <div className='col-lg-6'>
            <img src={designerImg} alt='designer' id='designer-img'></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
