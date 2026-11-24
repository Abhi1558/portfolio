import { motion, AnimatePresence, delay } from "framer-motion";
import { useEffect, useState } from "react";
import "./serviceMobileskills.scss"; 

const skillsData = [
{
title: "Frontend Development",
desc: "I build responsive and user-friendly web and mobile applications using React.js, React Native, JavaScript, TypeScript, HTML, CSS, and Tailwind CSS. I focus on creating clean interfaces, reusable components, responsive layouts, and seamless user experiences."
},
{
title: "Backend Development",
desc: "I develop scalable backend systems using Node.js, Express.js, and Python, with a focus on RESTful API development, application architecture, authentication, authorization, security, middleware,business logic, and real-time communication using Socket.IO."
},
{
title: "Database & ORM/ODM ",
desc: "I work with MongoDB, MySQL, and PostgreSQL to design and manage application databases. I use Mongoose, PyMongo, and Prisma for database integration, schema modeling, data management, and efficient database operations."
},
{
title: "DevOps & Deployment",
desc: "I use Docker for application containerization and Git and GitHub for version control and collaboration. I work with Postman for API testing, debugging, and validating backend services, along with environment configuration and application deployment."
}
];

export default function SkillsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % skillsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, y: 50 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
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
          transition={{ duration: 0.7}}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={2}
          className="skill"
        >
          <h2>{skillsData[index].title}</h2>
          <p>{skillsData[index].desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}