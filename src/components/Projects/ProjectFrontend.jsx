
import React from 'react'
import "./ProjectFrontend.css"
import ProjectCard from './ProjectCard'
import img1 from "../../../public/images/html.png"
import img2 from "../../../public/images/css.png"
import img3 from "../../../public/images/react.png"
import image from "../../../public/images/ecom3.jpg"
import image2 from "../../../public/images/portfolio2.jpg"


function ProjectFrontend() {
  return (
    <div className="project-container">

    <ProjectCard 
    title={"Ecommerce Website"}
    description={"A frontend eCommerce project with intuitive navigation, fast-loading pages, product listings, search functionality & more features."}
    mainImage={image}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"https://dancing-crepe-515b21.netlify.app/"}
    />
    <ProjectCard 
    title={"Portfolio Website"}
    description={"A responsive portfolio website highlighting skills, projects, and achievements with sleek design and intuitive navigation."}
    mainImage={image2}
    img1={img1}
    img2={img2}
    img3={img3}
    />
    
    </div>
    
  )
}

export default ProjectFrontend
