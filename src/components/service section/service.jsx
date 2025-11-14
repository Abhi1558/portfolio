import "./service.scss";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGithub
} from "react-icons/si";
import people from "../pictures/people.webp";
import framerlogo from "../pictures/framerlogo.png"


import { motion ,useInView} from "framer-motion";
import { useRef } from "react";
const Service = () => {
  const ref= useRef()
  const isinview= useInView(ref,{ margin: "-200px"})
  const variant={
    initial:{
      x:-500,
      y:-100,
      opacity:0
    },
    animate:{
      x:0,
      y:0,
      opacity:1,
      transition:{
        staggerChildren:0.2,
        duration:1

      }
    }
   
  }
  const imageVariant=(durations)=>({
    initial:{y:0},
    animate:{
      y:[0, -7, 7, 0],
      transition:{
        duration: durations,
        ease:"easeInOut",
        repeat:Infinity,
        repeatType:"reverse"
      }

    }
    
  })
  return (
    <motion.div ref={ref} className="service" variants={variant} initial="initial" 
    // whileInView="animate"
      animate={isinview ? "animate" : "initial"}
>
      <motion.div className="title-container" variants={variant}>
        <p>
          I focus on becoming worthy asset to your company
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="text-container" variants={variant}>
        <motion.div className="title">
          <img  src={people} alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique </motion.b> Creator
            
          </h1>
          
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business
          </h1>
          <button>What We Do?</button>
        </motion.div>
      </motion.div>
      <motion.div className="skillBox" variants={variant}>
        <div className="skill">
          <h2>Frontend Development</h2>
          <p>
            I build fast, responsive web apps with React, TypeScript, jQuery, and Tailwind, focusing on clean code and smooth user experiences.I craft modern interfaces that engage and inspire users.
          </p>
        </div>
        <div className="skill">
          <h2>UI & Interaction</h2>
          <p>
            I design and implement engaging user interfaces with Framer Motion
            and Tailwind CSS. By combining design principles with smooth
            animations, I create interactive experiences that delight users.
          </p>
        </div>

        <div className="skill">
          <h2>State & Routing</h2>
          <p>
            I manage complex application state and navigation using Redux and
            React Router, ensuring scalable, maintainable, and organized
            front-end architecture.
          </p>
        </div>

        <div className="skill">
          <h2>Version Control</h2>
          <p>
            I use Git and GitHub to track code changes, collaborate with
            teams, and maintain project history efficiently, ensuring a clean
            workflow and reliable deployment process.
          </p>
        </div>
      </motion.div>

      <motion.div className="technologies" variants={variant}>
        <h1>Technologies</h1>
        <motion.div className="tech-images-cover" >
          <motion.div className="tech-image-box" variants={imageVariant(5)} animate="animate" initial="initial" >
            <SiReact className="tech-image"/>
          </motion.div>
          <motion.div className="tech-image-box" variants={imageVariant(3.5)} animate="animate" initial="initial">
            <SiJavascript className="tech-image"/>
            
          </motion.div>
          <motion.div className="tech-image-box" variants={imageVariant(4)} animate="animate" initial="initial">
            <SiTypescript className="tech-image"/>
            
          </motion.div>
          <motion.div className="tech-image-box" variants={imageVariant(6)} animate="animate" initial="initial">
            <img  src={framerlogo} className="tech-image"/>
            
          </motion.div>
          <motion.div className="tech-image-box" variants={imageVariant(5)} animate="animate" initial="initial">
            <SiTailwindcss className="tech-image"/>
           
          </motion.div>
          <motion.div className="tech-image-box" variants={imageVariant(4)} animate="animate" initial="initial">
            <SiMongodb className="tech-image"/>
          </motion.div>  
          <motion.div className="tech-image-box" variants={imageVariant(3)} animate="animate" initial="initial">
            < SiGithub  className="tech-image"/>
          </motion.div>        
        </motion.div>
      </motion.div>
      
      
    </motion.div>
  );
};
export default Service;




