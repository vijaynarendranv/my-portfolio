// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or other logic here
  };

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vijaynarendranvadivel@gmail.com</span>

              <a href="mailto:vijaynarendranvadivel@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__button">
                Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 9597357534</span>

              <a href="https://api.whatsapp.com/send?phone=+919597357534&text=Hello Vijay, I came across your portfolio..." target="_blank" rel="noopener noreferrer" className="contact__button">
                Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-linkedin contact__card-icon'></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">vijaynarendranv</span>

              <a href="https://www.linkedin.com/in/vijaynarendranv" target="_blank" rel="noopener noreferrer" className="contact__button">
                Connect <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Insert Your Name" 
                className="contact__form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">Mail</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Insert Your email" 
                className="contact__form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="project" className="contact__form-tag">Project</label>
              <textarea 
                name="project" 
                id="project" 
                cols="30" 
                rows="10" 
                placeholder="Write your project" 
                className="contact__form-input"
                value={formData.project}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;