// components/Work.js
import React, { useState } from 'react';
import dinedashImage from '../assets/img/dinedash.jpeg';
import flexfitImage from '../assets/img/flexfit.png';
import checkersImage from '../assets/img/checkers.jpeg';
import tradersarkImage from '../assets/img/checkers.jpeg';

const Work = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    {
      id: 1,
      title: 'Dine Dash',
      category: 'web',
      image: dinedashImage,
      description: 'Food ordering app with Node.js backend and React.js frontend'
    },
    {
      id: 2,
      title: 'Flex Fit',
      category: 'mobile',
      image: flexfitImage,
      description: 'Fitness app with OpenAI integration for personalized recommendations'
    },
    {
      id: 3,
      title: 'Checkers Multiplayer',
      category: 'game',
      image: checkersImage,
      description: 'Real-time multiplayer game with WebSockets'
    },
    {
      id: 4,
      title: 'Traders Ark',
      category: 'web',
      image: tradersarkImage,
      description: 'Automated trading web app with React.js and Node.js'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Projects</h2>

      <div className="work__filters">
        <span 
          className={`work__item ${filter === 'all' ? 'active-work' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </span>
        <span 
          className={`work__item ${filter === 'web' ? 'active-work' : ''}`} 
          onClick={() => setFilter('web')}
        >
          Web
        </span>
        <span 
          className={`work__item ${filter === 'mobile' ? 'active-work' : ''}`} 
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </span>
        <span 
          className={`work__item ${filter === 'game' ? 'active-work' : ''}`} 
          onClick={() => setFilter('game')}
        >
          Game
        </span>
      </div>

      <div className="work__container container grid">
        {filteredProjects.map(project => (
          <div className={`work__card mix ${project.category}`} key={project.id}>
            <img src={project.image} alt={project.title} className="work__img" />   
          
            <h3 className="work__title">{project.title}</h3>
            <p className="work__description">{project.description}</p>

            <a href="#" className="work__button">
              Demo <i className='bx bx-right-arrow-alt work__icon'></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;