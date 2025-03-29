// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Vijay Narendran V</a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="home" smooth={true} className="nav__link active-link">
                <i className='bx bx-home-alt'></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="about" smooth={true} className="nav__link">
                <i className='bx bx-user'></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="skills" smooth={true} className="nav__link">
                <i className='bx bx-book'></i>                             
              </Link>
            </li>
            <li className="nav__item">
              <Link to="work" smooth={true} className="nav__link">
                <i className='bx bx-briefcase-alt-2'></i>                  
              </Link>
            </li>
            <li className="nav__item">
              <Link to="contact" smooth={true} className="nav__link">
                <i className='bx bx-message-square-detail'></i>                
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme change button */}
        <i 
          className={`bx ${theme === 'light' ? 'bx-moon' : 'bx-sun'} change-theme`} 
          id="theme-button" 
          onClick={toggleTheme}
        ></i>
      </nav>
    </header>
  );
};

export default Header;