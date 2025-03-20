
import React from 'react'
import "./ProjectFrontend.css"
import ProjectCard from './ProjectCard'
import img1 from "../../../public/images/html.png"
import img2 from "../../../public/images/css.png"
import img3 from "../../../public/images/react.png"
import image from "../../../public/images/ecom3.jpg"
import image2 from "../../../public/images/portfolio2.jpg"
import image3 from "../../../public/images/agency1.png"
import image4 from "../../../public/images/task.png"


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
     link = {"https://delightful-pudding-133fa3.netlify.app/"}
    />
    <ProjectCard 
    title={"Agency Website"}
    description={"A modern, responsive agency website featuring services, projects, and seamless navigation for a polished experience."}
    mainImage={image3}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"https://startling-sawine-3bb03a.netlify.app/"}
    />
    <ProjectCard 
    title={"Task Management Website"}
    description={"Task management website enabling admins to assign, and monitor employee tasks with streamlined efficiency."}
    mainImage={image4}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"https://github.com/Ronigit01/Task-Management-Website"}
    />
    
    </div>
    
  )
}

export default ProjectFrontend
