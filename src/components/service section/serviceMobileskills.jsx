import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./serviceMobileskills.scss"; 

const skillsData = [
  {
    title: "Frontend Development",
    desc: "Builds fast, responsive web applications using React, JavaScript, Tailwind, and adheres to clean UI practices."
  },
  {
    title: "UI & Interaction",
    desc: "Designs smooth, responsive user interfaces leveraging CSS, Tailwind, and modern CSS libraries while applying contemporary UX principles."
  },
  {
    title: "State, Routing & Backend",
    desc: "Manages application state, routing, and server-side logic with Node.js, Express, ensuring scalable and maintainable architecture."
  },
  {
    title: "Version Control",
    desc: "Utilizes Git and GitHub for efficient collaboration and maintaining clean development workflows."
  }
];
export default function SkillsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % skillsData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, y: 50 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="skills-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          className="skill"
        >
          <h2>{skillsData[index].title}</h2>
          <p>{skillsData[index].desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}