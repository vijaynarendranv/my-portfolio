// components/Footer.js
import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vijay Narendran V</h1>

        <ul className="footer__list">
          <li>
            <Link to="about" smooth={true} className="footer__link">About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} className="footer__link">Skills</Link>
          </li>
          <li>
            <Link to="work" smooth={true} className="footer__link">Projects</Link>
          </li>
        </ul>

        <ul className="footer__social">
          <a href="https://www.linkedin.com/in/vijaynarendranv" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/vijaynarendranv" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-twitter'></i>
          </a>
        </ul>

        <span className="footer__copy">
          © Vijay Narendran V. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;