import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ContactInfo = ({ icon, title, content, idx, isActive }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, idx * 150);
      return () => clearTimeout(timer);
    } else {
      controls.start("hidden");
    }
  }, [isActive, controls, idx]);

  return (
    <motion.div
      className="contact-info-item padd-15"
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      style={{ cursor: "pointer" }}
    >
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{content}</p>
    </motion.div>
  );
};

export default ContactInfo;
