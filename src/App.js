import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
