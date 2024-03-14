import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './First.css'; // Import your CSS file for styling
import Atom from "./Atom.png"
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    setShowAboutUs(true);
  };

  const handleNextClick = () => {
    navigate("/A"); 
  };

  return (
    <div className="landing">
     <div className="logo-container" >
          <img src={Atom} alt="JalAkruti" className="logo" style={{marginTop: '20px', marginLeft: '94px' , marginBottom: '0px'}} />
          {/* <h5>JalAkruti</h5> */}
        </div>
    <div className="container">
      
      <div className="content">
        <div className="vertical-line"> {/* Move the vertical line here */}
{/* 
 <div style={{ marginLeft: '30px' }}>
  <TypeAnimation
    sequence={['THIRST']}
    wrapper="p"
    speed={200}
    repeat={Infinity}
  />
  <TypeAnimation
    sequence={['FOR']}
    wrapper="p"
    speed={200}
    repeat={Infinity}
  />
  <TypeAnimation
    sequence={['CHANGE']}
    wrapper="p"
    speed={200}
    repeat={Infinity}
  />
</div> */}




       <b> <p className="thirst-for-change" style={{ marginLeft: '30px'}}>THIRST <br/>FOR<br/>CHANGE</p></b>
        <h4 style={{ marginLeft: '30px'}} >
          Thousands have lived without love,<br/> not one without water.
        </h4></div>
         </div>
        <div className="bottom-right" style={{position: 'absolute', bottom: '20px', right: '30px'}}>
            <button onClick={handleExploreClick}>
              Explore <FaChevronRight />
            </button>
          </div>
     <br/>
      {showAboutUs && (
        <div className="about-us" style={{marginTop: '100px', left: '0' }}>
            <h2>About Us</h2>
          <hr/>
          <h4> <i>Vision:</i></h4>
          <p>"To create a sustainable world where every drop of water is valued and protected, ensuring a thriving future for generations to come."</p>
          <h4><i>Mission:</i></h4>
          <p>"we are committed to raising awareness, promoting responsible water usage, and implementing innovation 
            solutions to conserve and protect our precious water resources for a greener, more resilient planet</p>
          <br/>
          <h2>Contact Us</h2>
          <hr/>
          <center><h5>Send a message</h5></center>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="firstName"  placeholder='First name'/>
            </div>
            <div className="form-group">
              <input type="text" name="lastName" placeholder='Last name' />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder='Email'/>
            </div>
            <div className="form-group">
              <input type="tel" name="contactNo" placeholder='Contact Number'/>
            </div>
            <div className="form-group">
          
              <textarea name="message" rows="3" placeholder='message'></textarea>
            </div>
           
          </form>
          <center> <button type="button">Send</button></center>
          <br/>
          <h6>Or call +91 9658431059/38</h6>
          <h6> Or email support@jalakruti.com</h6>
          <div className="bottom-right">
            <button onClick={handleNextClick} style={{ bottom: '20px', right: '30px', marginLeft: '1100px', backgroundColor:'white', color:'black'}}>
             Explore
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default HomePage;
