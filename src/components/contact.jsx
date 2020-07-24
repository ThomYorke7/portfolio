import React from 'react';
import contact from '../imgs/contact.svg';

const Contact = () => {
  return (
    <div className='container py-5' id='contact-section'>
      <h3 className='my-3'>Contact Me</h3>
      <div className='row'>
        <div className='col-lg-6'>
          <form name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact'></input>
            <div className='form-group'>
              <label htmlFor='name'>Your Name: </label>
              <input className='form-control' type='text' name='name' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Your Email: </label>
              <input className='form-control' type='email' name='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message: </label>
              <textarea className='form-control' name='message' rows='7' />
            </div>
            <button className='btn btn-primary' type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='col-lg-6 text-center'>
          <img src={contact} alt='contact me' className='undraw-img'></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
