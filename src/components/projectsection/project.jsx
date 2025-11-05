import personalportfolio from "../pictures/personal portfolio.png"
import aiproject from "../pictures/AI project.png"
import smoothie from "../pictures/smoothie project.png"
import "./project.scss"
import { motion ,useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
const ProjectList=[
        {id:1,
         title:"Personal Portfolio",
         img:{personalportfolio},
         discription:""},
        {id:1,
         title:"ABH-I",
         img:{aiproject},
         discription:""},
        {id:1,
         title:"Smoodies",
         img:{smoothie},
         discirption:""}
    ]
const Section=({item})=>{

    return(<section>{item.title}</section>)
    

}
const Projects=()=>{
    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target: ref,
        offset:["end end ","start start"],

    })
    const scaleX=useSpring(scrollYProgress,{
        stiffness: 100,
        damping:10
    })
    
    
    return(
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>PROJECTS</h1>
                <motion.div className="progress-bar" style={{scaleX}}></motion.div>
            </div>
            <div>
                {ProjectList.map((item)=>(
                    <Section item={item} key={item.id}/>
                ))}
            </div>

            
        </div>
    )
    
}
export default Projects