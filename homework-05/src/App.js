/*
  Modified by: Alan Espana
  CS 247 - Front End Dev
  Homework 95 - Responsive Web Design
  Last updated: 6/7/2024
*/

import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';
import DogImage from './images/dog.jpg';

// Image of dog https://www.pexels.com/search/dog%20running/

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`content ${menuOpen ? 'menu-open' : ''}`}>
        <div className="welcome-section">         
          <div className="welcome-text">
            <h1>Welcome to My dog Shnoob's Responsive Website</h1>
            <p className='welcome-paragraph'>
              Hello, this website was created by Alan Espana to hold my dogs favorite snacks, treats and toys. This is a responsive website for Desktop, Laptop, and Mobile.
              P.S. the dog in the image is not actually my dog and his name is not Shnoob, though I do have a dog in real life, his name is Achilles and he is a husky.
            </p>
          </div>
          <div className="image-placeholder"><img src={DogImage} alt="Image of a dog" className='dogImage'/></div>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
