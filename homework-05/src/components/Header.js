/*
  Modified by: Alan Espana
  CS 247 - Front End Dev
  Homework 95 - Responsive Web Design
  Last updated: 6/7/2024
*/

import React from 'react';
import './Header.css';
import UserImage from '../images/userImage.png';

// Trigram for heaven symbole https://www.alt-codes.net/trigram-symbols
// User icon https://iconmonstr.com/user-19-png/

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <div className="logo"><img src={UserImage} alt="User image" className='userImage'/>My Website</div>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>About Me</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;