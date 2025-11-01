import React from "react";
import ServiceItem from "../ServiceItem";

const Services = ({ activeSection }) => {
  const isActive = activeSection === "service";

  const services = [
    {
      icon: <i className="fa fa-mobile-alt"></i>,
      title: "Web Design",
      description:
        "Creative and responsive web design that enhances user experience beautifully.",
    },
    {
      icon: <i className="fa fa-laptop-code"></i>,
      title: "Web Development",
      description:
        "Building dynamic and functional websites with clean, efficient, and modern code.",
    },
    {
      icon: <i className="fa fa-palette"></i>,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces for seamless user experiences.",
    },
    {
      icon: <i className="fa fa-code"></i>,
      title: "Frontend Development",
      description:
        "Creating interactive and responsive web interfaces using modern frontend technologies.",
    },
    {
      icon: <i className="fa fa-search"></i>,
      title: "SEO Optimization",
      description:
        "Improving website visibility and ranking on search engines effectively.",
    },
    {
      icon: <i className="fa fa-bullhorn"></i>,
      title: "Digital Marketing",
      description:
        "Promoting brands online to increase reach, engagement, and conversions.",
    },
  ];

  return (
    <section className={`section service ${isActive ? "active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>

        <div className="row">
          {services.map((service, idx) => (
            <ServiceItem key={idx} {...service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
