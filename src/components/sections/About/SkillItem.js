import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SkillItem = ({ name, percent }) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let currentPercent = 0;
    const interval = setInterval(() => {
      if (currentPercent < percent) {
        currentPercent += 2;
        setDisplayPercent(Math.min(currentPercent, percent));
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, percent]);

  return (
    <motion.div
      className="skill-item padd-15"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <h5>{name}</h5>
      <motion.div className="progress">
        <motion.div
          className="progress-in"
          initial={{ width: "0%" }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <div className="skill-percent">{displayPercent}%</div>
      </motion.div>
    </motion.div>
  );
};

export default SkillItem;
