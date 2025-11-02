import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";

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

const ContactSection = ({
  questionTitleControls,
  serviceSubtitleControls,
  contactInfo,
  isActive,
  visibleContactCards,
}) => {
  return (
    <>
      <motion.h3
        className="contact-title padd-15"
        variants={titleVariants}
        initial="hidden"
        animate={questionTitleControls}
      >
        Have You Any Questions ?
      </motion.h3>

      <motion.h4
        className="contact-sub-title padd-15"
        variants={subtitleVariants}
        initial="hidden"
        animate={serviceSubtitleControls}
      >
        I'M AT YOUR SERVICES
      </motion.h4>

      <div className="row">
        {contactInfo.map((info, idx) => (
          <ContactInfo
            key={idx}
            {...info}
            idx={idx}
            isActive={isActive && visibleContactCards}
          />
        ))}
      </div>
    </>
  );
};

export default ContactSection;
