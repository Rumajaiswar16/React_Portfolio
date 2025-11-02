import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import profileImage from "../../../images/ruma.jpg";

const Home = ({ activeSection, handleNavClick }) => {
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const controls = useAnimation();

  const typingTexts = [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    let timeout;
    const currentText = typingTexts[typingIndex % typingTexts.length];
    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setTypingIndex((prev) => prev + 1);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [typedText, typingIndex]);

  const textVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8,
        duration: 0.6,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: [0.6, 1.1, 1],
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (activeSection === "home") {
      controls.start("hidden").then(() => controls.start("visible"));
    }
  }, [activeSection, controls]);

  const handleReplay = () => {
    controls.start("hidden").then(() => controls.start("visible"));
  };

  return (
    <section
      className={`section home ${activeSection === "home" ? "active" : ""}`}
      onClick={handleReplay}
    >
      <div className="container">
        <div className="row">
          {/* Left Text */}
          <motion.div
            className="home-info padd-15"
            variants={textVariant}
            initial="hidden"
            animate={controls}
          >
            <h3 className="hello">
              Hello, my name is <span className="name">Ruma Jaiswar</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">{typedText}</span>
            </h3>
            <p>
              I'm a Web Developer skilled in HTML, CSS, JavaScript, React,
              Python, and SQL. I have expertise in building responsive frontend
              interfaces. I also work on backend development and databases.
            </p>

            <motion.a
              href="#contact"
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="home-img padd-15"
            variants={imageVariant}
            initial="hidden"
            animate={controls}
          >
            <div>
              <img src={profileImage} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
