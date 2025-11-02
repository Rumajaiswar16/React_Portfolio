import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PersonalInfo = ({ isVisible, handleNavClick }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const personalData = [
    { label: "Birthday", value: "16 Sep 2003" },
    { label: "Age", value: "22" },
    { label: "Website", value: "www.domain.com" },
    { label: "Email", value: "rumajaiswar1693@gmail.com" },
    { label: "Degree", value: "BSC-IT" },
    { label: "Phone", value: "+91 7058424322" },
    { label: "City", value: "Mumbai" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <motion.div
      className="personal-info padd-15"
      variants={fadeUp}
      initial="hidden"
      animate={controls}
    >
      <div className="row">
        {personalData.map((item, idx) => (
          <div className="info-item padd-15" key={idx}>
            <p>
              {item.label} : <span>{item.value}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <motion.a
            href="#contact"
            className="btn hire-me"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
