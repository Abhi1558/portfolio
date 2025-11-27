import "./Slider.scss"
import {motion} from "framer-motion"
function Links(){
    const links=["Herosection","Skills","Project","Contactus"]
    const variants={
        open:{
            transition:{
            staggerChildren:0.2,
            staggerDirection:1
        }},
        close:{
            transition:{
            staggerChildren:0.1,
            staggerDirection:-1
        }}
    }
    const variantsitems={
        open:{opacity:1,y:0},
        close:{opacity:0,y:50}
    }
    return(
        <motion.div className="links" variants={variants}>
           
            {links.map((item)=><motion.a className="link" href={`#${item}`} variants={variantsitems} key={item} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>)}
           

        </motion.div>
    )
}
export default Links