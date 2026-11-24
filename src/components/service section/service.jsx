import "./service.scss";
import ServiceMobile from "./serviceMobile";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiTypescript,
  
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import people from "../pictures/people.webp";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Service = () => {
  const ref = useRef();
  const isinview = useInView(ref, { margin: "-200px" });
  const variant = {
    initial: {
      x: -500,
      y: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  const imageVariant = (durations) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -7, 7, 0],
      transition: {
        duration: durations,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <motion.div id="Skills">
      <ServiceMobile className="serviceM" />

      <motion.div
        ref={ref}
        className="service"
        variants={variant}
        initial="initial"
        animate={isinview ? "animate" : "initial"}
      >
        <motion.div className="title-container" variants={variant}>
          <p>
            I focus on becoming worthy asset to your company
            <br /> and move forward
          </p>
          <hr />
        </motion.div>

        <motion.div className="text-container" variants={variant}>
          <motion.div className="title">
            <img src={people} alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>{" "}
              Creator
            </h1>
          </motion.div>
          <motion.div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>{" "}
              Business
            </h1>
            <button>What We Do?</button>
          </motion.div>
        </motion.div>
        <motion.div className="skillBox" variants={variant}>
          <div className="skill">
            <h2>Frontend Development & UI/UX</h2>
            <p>
              I build responsive and user-friendly web and mobile applications
              using React.js, React Native, JavaScript, TypeScript, HTML, CSS,
              and Tailwind CSS. I focus on creating clean interfaces, reusable
              components, responsive layouts, and seamless user experiences.
            </p>
          </div>

          <div className="skill">
            <h2>Backend Development & Architecture</h2>
            <p>
              I develop scalable backend systems using Node.js, Express.js, and
              Python, with a focus on RESTful API development, application
              architecture, authentication, authorization, security, middleware,
              business logic, and real-time communication using Socket.IO.
            </p>
          </div>

          <div className="skill">
            <h2>Database & ORM/ODM</h2>
            <p>
              I work with MongoDB, MySQL, and PostgreSQL to design and manage
              application databases. I use Mongoose, PyMongo, and Prisma for
              database integration, schema modeling, data management, and
              efficient database operations.
            </p>
          </div>

          <div className="skill">
            <h2>DevOps, Tools & Testing</h2>
            <p>
              I use Docker for application containerization and Git and GitHub
              for version control and collaboration. I work with Postman for API
              testing, debugging, and validating backend services, along with
              environment configuration and application deployment.
            </p>
          </div>
        </motion.div>

        <motion.div className="technologies" variants={variant}>
          <h1>Technologies</h1>
          <motion.div className="tech-images-cover">
            <motion.div
              className="tech-image-box"
              variants={imageVariant(5)}
              animate="animate"
              initial="initial"
            >
              <SiReact className="tech-image" />
            </motion.div>

            <motion.div
              className="tech-image-box"
              variants={imageVariant(3.5)}
              animate="animate"
              initial="initial"
            >
              <SiNodedotjs className="tech-image" style={{ color: "green" }} />
            </motion.div>

            <motion.div
              className="tech-image-box"
              variants={imageVariant(3.5)}
              animate="animate"
              initial="initial"
            >
              <FaPython className="tech-image"  />
            </motion.div>

            <motion.div
              className="tech-image-box"
              variants={imageVariant(2.5)}
              animate="animate"
              initial="initial"
            >
              <SiTypescript className="tech-image" />
            </motion.div>
            <motion.div
              className="tech-image-box"
              variants={imageVariant(5)}
              animate="animate"
              initial="initial"
            >
              <SiExpress className="tech-image" />
            </motion.div>

            <motion.div
              className="tech-image-box"
              variants={imageVariant(4)}
              animate="animate"
              initial="initial"
            >
              <SiMongodb className="tech-image" style={{ color: "green" }} />
            </motion.div>
            <motion.div
              className="tech-image-box"
              variants={imageVariant(3)}
              animate="animate"
              initial="initial"
            >
              <SiGithub className="tech-image" style={{ color: "grey" }} />
            </motion.div>
            <motion.div
              className="tech-image-box"
              variants={imageVariant(3)}
              animate="animate"
              initial="initial"
            >
              <SiDocker className="tech-image" style={{ color: "cyan" }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Service;
