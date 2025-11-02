import React, { useEffect, useRef, useState } from "react";
import AboutHeader from "./AboutHeader";
import AboutIntro from "./AboutIntro";
import PersonalInfo from "./PersonalInfo";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const About = ({ activeSection, handleNavClick }) => {
  const ref = useRef(null);
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    intro: false,
    personalInfo: false,
    skills: false,
    education: false,
    experience: false,
  });

  useEffect(() => {
    if (activeSection !== "about" || !ref.current) return;

    const section = ref.current;

    const handleScroll = () => {
      const scrollTop = section.scrollTop;

      setVisibleSections((prev) => {
        const newState = { ...prev };

        if (scrollTop < 100 && !prev.header) {
          newState.header = true;
          newState.intro = true;
        }

        if (scrollTop < 110 && !prev.personalInfo) {
          newState.personalInfo = true;
        }

        if (scrollTop < 50 && !prev.skills) {
          newState.skills = true;
        }

        if (scrollTop > 300 && !prev.education && !prev.experience) {
          newState.education = true;
          newState.experience = true;
        }
        if (JSON.stringify(prev) !== JSON.stringify(newState)) {
          return newState;
        }
        return prev;
      });
    };

    if (activeSection === "about") {
      setVisibleSections((prev) => ({
        ...prev,
        header: true,
        intro: true,
      }));
    }

    section.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    if (activeSection !== "about") {
      setVisibleSections({
        header: false,
        intro: false,
        personalInfo: false,
        skills: false,
        education: false,
        experience: false,
      });
    }
  }, [activeSection]);

  return (
    <div
      ref={ref}
      className={`section about ${activeSection === "about" ? "active" : ""}`}
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <div className="container">
        <AboutHeader isVisible={visibleSections.header} />

        <div className="about-content padd-15">
          <AboutIntro isVisible={visibleSections.intro} />

          <div className="row">
            <PersonalInfo
              isVisible={visibleSections.personalInfo}
              handleNavClick={handleNavClick}
            />
            <SkillsSection isVisible={visibleSections.skills} />
          </div>

          <div className="row">
            <EducationSection isVisible={visibleSections.education} />
            <ExperienceSection isVisible={visibleSections.experience} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
