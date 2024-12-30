import React from 'react';
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ContactInfoCard from '../ContactMe/ContactInfoCard/ContactInfoCard';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {Link} from "react-scroll";
import { NavLink } from 'react-router';


function Hero() {
  const [text]  = useTypewriter({
    words: ["Innovative UI Designer", "Passionate Frontend Developer"], // Add more words if needed
    loop: {}, // Set to true for infinite looping
    delaySpeed: 2000, // Adjust delay between words
    typeSpeed: 100, // Typing speed
    deleteSpeed: 50, // Deleting speed
  });
  
  const techIcons = ["react.png","html.png", "css.png", "js.png","figma.png","tailwind.png"];

  return (
    <div className="container">
    <section className="hero-container" id="hero-container">
      <div className="hero-content">
        <span className="welcome">Hi ! i'm Roni Shil,</span>
        <h2>
          I'm a <span style={{color:"yellow"}}>{text}</span>
          <Cursor />
        </h2>
        <p style={{color:"#E0E1E4"}}>
        I am a passionate and driven individual, deeply immersed in frontend development & UI/UX designing, with a sharp eye for detail and an unwavering commitment to excellence. 
        </p>

        <div className="contact-icon" style={{display:"flex"}}>
        
            <NavLink to="https://www.linkedin.com/in/ronishil/"  className="link-icon">
              <img src={"./images/linkedin (4).png"} alt="" />
            </NavLink >
            <NavLink to="https://github.com/Ronigit01"  className="link-icon">
              <img src={"./images/github (3).png"} alt="" />
            </NavLink>
            <a  href="mailto:ronishilwork@gmail.com"  className="link-icon">
              <img src={"./images/email.png"} alt="" />
            </a>
            <NavLink  to="https://www.behance.net/ronishilUi" className="link-icon">
              <img src={"./images/behance (4).png"} alt="" />
            </NavLink>
          
        </div>
        <div className="connect" >
          
                       <Link to="contact-container" spy={true} smooth={true} offset={-200} duration={500} >
        Let's Connect </Link> <IoArrowForwardCircleOutline style={{fontSize:"1.5rem"}}/>
        </div>
        {/* <button className="glow-on-hover"> <span>Hire Me</span></button> */}
      </div>

      <div className="hero-img">
        <div>
          
          <img src="/images/2.svg" alt="Main Logo" className="logo" />
        </div>

        <div className="skill">
          {techIcons.map((icon, index) => (
            <div key={index} className="tech-icon">
              <img src={`/images/${icon}`} alt={`${icon.split(".")[0]} Icon`} />
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  );
}

export default Hero;





