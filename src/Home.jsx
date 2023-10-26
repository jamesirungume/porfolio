import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ExperienceSection from './Experience';
import WorkSection from './Work';
import AboutSection from './About';
import ContactSection from './Contact';
import { Link } from 'react-scroll';


function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay the animation for a smooth transition
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  function handleClick() {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="hero-content" id='hero-content'>
        <div className='svg'>
          <Link to="hero-content" smooth={true} duration={500}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 100 100">
              <polygon points="50,5 77.6,25 77.6,75 50,130 22.4,75 22.4,25" fill="#00FFFF" />
              <text x="38" y="68" font-family="Arial" font-size="40" fill="darkblue">J</text>
            </svg>
          </Link>
        </div>
        <div className={`content-group ${animate ? 'move-in' : 'move-off-screen'}`}>
          <p id="name">Hi, my name is</p>
          <h1>James Murugu.</h1>
          <h1 id="stack">A full-stack web developer.</h1>
          <p className="description">
            I'm a software engineer specializing in creating, and occasionally designing, web applications. I have a
            passion for crafting efficient and user-friendly solutions that make a positive impact.
          </p>
          <button className="btn" onClick={handleClick}>
            Contact me!
          </button>
        </div>
      </div>
      <div className='scrollContent'>
        <div id='About'>
          <AboutSection />
        </div>
        <div id='Experience'>
          <ExperienceSection />
        </div>
        <div id='Work'>
          <WorkSection />
        </div>
        <div id='Contact'>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
