import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillItem from "./SkillItem";

const SkillsSection = ({ isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const skills = [
    { name: "HTML", percent: 96 },
    { name: "CSS", percent: 76 },
    { name: "JAVASCRIPT", percent: 86 },
    { name: "BOOTSTRAP", percent: 78 },
    { name: "REACT", percent: 60 },
    { name: "SQL", percent: 55 },
    { name: "PYTHON", percent: 70 },
    { name: "DJANGO", percent: 55 },
  ];

  const slideRight = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 1.2 },
    },
  };

  return (
    <motion.div
      className="skills padd-15"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      }}
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} variants={slideRight}>
          <SkillItem name={skill.name} percent={skill.percent} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;
