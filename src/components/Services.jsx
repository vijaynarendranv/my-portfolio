// components/Services.js
import React, { useState } from 'react';
import  "./css/services.css";
import "./css/skills.css"
const Services = () => {
  const [modalStates, setModalStates] = useState({
    fullstack: false,
    mobile: false,
    data: false
  });

  const toggleModal = (service) => {
    setModalStates(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  return (
    <section className="services section">
      <span className="section__subtitle">What I Do</span>
      <h2 className="section__title">My Services</h2>

      <div className="services__container_container_grid">
        {/* Full Stack Development Card */}
        <div className="services__card">
          <h3 className="services__title">Full Stack<br /> Development</h3>

          <span className="services__button" onClick={() => toggleModal('fullstack')}>
            See more <i className='bx bx-right-arrow-alt services__icon'></i>
          </span>

          <div className={`services__modal ${modalStates.fullstack ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close' onClick={() => toggleModal('fullstack')}></i>

              <h3 className="services__modal-title">Full Stack Development</h3>
              <p className="services__modal-description">
                I develop complete web applications with both frontend and backend components.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    React.js frontend development
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Node.js/Express.js backend development
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Database design and implementation
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    API development and integration
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile App Development Card */}
        <div className="services__card">
          <h3 className="services__title">Mobile App<br /> Development</h3>

          <span className="services__button" onClick={() => toggleModal('mobile')}>
            See more <i className='bx bx-right-arrow-alt services__icon'></i>
          </span>

          <div className={`services__modal ${modalStates.mobile ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close' onClick={() => toggleModal('mobile')}></i>

              <h3 className="services__modal-title">Mobile App Development</h3>
              <p className="services__modal-description">
                I create cross-platform mobile applications using React Native.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    React Native development
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    UI/UX design with Figma/Adobe XD
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    API integration
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    AWS deployment
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Analysis Card */}
        <div className="services__card">
          <h3 className="services__title">Data<br /> Analysis</h3>

          <span className="services__button" onClick={() => toggleModal('data')}>
            See more <i className='bx bx-right-arrow-alt services__icon'></i>
          </span>

          <div className={`services__modal ${modalStates.data ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close' onClick={() => toggleModal('data')}></i>

              <h3 className="services__modal-title">Data Analysis</h3>
              <p className="services__modal-description">
                I analyze financial data and provide insights using various tools.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Financial data analysis
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Alteryx data processing
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    MS Excel data manipulation
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className='bx bx-check services__modal-icon'></i>
                  <p className="services__modal-info">
                    Data visualization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;