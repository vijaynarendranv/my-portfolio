import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      
      <div className="about__container container grid">
        <img src="/assets/img/vijay rear.jpg" alt="" className="about__img"/>

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">2 Internships</span>
            </div>

            <div className="about__box">
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">6+ Projects</span>
            </div>
          </div>
          <p className="about__description">
            An inquisitive and disciplined individual with strong learning capabilities, known for reliability and thriving under pressure. Seeking opportunities to contribute to company growth while enhancing my skills in a dynamic and challenging environment.
          </p>
          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;