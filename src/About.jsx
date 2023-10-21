import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      
      <h2>About Me</h2>
      <div className="line"></div>
      <div className='displayRow'>
      <div className="about-content">
        <p>Hey, my name is James, and I'm a passionate fullstack developer. I have a strong desire to create innovative web applications and digital experiences. With a background in web development, I'm dedicated to crafting efficient, user-friendly, and visually appealing solutions for various web-based challenges.</p>   
        <p>As a lifelong learner, I stay up-to-date with the latest industry trends and best practices, always seeking opportunities to expand my knowledge and grow as a developer. I am also a firm believer in collaboration and teamwork. I've had the privilege of working on projects that required effective communication and cooperation to achieve outstanding results.</p>
        <p>My goal is to contribute my skills and expertise to projects that make a positive impact. I'm excited to explore new challenges and am eager to connect with like-minded professionals and potential employers to create meaningful web experiences together.</p>
      <div className='image'>  
      <img src='src/images/WhatsApp Image 2023-10-21 at 4.18.22 PM.jpeg' id='my_image'/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
