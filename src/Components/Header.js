import React from 'react'
import {FaWindowClose,FaListOl} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style/Header.css';
const Header = () => {
  const [active,setActive]=useState(false)
  const showMenu =()=>{
    setActive(!active)
  }
    return (
    <div className='header'>
      <div className='header__logo'>
        <h2>Rakesh</h2>
        
          {/* <img src="../images/ll1.jpg" alt="" /> */}
  
      
        <nav className={active?'navbar active':'navbar'}>
          <ul>
            <div className='closed'>
              <FaWindowClose className='close' onClick={showMenu}/>
            </div>

            <li>
              <Link to='/'>Home</Link>
              
            </li>
            <li>
              <Link to='/'>About</Link>
              
            </li>
            <li>
              <Link to='/'>Portfolio</Link>
              
            </li>
            <li>
              <Link to='/'>Pages</Link>
              
            </li>
            <li>
              <Link to='/'>Blog</Link>
              
            </li>
            <li>
              <Link to='/'>Contact</Link>
              
            </li>
          </ul>
        </nav>

        <div className='changer'>
          <FaListOl className='menu' onClick={showMenu}/>
        </div>
      </div>





    </div>
  )
}

export default Header