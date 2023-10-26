import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const email = 'jymohcooler@gmail.com'; // Replace with your actual email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className='contactSection'>
      <h2>Contact</h2>
      <div className="line3"></div>
      <h1>Want to communicate more?</h1>
      <button onClick={handleEmailClick}>Send me an email</button>
      <div className='icons'>
        <a href='https://github.com/jamesirungume' targeet="_blank" rel ="noopener noreferrer">
        <p><FaGithub /></p>
        </a>
        <a href="https://www.linkedin.com/in/jymoh-undefined-a931a2294/" targeet="_blank" rel ="noopener noreferrer">
        <p><FaLinkedin /></p>
        </a>
        <a href="https://www.instagram.com/mr_james_mee/" targeet="_blank" rel ="noopener noreferrer">
        <p><FaInstagram /></p>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
