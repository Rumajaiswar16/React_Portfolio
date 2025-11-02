import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Timeline from "./Timeline";

const EducationSection = ({ isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const education = [
    {
      date: "2023-2024",
      title: "Bachelor's in Information Technology",
      description:
        "I have completed my Bachelor of Science in Information Technology (B.Sc. IT), where I gained a strong foundation in programming, web development, databases, and software concepts.",
    },
    {
      date: "2019-2021",
      title: "Higher Secondary Certificate",
      description: "Swami Vivekanand Vidyalaya & Junior College - 70%",
    },
    {
      date: "2018-2019",
      title: "Secondary School Certificate",
      description: "Vidya Varidhi Vidyalaya & Junior College - 70.17%",
    },
  ];

  const leftSlide = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="education padd-15"
      variants={leftSlide}
      initial="hidden"
      animate={controls}
    >
      <h3 className="title">Education</h3>
      <Timeline items={education} />
    </motion.div>
  );
};

export default EducationSection;
