import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className='pitchBlack'>

      </div>
      <div className="logo">
        {/* <h1>Sound Off</h1> */}
      </div>
      <ul className="nav-links">
       
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
