import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ items }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="row">
      <div className="timeline-box padd-15">
        <div className="timeline shadow-dark">
          {items.map((item, idx) => (
            <motion.div
              className="timeline-item"
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
            >
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i>
                {item.date}
              </h3>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
