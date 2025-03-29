import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      category: 'web',
      image: '/assets/img/dinedash.jpg',
      title: 'Dine Dash',
      description: 'Food ordering app with Node.js backend and React.js frontend'
    },
    {
      id: 2,
      category: 'mobile',
      image: '/assets/img/flexfit.jpg',
      title: 'Flex Fit',
      description: 'Fitness app with OpenAI integration for personalized recommendations'
    },
    {
      id: 3,
      category: 'game',
      image: '/assets/img/checkers.jpg',
      title: 'Checkers Multiplayer',
      description: 'Real-time multiplayer game with WebSockets'
    },
    {
      id: 4,
      category: 'web',
      image: '/assets/img/tradersark.jpg',
      title: 'Traders Ark',
      description: 'Automated trading web app with React.js and Node.js'
    }
  ];

  const [filter, setFilter] = React.useState('all');
  const [projectsToShow, setProjectsToShow] = React.useState(projects);

  React.useEffect(() => {
    if (filter === 'all') {
      setProjectsToShow(projects);
    } else {
      setProjectsToShow(projects.filter(project => project.category === filter));
    }
  }, [filter]);

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
        {projectsToShow.map((project) => (
          <div className={`work__card mix ${project.category}`} key={project.id}>
            <img src={project.image} alt="" className="work__img"/>   
          
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