import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vijay Narendran V</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#work" className="footer__link">Projects</a>
          </li>
        </ul>

        <ul className="footer__social">
          <a href="https://www.linkedin.com/in/vijaynarendranv" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/vijaynarendranv" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="" target="_blank" rel="noreferrer" className="footer__social-link">
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