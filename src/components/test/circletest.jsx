import {motion} from "framer-motion"
import { useState } from "react";
import "./circle.scss"
function Circle(){
    const [open ,setopen]=useState(false)
    const variant={
        open:{
             clipPath:"circle(1000px at 50px 50px)",
             transition:{ 
                duration:2,
                type:"spring",
                stiffness:200,
                damping:40}

        },
        close:{
            clipPath:"circle(50px at 50px 50px)",
            transition:{ 
                duration:2,
                type:"spring",
                stiffness:200,
                damping:40}

        }
    }
    return(
        <motion.div className="parent" initial={"close"} animate={open? "open":"close"}>
            <motion.div className="child" variants={variant}>
                <motion.div className="grandchild">links</motion.div>
     
            </motion.div>
            <button className="buttons" onClick={()=>setopen((prev)=>!prev)}>click</button>
        </motion.div>

    ) 
}
export default Circle;