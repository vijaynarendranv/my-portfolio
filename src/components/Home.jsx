import React from 'react';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">
            Hello, this is
          </span>
          <h1 className="home__name">Vijay Narendran V</h1>
          <h3 className="home__education">Full Stack Developer / Data Analyst</h3>
          <div className="home__buttons">
            <a download="" href="/assets/pdf/2031054_VIJAY_NARENDRAN_V.pdf" className="button button--ghost">
              Download Resume
            </a>
            <a href="#about" className="button">About me</a>
          </div>
        </div>

        <div className="home__handle">
          <img src="/assets/img/vijay.jpg" alt="" className="home__img"/>
        </div>

        <div className="home__social">
          <a href="https://www.linkedin.com/in/vijaynarendranv/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/vijaynarendranv" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;