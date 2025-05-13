// src/components/Contact.js
import React from 'react';

const Contact = () => {



 


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Reach me at</h2>

     
        <div className="contact__content">

          <div className="contact__info">
            <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vijaynarendranvadivel@gmail.com</span>

              <a href="mailto:vijaynarendranvadivel@gmail.com" className="contact__button">
                Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 9597357534</span>

              <a href="https://api.whatsapp.com/send?phone=+919597357534&text=Hello Vijay, I came across your portfolio..." 
                 className="contact__button">
                Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-linkedin contact__card-icon'></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">vijaynarendranv</span>

              <a href="https://www.linkedin.com/in/vijaynarendranv" 
                 className="contact__button">
                Connect <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>
        <br/><br/>

     
    </section>
  );
};

export default Contact;