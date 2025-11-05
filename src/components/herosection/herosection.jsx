import "./herosection.scss"
import hero from "../pictures/hero.png"
import scroll from "../pictures/scroll.png"

import {  motion } from "framer-motion"

const variant={
    initial:{
        x:-500,
        opacity:0

    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollbutton:{
        
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
   

    }
}
const slidingtextvariant={
    initial:{
        x:"100%"
    },
    animate:{
        x:"-200%",
        transition:{
            duration:10,
            ease:"linear",
            repeat:Infinity,
            repeatType:"mirror"
            
        }

    }
}

const Herosection=()=>{


    return(
        <div>
            
            <div className="herosection">
               <div className="wrapper">
                 <motion.div 
                 variants={variant} 
                 initial="initial" 
                 animate="animate" 
                 className="text-container ">
                    <motion.h2 variants={variant}>ABHIJEET YADAV</motion.h2>
                    <motion.h1 variants={variant}>Frontend Developer </motion.h1>
                    <motion.div variants={variant}>
                        <motion.button variants={variant}>See The Latest Works</motion.button>
                        <motion.button variants={variant}>Contact Us</motion.button>
                    </motion.div>
                    <motion.img variants={variant} animate="scrollbutton"src={scroll} alt="" />
                </motion.div>
                <motion.div 
                variants={slidingtextvariant}
                initial="initial"
                animate="animate"

                className="sliding-text-container">
                     Web Designer Frontend Developer 
                    
                </motion.div>
                <div className="image-container ">
                    <img className="h-12/12"src={hero} alt="hero" />
                </div>
                
               </div>
                
                

                

            </div>
        </div>
        


    )
}
export default Herosection 