import React from 'react'
import './style/Main.css'
import { FaInstagram,FaTwitter,FaWhatsapp,FaFacebook } from "react-icons/fa";
const Main = () => {
  return (
    <div className='main'>
        <div className="main_container">
             <div className="main_content"> 

                <div className="text">
                        <p>Hey There</p>
                        <h1>I am Rakesh kumawat</h1>
                        <p>Creact Art Director & Designer</p>

                        <div className="icons">
                           <FaInstagram className='icon'/>  
                           <FaTwitter className='icon'/>  
                           <FaWhatsapp className='icon'/> 
                           <FaFacebook className='icon'/>
                        </div>
                        <div className="buttons">
                                <button>See My Work</button>
                                <button>Hire Me</button>
                        </div>
                </div>
                <div className="main_img">
                        <img src="../images/man2.png" alt="" />
                        
                 </div>   
            </div>    

        </div>
          
        
    </div>
  )
}

export default Main