import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ContactSection from "./ContactSection";
import EmailSection from "./EmailSection";

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

      setVisibleElements((prev) => {
        const newState = { ...prev };

        if (scrollTop < 100 && !prev.mainTitle) {
          newState.mainTitle = true;
        }

        if (scrollTop > 200 && !prev.emailTitle) {
          newState.emailTitle = true;
          newState.responsiveSubtitle = true;
          newState.form = true;
        }

        if (JSON.stringify(prev) !== JSON.stringify(newState)) {
          return newState;
        }
        return prev;
      });
    };

    if (isActive) {
      mainTitleControls.start("visible");
      setTimeout(() => questionTitleControls.start("visible"), 200);
      setTimeout(() => serviceSubtitleControls.start("visible"), 350);
      setTimeout(() => {
        setVisibleElements((prev) => ({ ...prev, contactCards: true }));
      }, 400);
    }

    section.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

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

  useEffect(() => {
    const scrollTop = sectionRef.current?.scrollTop || 0;

    if (scrollTop < 100 && visibleElements.mainTitle) {
      mainTitleControls.start("visible");
      setTimeout(() => questionTitleControls.start("visible"), 200);
      setTimeout(() => serviceSubtitleControls.start("visible"), 350);
    }

    if (scrollTop > 200 && visibleElements.emailTitle) {
      emailTitleControls.start("visible");
      setTimeout(() => responsiveSubtitleControls.start("visible"), 150);
    }
  }, [
    visibleElements.mainTitle,
    visibleElements.emailTitle,
    mainTitleControls,
    questionTitleControls,
    serviceSubtitleControls,
    emailTitleControls,
    responsiveSubtitleControls,
  ]);

  const contactInfo = [
    {
      icon: <i className="fa fa-phone"></i>,
      title: "Call Us On",
      content: "+91 7058424322",
    },
    {
      icon: <i className="fa fa-map-marker-alt"></i>,
      title: "Office",
      content: "Mumbai",
    },
    {
      icon: <i className="fa fa-envelope"></i>,
      title: "Email",
      content: "rumajaiswar1693@gmail.com",
    },
    {
      icon: <i className="fa fa-globe-europe"></i>,
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

        <ContactSection
          questionTitleControls={questionTitleControls}
          serviceSubtitleControls={serviceSubtitleControls}
          contactInfo={contactInfo}
          isActive={isActive}
          visibleContactCards={visibleElements.contactCards}
        />

        <EmailSection
          emailTitleControls={emailTitleControls}
          responsiveSubtitleControls={responsiveSubtitleControls}
          isActive={isActive}
          visibleForm={visibleElements.form}
        />
      </div>
    </section>
  );
};

export default Contact;
