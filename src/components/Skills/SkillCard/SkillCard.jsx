import React from 'react'
import "./SkilCard.css"
import {animate,motion, useInView} from "framer-motion"
import { useRef } from 'react';

function SkillCard({title, iconUrl, isActive, onClick}) {

  const ref = useRef(null);
  const isInView = useInView(ref,  { threshold: 0.1})
  return (

    <div ref={ref}>
    <motion.div
      
    initial={{ x: "-100vw", opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}
    transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.5 }}>
      <div className={`skills-card ${isActive ? "active": ""}`} onClick={()=>onClick()}>

        <div className="skill-icon">
            <img src={iconUrl} alt="" />
        </div>

        <span>{title}</span>

      </div>
    </motion.div>
    </div>
  )
}

export default SkillCard
