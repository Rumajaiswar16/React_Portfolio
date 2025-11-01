import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

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

const Contact = ({ activeSection }) => {
  const isActive = activeSection === "contact";
  const sectionRef = useRef(null);

  const [visibleElements, setVisibleElements] = useState({
    mainTitle: false,
    questionTitle: false,
    serviceSubtitle: false,
    contactCards: false,
    emailTitle: false,
    responsiveSubtitle: false,
    form: false,
  });

  const mainTitleControls = useAnimation();
  const questionTitleControls = useAnimation();
  const serviceSubtitleControls = useAnimation();
  const emailTitleControls = useAnimation();
  const responsiveSubtitleControls = useAnimation();

  useEffect(() => {
    if (!isActive || !sectionRef.current) return;

    const section = sectionRef.current;

    const handleScroll = () => {
      const scrollTop = section.scrollTop;

      if (scrollTop < 100 && !visibleElements.mainTitle) {
        setVisibleElements((prev) => ({ ...prev, mainTitle: true }));
        mainTitleControls.start("visible");
        setTimeout(() => questionTitleControls.start("visible"), 200);
        setTimeout(() => serviceSubtitleControls.start("visible"), 350);
        setTimeout(
          () => setVisibleElements((prev) => ({ ...prev, contactCards: true })),
          400
        );
      }

      if (scrollTop > 200 && !visibleElements.emailTitle) {
        setVisibleElements((prev) => ({
          ...prev,
          emailTitle: true,
          responsiveSubtitle: true,
          form: true,
        }));
        emailTitleControls.start("visible");
        setTimeout(() => responsiveSubtitleControls.start("visible"), 150);
      }
    };

    if (isActive) {
      mainTitleControls.start("visible");
      setTimeout(() => questionTitleControls.start("visible"), 200);
      setTimeout(() => serviceSubtitleControls.start("visible"), 350);
      setTimeout(
        () => setVisibleElements((prev) => ({ ...prev, contactCards: true })),
        400
      );
    }

    section.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, [
    isActive,
    visibleElements,
    mainTitleControls,
    questionTitleControls,
    serviceSubtitleControls,
    emailTitleControls,
    responsiveSubtitleControls,
  ]);

  useEffect(() => {
    if (!isActive) {
      mainTitleControls.start("hidden");
      questionTitleControls.start("hidden");
      serviceSubtitleControls.start("hidden");
      emailTitleControls.start("hidden");
      responsiveSubtitleControls.start("hidden");
      setVisibleElements({
        mainTitle: false,
        questionTitle: false,
        serviceSubtitle: false,
        contactCards: false,
        emailTitle: false,
        responsiveSubtitle: false,
        form: false,
      });
    }
  }, [
    isActive,
    mainTitleControls,
    questionTitleControls,
    serviceSubtitleControls,
    emailTitleControls,
    responsiveSubtitleControls,
  ]);

  const contactInfo = [
    {
      icon: <i class="fa fa-phone"></i>,
      title: "Call Us On",
      content: "+91 7058424322",
    },
    {
      icon: <i class="fa fa-map-marker-alt"></i>,
      title: "Office",
      content: "Mumbai",
    },
    {
      icon: <i class="fa fa-envelope"></i>,
      title: "Email",
      content: "rumajaiswar1693@gmail.com",
    },
    {
      icon: <i class="fa fa-globe-europe"></i>,
      title: "Website",
      content: "www.domain.com",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`section contact ${isActive ? "active" : ""}`}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className="section-title padd-15"
            variants={titleVariants}
            initial="hidden"
            animate={mainTitleControls}
          >
            <h2>Contact Me</h2>
          </motion.div>
        </div>

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
              isActive={isActive && visibleElements.contactCards}
            />
          ))}
        </div>

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

        <ContactForm isActive={isActive && visibleElements.form} />
      </div>
    </section>
  );
};

export default Contact;
