import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaPython, FaJs } from 'react-icons/fa';
import myImage from './images/myImage.jpg';



const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 id = "About">About Me</h2>
      <div className="line"></div>
      <div className="displayRow">
        <div className="about-content">
          <p>Hey, my name is James, and I'm a passionate fullstack developer. I have a strong desire to create innovative web applications and digital experiences. With a background in web development, I'm dedicated to crafting efficient, user-friendly, and visually appealing solutions for various web-based challenges.</p>   
          <p>As a lifelong learner, I stay up-to-date with the latest industry trends and best practices, always seeking opportunities to expand my knowledge and grow as a developer. I am also a firm believer in collaboration and teamwork. I've had the privilege of working on projects that required effective communication and cooperation to achieve outstanding results.</p>
          <p>My goal is to contribute my skills and expertise to projects that make a positive impact. I'm excited to explore new challenges and am eager to connect with like-minded professionals and potential employers to create meaningful web experiences together.</p>
          
        </div>
        <div className="image">
        <img src={image} alt="My Image" id='my_image' />
        </div>
      </div>
      #myImage
      <div><h3 id ="headline">Skills i can provide <span className='reactIcons'><FaReact/> <FaHtml5/> <FaCss3/> <FaPython/>  <FaJs/> </span></h3> </div>
      <div className='new_line'></div>
      <div className='Skills2'>
        <p>1. Javascript - libraries(React,React Native)</p>
        <p>2. Html</p>
        <p>3. css - libraries(Tailwind,Bootsrap)</p>
        <p>4. Python - libraries(Django)</p>
        <p>5. Tools & Platforms - Git, render, GitHub, Netlify,Figma</p>
        <p>6. Database - PostgreSQL (psql), SQLite3 (sqlite3)</p>
      </div>
     
    </section>
  );
};

export default AboutSection;
