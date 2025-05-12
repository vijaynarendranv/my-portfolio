// components/Skills.js
import React from 'react';
import "./css/skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My abilities</span>
      <h2 className="section__title">Technical Skills</h2>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Programming Languages</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">C</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Frontend Development</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">React.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">HTML/CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Material UI</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Tailwind CSS</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Backend & Database</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Node.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Express.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">PostgreSQL</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;