
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
          <a href='https://docs.google.com/document/d/1BKZ13RpfgD4K8GYbJqhOLHPn2eRxJPvHZAwrTLGevCQ/edit' targeet="_blank" rel ="noopener noreferrer">
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
