import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div className='pitchBlack'>

      </div>
      <div className="logo">
        {/* <h1>Sound Off</h1> */}
      </div>
      <ul className="nav-links">
        
       
        <li>
        <Link to="Work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
        <Link to="Contact" smooth={true} duration={500}>Contact</Link>
        </li>
        <li>
        <Link to="About" smooth={true} duration={500}>About</Link>
        </li>
        
        <li>
        <Link to="Experience" smooth={true} duration={500}>Experience</Link>
        </li>
        <li>
        <button className="btton">Resume</button>
        </li>
      </ul>
   </>
  );
};

export default Navbar;
