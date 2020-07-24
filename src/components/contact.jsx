import React, { useState } from 'react';
import contact from '../imgs/contact.svg';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    const data = { name, email, message };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className='container py-5' id='contact-section'>
      <h3 className='my-3'>Contact Me</h3>
      <div className='row'>
        <div className='col-lg-6'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='name'>Your Name: </label>
              <input
                className='form-control'
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Your Email: </label>
              <input
                className='form-control'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message: </label>
              <textarea
                className='form-control'
                name='message'
                rows='7'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
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
