import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillItem from "../SkillItem";
import Timeline from "../Timeline";

const About = ({ activeSection, handleNavClick }) => {
  const ref = useRef(null);
  const [visibleElements, setVisibleElements] = useState({
    mainTitle: false,
    aboutContent: false,
    personalInfo: false,
    skills: false,
    education: false,
    experience: false,
  });

  const mainTitleControls = useAnimation();
  const aboutContentControls = useAnimation();
  const personalInfoControls = useAnimation();
  const skillsControls = useAnimation();
  const educationControls = useAnimation();
  const experienceControls = useAnimation();

  const skills = [
    { name: "HTML", percent: 96 },
    { name: "CSS", percent: 76 },
    { name: "JAVASCRIPT", percent: 86 },
    { name: "BOOTSTRAP", percent: 78 },
    { name: "REACT", percent: 60 },
    { name: "SQL", percent: 55 },
    { name: "PYTHON", percent: 70 },
    { name: "DJANGO", percent: 55 },
  ];

  const education = [
    {
      date: "2023-2024",
      title: "Bachelor's in Information Technology",
      description:
        "I have completed my Bachelor of Science in Information Technology (B.Sc. IT), where I gained a strong foundation in programming, web development, databases, and software concepts.",
    },
    {
      date: "2019-2021",
      title: "Higher Secondary Certificate",
      description: "Swami Vivekanand Vidyalaya & Junior College - 70%",
    },
    {
      date: "2018-2019",
      title: "Secondary School Certificate",
      description: "Vidya Varidhi Vidyalaya & Junior College - 70.17%",
    },
  ];

  const experience = [
    {
      date: "2023-2024",
      title: "Frontend Internship",
      description:
        "Developed responsive web pages using React, Bootstrap and CSS animations.",
    },
    {
      date: "2022-2023",
      title: "Web Design Project",
      description:
        "Created a dynamic portfolio site using HTML, CSS, and JavaScript.",
    },
  ];

  useEffect(() => {
    if (activeSection !== "about" || !ref.current) return;

    const section = ref.current;

    const handleScroll = () => {
      const scrollTop = section.scrollTop;

      if (scrollTop < 100 && !visibleElements.mainTitle) {
        setVisibleElements((prev) => ({ ...prev, mainTitle: true }));
        mainTitleControls.start("visible");
        setTimeout(() => aboutContentControls.start("visible"), 200);
      }

      if (scrollTop < 110 && !visibleElements.personalInfo) {
        setVisibleElements((prev) => ({ ...prev, personalInfo: true }));
        personalInfoControls.start("visible");
      }

      if (scrollTop < 50 && !visibleElements.skills) {
        setVisibleElements((prev) => ({ ...prev, skills: true }));
        skillsControls.start("visible");
      }

      if (
        scrollTop > 300 &&
        !visibleElements.education &&
        !visibleElements.experience
      ) {
        setVisibleElements((prev) => ({
          ...prev,
          education: true,
          experience: true,
        }));
        educationControls.start("visible");
        setTimeout(() => experienceControls.start("visible"), 150);
      }
    };

    if (activeSection === "about") {
      mainTitleControls.start("visible");
      setTimeout(() => aboutContentControls.start("visible"), 200);
    }

    section.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, visibleElements]);

  useEffect(() => {
    if (activeSection !== "about") {
      mainTitleControls.start("hidden");
      aboutContentControls.start("hidden");
      personalInfoControls.start("hidden");
      skillsControls.start("hidden");
      educationControls.start("hidden");
      experienceControls.start("hidden");
      setVisibleElements({
        mainTitle: false,
        aboutContent: false,
        personalInfo: false,
        skills: false,
        education: false,
        experience: false,
      });
    }
  }, [activeSection]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const leftBounce = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.9,
      },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 1.2 },
    },
  };

  const leftSlide = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className={`section about ${activeSection === "about" ? "active" : ""}`}
    >
      <div className="container">
        <motion.div
          className="row"
          variants={titleVariants}
          initial="hidden"
          animate={mainTitleControls}
        >
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </motion.div>

        <motion.div
          className="row"
          variants={leftBounce}
          initial="hidden"
          animate={aboutContentControls}
        >
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Ruma Jaiswar and <span>Web Developer</span>
                </h3>
                <p>
                  I’m Ruma Jaiswar, a passionate and detail-oriented Front-End
                  Web Developer with a strong interest in creating responsive
                  and user-friendly web applications. I have hands-on experience
                  in HTML, CSS, JavaScript, React.js, and Bootstrap, which I use
                  to build clean and interactive user interfaces. Along with
                  frontend development, I also have knowledge of SQL and Python,
                  which helps me understand backend logic and database
                  management. I enjoy learning new technologies, improving my
                  coding skills, and turning creative ideas into functional web
                  experiences.
                </p>
              </div>
            </div>

            <motion.div
              className="row"
              variants={fadeUp}
              initial="hidden"
              animate={personalInfoControls}
            >
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>16 Sep 2003</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>22</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Website : <span>www.domain.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>rumajaiswar1693@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>BSC-IT</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>+91 7058424322</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City : <span>Mumbai</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <motion.a
                      href="#contact"
                      className="btn hire-me"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("contact");
                      }}
                    >
                      Hire Me
                    </motion.a>
                  </div>
                </div>
              </div>

              <motion.div
                className="skills padd-15"
                initial="hidden"
                animate={skillsControls}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
              >
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={slideRight}>
                    <SkillItem name={skill.name} percent={skill.percent} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="row"
              variants={fadeUp}
              initial="hidden"
              animate={educationControls}
            >
              <motion.div className="education padd-15" variants={leftSlide}>
                <h3 className="title">Education</h3>
                <Timeline items={education} />
              </motion.div>
              <motion.div
                className="experience padd-15"
                variants={rightSlide}
                initial="hidden"
                animate={experienceControls}
              >
                <h3 className="title">Experience</h3>
                <Timeline items={experience} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
