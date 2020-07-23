import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Projects from './components/projects';
import './bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
    </div>
  );
}

export default App;
