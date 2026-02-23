import "./herosection.scss"
import mypic from "../pictures/mypic.png"
import scroll from "../pictures/scroll.png"
import { motion } from "framer-motion"

const variant = {
    initial: { x: -500, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.1 }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: { duration: 2, repeat: Infinity }
    }
}

const slidingtextvariant = {
    initial: { x: "200%" },
    animate: {
        x: "-300%",
        transition: { duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }
    }
}

const Herosection = () => {
    return (
        <div className="herosection" id="Herosection">
            <div className="wrapper">
                <motion.div
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    className="text-container">
                    <motion.h1 variants={variant}>ABHIJEET YADAV</motion.h1>
                    <motion.h2 variants={variant}>Fullstack Developer</motion.h2>

                    <motion.div variants={variant} className="button-container">
                        <motion.a variants={variant} href="#Project" >See The Latest Works</motion.a>
                        <motion.a variants={variant} href="#Contactus" >Contact Us</motion.a>
                    </motion.div>

                    <motion.img variants={variant} animate="scrollbutton" src={scroll} alt="" />
                </motion.div>
            </div>

            <motion.div
                variants={slidingtextvariant}
                initial="initial"
                animate="animate"
                className="sliding-text-container">
                Developer Web Designer DevOps Engineer
            </motion.div>

            <div className="image-container">
                <img src={mypic} alt="hero" />
            </div>
        </div>
    )
}

export default Herosection
