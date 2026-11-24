import portfolio from "../pictures/personal portfolio.jpeg"
import InstantKart from "../pictures/InstantKart.webp"
import FileManagement from "../pictures/FileManagement.webp"
import wassup from "../pictures/wassup.png"
import "./project.scss"
import { motion ,useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
const ProjectList = [
{
id: 1,
title: "Portfolio Website",
img: portfolio,
discription:
"A responsive developer portfolio built with React, Framer Motion, and SCSS to showcase my skills, projects, and experience. Features smooth animations, interactive navigation, responsive layouts, and a dynamic scroll progress indicator for an engaging user experience."
},

{
  id: 2,
  title: "Secure File Management & Audit System",
  img: FileManagement,
  discription:
    "A secure backend application built with Python, FastAPI, and MongoDB (PyMongo) for managing files, controlling document access, and tracking user activities. Features JWT-based authentication, role-based authorization, secure file upload and download, file ownership validation, SHA-256 hashing for file integrity and duplicate detection, audit logging, and basic file version tracking. Uses filesystem storage for files and MongoDB for metadata and audit records."
},

{
id: 3,
title: "Wassup!",
img: wassup,
discription:
"A full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. Features a custom email verification system built from scratch, secure authentication, real-time messaging, online/offline presence, last seen, typing indicators, unread message counts, user search, image messaging, profile management, and block/unblock functionality. Integrated Cloudinary for media storage and implemented security middleware, rate limiting, and production deployment."
},

{
  id: 4,
  title: "Instant kart",
  img: InstantKart,
  discription:
    "A full-stack grocery delivery platform built with React Native, TypeScript, Node.js, Express.js, and MongoDB. Features user authentication, grocery browsing, product search, cart management, and order processing. Designed with a scalable backend architecture, with plans to integrate real-time order tracking, Socket.IO, Google Maps, and Redis for efficient caching and location-based functionality. The application uses Docker for containerization and consistent development environments."
}
];

const Section=({item})=>{
    const ref=useRef()
    const { scrollYProgress } = useScroll({
    target: ref,
    

    
})

    
    const y=useTransform(scrollYProgress, [0, 1], [-300, 300])

    return( <section className="project-section" id="Project">
        <div className="container">
            <div className="wrapper">
                <div className="image-container" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="text-container" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.discription}</p>
                </motion.div>
            </div>
        </div>
    </section>)
    

}
const Projects=()=>{
    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target: ref,
        offset:["end end","start start"]
        
        

    })
    const scaleX=useSpring(scrollYProgress,{
        stiffness: 100,
        damping:10
    })
    
    
    return(
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1 style={{marginBottom:"20px"}}>Featured Work</h1>
                <motion.div className="progress-bar" style={{scaleX}}></motion.div>
            </div>
            <div>
                {ProjectList.map((item)=>(
                    <Section item={item} key={item.id} />
                ))}
            </div>

            
        </div>
    )
    
}
export default Projects