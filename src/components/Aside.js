import React from "react";

const Aside = ({
  isAsideOpen,
  setIsAsideOpen,
  activeSection,
  handleNavClick,
}) => {
  const navItems = [
    { id: "home", label: "Home", icon: <i class="fa fa-home"></i> },
    { id: "about", label: "About", icon: <i class="fa fa-user"></i> },
    { id: "service", label: "Services", icon: <i class="fa fa-list"></i> },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <i class="fa fa-briefcase"></i>,
    },
    { id: "contact", label: "Contact", icon: <i class="fa fa-comments"></i> },
  ];

  return (
    <aside className={`aside ${isAsideOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="#">
          <span>R</span>uma
        </a>
      </div>
      <button
        className={`nav-toggler ${isAsideOpen ? "open" : ""}`}
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        <span></span>
      </button>
      <nav className="nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
