import "./navbar.scss"
import{motion} from "framer-motion"
import Slider from "./slider/slider"
import Facebook from "../../pictures/Facebook.png"
import Instagram from "../../pictures/instagram.png"
import Dribbble from "../../pictures/dribbble.png"
import Youtube from "../../pictures/youtube.png"
function Navbar(){

    return(
        <div className="navbar">
            <Slider/>
            <div className="wrapper">
                <motion.span initial={{opacity:0 ,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5 ,ease:"easeInOut"}}>
                    AJ
  
                </motion.span>
                <div className="social">
                    <a href=""><img src={Facebook} alt="" /></a>
                    <a href=""><img src={Instagram} alt="" /></a>
                    <a href=""><img src={Dribbble} alt="" /></a>
                    <a href=""><img src={Youtube} alt="" /></a>

                </div>
            </div>


        </div>
    )
}
export default Navbar