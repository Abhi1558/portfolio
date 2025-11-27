import Links from "./Links"
import Togglebutton from "./togglebutton"
import { useState } from "react"
import { motion}from "framer-motion"
import "./Slider.scss"
function Slider(){
    const[open,setopen]=useState(false)
    const variant={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                duration:2,
                type:"spring",
                stiffness:100,
                damping:40

            }
        },
        close:{
            clipPath:"circle(20px at 50px 50px )",
            transition:{
                duration:2,
                type:"spring",
                stiffness:200,
                damping:40

            }
        }
    }
    return(
        <motion.div className="slider" initial={"close"} animate={open? "open" :"close"}>
            <motion.div className="bground" variants={variant}>
                <Links/>
            </motion.div>
            <Togglebutton setopen={setopen}/>

        </motion.div>
    )
}
export default Slider