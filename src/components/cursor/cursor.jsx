import "./cursor.scss"
import { useState,useEffect } from "react"
import { motion } from "framer-motion"
const Cursor=()=>{
    const [position ,setposition]=useState({y:0, x:0})
    useEffect(()=>{
       const mousemove=(e)=>{
        setposition({y: e.clientY ,x: e.clientX })
       
        

       }
       window.addEventListener("mousemove",mousemove)
       return(()=>
        window.removeEventListener("mousemove",mousemove)
       )
        

    },[])
   
    return(
        <motion.div className="cursor" animate={{x:position.x ,y:position.y}}></motion.div>
    )
}
export default Cursor