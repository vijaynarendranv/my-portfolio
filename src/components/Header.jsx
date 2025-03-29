import React from 'react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) setScrollHeader(true);
      else setScrollHeader(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Vijay Narendran V</a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a 
                href="#home" 
                className={`nav__link ${activeLink === '#home' ? 'active-link' : ''}`}
                onClick={() => setActiveLink('#home')}
              >
                <i className='bx bx-home-alt'></i>
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav__link ${activeLink === '#about' ? 'active-link' : ''}`}
                onClick={() => setActiveLink('#about')}
              >
                <i className='bx bx-user'></i>
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#skills" 
                className={`nav__link ${activeLink === '#skills' ? 'active-link' : ''}`}
                onClick={() => setActiveLink('#skills')}
              >
                <i className='bx bx-book'></i>                             
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#work" 
                className={`nav__link ${activeLink === '#work' ? 'active-link' : ''}`}
                onClick={() => setActiveLink('#work')}
              >
                <i className='bx bx-briefcase-alt-2'></i>                  
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav__link ${activeLink === '#contact' ? 'active-link' : ''}`}
                onClick={() => setActiveLink('#contact')}
              >
                <i className='bx bx-message-square-detail'></i>                
              </a>
            </li>
          </ul>
        </div>

        {/* Theme change button */}
        <i className="bx bx-moon change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
};

export default Header;