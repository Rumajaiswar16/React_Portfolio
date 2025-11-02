import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Timeline from "./Timeline";

const ExperienceSection = ({ isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => controls.start("visible"), 150);
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const experience = [
    {
      date: "2023-2024",
      title: "Frontend Internship",
      description:
        "Developed responsive web pages using React, Bootstrap and CSS animations.",
    },
    {
      date: "2022-2023",
      title: "Web Design Project",
      description:
        "Created a dynamic portfolio site using HTML, CSS, and JavaScript.",
    },
  ];

  const rightSlide = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="experience padd-15"
      variants={rightSlide}
      initial="hidden"
      animate={controls}
    >
      <h3 className="title">Experience</h3>
      <Timeline items={experience} />
    </motion.div>
  );
};

export default ExperienceSection;
