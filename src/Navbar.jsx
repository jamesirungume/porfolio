
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click,setClick] = useState(false)
  function handleClick() {
    setClick(!click)
  }
  return (
    <>
      <div className='pitchBlack'>

      </div>
      <div className="logo">
        {/* <h1>Sound Off</h1> */}
      </div>
      <ul className={click?'nav-links active':'nav-links'}>
        
       
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
          <a href="https://www.canva.com/design/DAFz-7CTshQ/mXJycZbSmzI7OErNbwKwcQ/view?utm_content=DAFz-7CTshQ&utm_campaign=designshare&utm_medium=link&utm_source=editor">
        <button className="btton" >Resume</button>
        </a>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size ={40} style={{color:'white'}}/>):(  <FaBars size={40} style={{color:'#fff'}}/>)}
      </div>

   </>
  );
};

export default Navbar;
