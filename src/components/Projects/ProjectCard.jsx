import React from 'react'
import "./ProjectCard.css"
import { NavLink } from 'react-router'
import { PiLinkSimpleBold } from "react-icons/pi";
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: faded out and slightly below
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    },
  },
};

function ProjectCard({mainImage,title,description,img1,img2,img3,link}) {
  return (
    <motion.div
   
  
    initial="hidden"
    whileInView="visible"

    viewport={{ once: false, amount: 0.4 }} // Triggers animation when 20% of the card is visible
    variants={cardVariants}>

      <div className="project-card">
        <div className="project-image">
            <img src={mainImage} alt="" />
        </div>
        <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        <div className="project-skills">
          <div className="project-icon">
            <p>
              <img src={img1} alt="" />
            </p>
            <p>
              <img src={img2} alt="" />
            </p>
            <p>
              <img src={img3} alt="" />
            </p>
            </div>
        </div>
        
        <NavLink to={link} className="projects-btn">
        <PiLinkSimpleBold style={{fontSize:"0.9rem"}}/>
        <span> Visit Project</span>
        </NavLink>
      </div>
    </motion.div>
  )
}

export default ProjectCard
