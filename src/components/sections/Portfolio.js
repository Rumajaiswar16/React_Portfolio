import React from "react";
import PortfolioItem from "../PortfolioItem";
import elearningImage from "../../images/elearning.png";
import mobiriseImage from "../../images/mobirise.png";

const Portfolio = ({ activeSection }) => {
  const isActive = activeSection === "portfolio";

  const projects = [
    {
      img: elearningImage,
      title: "E-Learning Clone Website",
      description:
        "Developed a responsive online learning platform with course browsing, instructor profiles, subscription plans, and blogs. Used HTML, CSS, JavaScript, Bootstrap for a clean, mobile-friendly UI.",
      link: "https://elearning-clone.netlify.app/",
    },
    {
      img: mobiriseImage,
      title: "Mobirise Website",
      description:
        "Built a responsive landing page inspired by Mobirise themes with About, Services, and Contact sections. Applied Bootstrap components for modern design and usability.",
      link: "https://elearning-clone.netlify.app/",
    },
    {
      img: elearningImage,
      title: "E-Learning Clone Website",
      description:
        "Developed a responsive online learning platform with course browsing, instructor profiles, subscription plans, and blogs. Used HTML, CSS, JavaScript, Bootstrap for a clean, mobile-friendly UI.",
      link: "https://elearning-clone.netlify.app/",
    },
    {
      img: mobiriseImage,
      title: "Mobirise Website",
      description:
        "Built a responsive landing page inspired by Mobirise themes with About, Services, and Contact sections. Applied Bootstrap components for modern design and usability.",
      link: "https://elearning-clone.netlify.app/",
    },
  ];

  return (
    <section className={`section portfolio ${isActive ? "active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="section__header">
            <h2>My Recent Projects</h2>
            <p>Here are some of my recent projects</p>
          </div>
        </div>

        <div className="row">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} {...project} index={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
