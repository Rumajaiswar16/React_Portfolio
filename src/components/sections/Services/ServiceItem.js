import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 200 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * idx,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const ServiceItem = ({ icon, title, description, idx }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="service-item padd-15"
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      custom={idx}
    >
      <div className="service-item-inner">
        <div className="icon">{icon}</div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
