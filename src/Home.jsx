import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component if it's in a separate file
import SkillsSection from './Skills'
import WorkSection from './Work'
import AboutSection from './About'
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="hero-content">
        <div className='svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 100 100">
  <polygon points="50,5 77.6,25 77.6,75 50,130 22.4,75 22.4,25" fill="#00FFFF" />
  <text x="38" y="68" font-family="Arial" font-size="40" fill="darkblue">J</text>
</svg>


        </div>
        <div className="content-group">
          <p id = "name">Hi, my name is</p>
          <h1>James Murugu.</h1>
          <h1 id = "stack">A full-stack web developer.</h1>
        
        <p className="description">
        I'm a software engineer specializing in creating, and occasionally designing, web applications. I have a passion for crafting efficient and user-friendly solutions that make a positive impact.
        </p>
        <button className="btn">Contact me!</button>
        </div>
      </div>
      {/* <div id='Work'>
        <WorkSection/>
      </div> */}
      <div id='Contact' ></div>
      <div id = 'About'>
      <AboutSection/>
      </div>
      {/* <div id = 'Experience>
        <SkillsSection/>
      </div> */}
    </div>
  );
}

export default Home;
