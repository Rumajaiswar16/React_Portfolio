import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutIntro = ({ isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => controls.start("visible"), 200);
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const leftBounce = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div
      className="row"
      variants={leftBounce}
      initial="hidden"
      animate={controls}
    >
      <div className="about-text padd-15">
        <h3>
          I'm Ruma Jaiswar and <span>Web Developer</span>
        </h3>
        <p>
          I'm Ruma Jaiswar, a passionate and detail-oriented Front-End Web
          Developer with a strong interest in creating responsive and
          user-friendly web applications. I have hands-on experience in HTML,
          CSS, JavaScript, React.js, and Bootstrap, which I use to build clean
          and interactive user interfaces. Along with frontend development, I
          also have knowledge of SQL and Python, which helps me understand
          backend logic and database management. I enjoy learning new
          technologies, improving my coding skills, and turning creative ideas
          into functional web experiences.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutIntro;
