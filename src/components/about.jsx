import React from 'react';
import life from '../imgs/life.svg';

const About = () => {
  return (
    <div className='container my-5 py-5' id='about-section'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-lg-6 text-center'>
          <img src={life} alt='about me' className='undraw-img'></img>
        </div>
        <div className='col-lg-6 px-3 my-5 my-lg-0 text-center text-lg-left'>
          <h3 className='about-title'>About Me</h3>
          <p className='about-subtitle '>
            Passionate about languages and humans. PhD in Linguistics, former
            teacher of Foreign Languages, amateur writer and boardgame
            enthusiast. Oh, and web developer as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
