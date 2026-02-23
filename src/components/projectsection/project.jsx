import portfolio from "../pictures/personal portfolio.jpeg"
import aiproject from "../pictures/AI project.png"
import smoothie from "../pictures/smoothie project.png"
import wassup from "../pictures/wassup.png"
import "./project.scss"
import { motion ,useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
const ProjectList=[
        {id:1,
         title:"Portfolio website",
         img: portfolio ,
         discription:"This is my portfolio website showcasing my skills and projects.Built with React, Framer Motion and SCSS, it features smooth animations and a responsive design.Includes a dynamic scroll progress bar and interactive navigation.Provides a clean and professional experience for visitors."},
        {id:2,
         title:"ABH-I",
         img: aiproject,
         discription:"ABH-I is an AI project designed to analyze datasets efficiently.It uses machine learning algorithms to detect patterns and provide insights.Includes a user-friendly interface for inputting data and visualizing results.Demonstrates my ability to integrate AI solutions into practical applications."},
        {id:3,
         title:"Wssup!",
         img: wassup,
         discription:"Developed a real-time chat application using React and Socket.IO to enable instant bi-directional communication, with a responsive and modern user interface built using Tailwind CSS and DaisyUI. Implemented core features such as live messaging, online user presence, and typing indicators to enhance real-time user interaction. Integrated backend APIs to support user management and persistent chat history."
        },
        {id:4,
         title:"Smoodis",
         img: smoothie ,
         discription:"Smoothies is a web app showcasing smoothie recipes with images and nutritional info.Users can browse recipes or create their own combinations.Fully responsive design optimized for desktop and mobile devices.Highlights my frontend development and UX design skills."}
    ]
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