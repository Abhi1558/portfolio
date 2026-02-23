import Links from "./Links";
import Togglebutton from "./togglebutton";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Slider.scss";
function Slider() {
  const [open, setopen] = useState(false);

  const variant = {
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 40,
      },
    },
    close: {
      x: "-100%",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="slider"
      initial={"close"}
      animate={open ? "open" : "close"}
    >
      <motion.div className="bground" variants={variant}>
        <Links />
      </motion.div>
      <Togglebutton setopen={setopen} open={open} />
    </motion.div>
  );
}
export default Slider;
