import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutHeader = ({ isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className="row"
      variants={titleVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="section-title padd-15">
        <h2>About Me</h2>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
