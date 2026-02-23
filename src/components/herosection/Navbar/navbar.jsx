import "./navbar.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "./slider/slider";

function Navbar() {
  return (
    <div className="navbar">
      <Slider />
      <div className="wrapper">
        <motion.h1 
          style={{fontSize:"xx-large"}}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          AJ
        </motion.h1>
        <div className="social">
          <a
            href="https://github.com/Abhi1558"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          <a
            
            href="https://linkedin.com/in/abhijeet-yadav-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <a href="#Contactus">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
