import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const EmailSection = ({
  emailTitleControls,
  responsiveSubtitleControls,
  isActive,
  visibleForm,
}) => {
  return (
    <>
      <motion.h3
        className="contact-title padd-15"
        variants={titleVariants}
        initial="hidden"
        animate={emailTitleControls}
      >
        SEND ME AN EMAIL
      </motion.h3>

      <motion.h4
        className="contact-sub-title padd-15"
        variants={subtitleVariants}
        initial="hidden"
        animate={responsiveSubtitleControls}
      >
        I'M VERY RESPONSIVE TO MESSAGES
      </motion.h4>

      <ContactForm isActive={isActive && visibleForm} />
    </>
  );
};

export default EmailSection;
