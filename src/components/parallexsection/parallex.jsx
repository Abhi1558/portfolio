import { useRef } from "react"
import {motion ,useScroll, useTransform} from "framer-motion"
import "./parallex.scss"
import mountains from "../pictures/mountains.png"
import planets from "../pictures/planets.png"
import stars from "../pictures/stars.png"
import sun from "../pictures/sun.png"
const Parallex=({type})=>{
    const ref=useRef()
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const textscroll=useTransform(scrollYProgress,[0,1],["0%","500%"])
    const starscroll=useTransform(scrollYProgress,[0,1],["0%","50%"])

    return(
        <motion.div className="parallex" 
        style={{ background:type==="services" ? "linear-gradient(180deg,#0c0c1d ,#161641)" : "linear-gradient(180deg,#0c0c1d ,#105780)",}}
        ref={ref}>
            <motion.h1 style={{y:textscroll}}>{type==="services"? "What We Do?": "What we Did?"}</motion.h1>
            <motion.div className="mountains" style={{backgroundImage: `url(${mountains})`}}></motion.div>
            <motion.div className="planets" style={{ y:textscroll ,backgroundImage: type==="services" ? `url(${planets})`: `url(${sun})`}}></motion.div>
            <motion.div className="stars" style={{x:starscroll ,backgroundImage:  `url(${stars})`}}></motion.div>

        </motion.div>
    )
}
export default Parallex