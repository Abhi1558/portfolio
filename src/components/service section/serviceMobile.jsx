import "./serviceMobile.scss"
import Skills from "./serviceMobileskills"
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub
} from "react-icons/si";
import people from "../pictures/people.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceMobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const containerVariants = {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  const floatingIcon = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -6, 6, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <motion.section
      ref={ref}
      className="ServiceMobile"
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {/* TITLE */}
      <motion.div className="title-container" variants={itemVariants}>
        <p>
          I focus on becoming a worthy asset to your company and grow together
        </p>
        <hr />
      </motion.div>

      {/* HERO TEXT */}
      <motion.div className="text-container" variants={itemVariants}>
        <div className="title">
          <img src={people} alt="profile" />
          <h1>
            <motion.b whileTap={{ color: "orange" }}>
              Unique
            </motion.b>{" "}
            Creator
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileTap={{ color: "orange" }}>
              For Your 
            </motion.b> Business
            
          </h1>
          <button>What We Do?</button>
           <hr />
        </div>
      </motion.div>
      <Skills/>
      {/* TECHNOLOGIES */}
      <motion.div className="technologies" variants={itemVariants}>
        <h1>Technologies</h1>

        <div className="tech-images-cover">
          <motion.div
            className="tech-image-box"
            variants={floatingIcon(5)}
            animate="animate"
            style={{color:"cyan"}}
          >
            <SiReact className="tech-image" />
          </motion.div>

          <motion.div
            className="tech-image-box"
            variants={floatingIcon(4)}
            animate="animate"
            style={{color:"yellow"}}
          >
            <SiJavascript className="tech-image" />
          </motion.div>

          <motion.div
            className="tech-image-box"
            variants={floatingIcon(3.5)}
            animate="animate"
          >
            <SiNodedotjs className="tech-image" style={{ color: "green" }} />
          </motion.div>

          <motion.div
            className="tech-image-box"
            variants={floatingIcon(5)}
            animate="animate"
          >
            <SiExpress className="tech-image" />
          </motion.div>

          <motion.div
            className="tech-image-box"
            variants={floatingIcon(4)}
            animate="animate"
          >
            <SiMongodb className="tech-image" style={{ color: "green" }} />
          </motion.div>

          <motion.div
            className="tech-image-box"
            variants={floatingIcon(3)}
            animate="animate"
          >
            <SiGithub className="tech-image" />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceMobile;