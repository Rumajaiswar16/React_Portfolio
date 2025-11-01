import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: (idx) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2 * idx,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const PortfolioItem = ({ img, title, description, link, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

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
      className="portfolio_1 padd-15"
      variants={zoomIn}
      initial="hidden"
      animate={controls}
      custom={index}
    >
      <article className="portfolio__item">
        <div className="portfolio__item--image">
          <img src={img} alt={title} />
        </div>
        <div className="portfolio__item--content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="portfolio__item--cta">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default PortfolioItem;
