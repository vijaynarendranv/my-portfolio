// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  // Set up scroll event listener to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link 
                to="home" 
                smooth={true} 
                className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
              >
                <i className='bx bx-home-alt'></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link 
                to="about" 
                smooth={true} 
                className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
              >
                <i className='bx bx-user'></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link 
                to="skills" 
                smooth={true} 
                className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`}
              >
                <i className='bx bx-book'></i>                             
              </Link>
            </li>
            <li className="nav__item">
              <Link 
                to="work" 
                smooth={true} 
                className={`nav__link ${activeSection === 'work' ? 'active-link' : ''}`}
              >
                <i className='bx bx-briefcase-alt-2'></i>                  
              </Link>
            </li>
            <li className="nav__item">
              <Link 
                to="contact" 
                smooth={true} 
                className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}
              >
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