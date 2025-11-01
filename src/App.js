import React, { useState, useEffect } from "react";
import Aside from "./components/Aside";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import StyleSwitcher from "./components/StyleSwitcher";
import "./styles/App.css";

const THEME_COLORS = {
  "color-1": "#ec1839",
  "color-2": "#fa5b0f",
  "color-3": "#37b182",
  "color-4": "#1854b4",
  "color-5": "#f021b2",
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeColor, setActiveColor] = useState("color-1");
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--skin-color",
      THEME_COLORS[activeColor]
    );
  }, [activeColor]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1200) {
      setIsAsideOpen(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen color={THEME_COLORS[activeColor]} />;
  }

  return (
    <div className="portfolio-app">
      <Aside
        isAsideOpen={isAsideOpen}
        setIsAsideOpen={setIsAsideOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <main className={`main-content ${isAsideOpen ? "open" : ""}`}>
        <Home activeSection={activeSection} handleNavClick={handleNavClick} />
        <About activeSection={activeSection} handleNavClick={handleNavClick} />
        <Services activeSection={activeSection} />
        <Portfolio activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </main>

      <StyleSwitcher
        isStyleSwitcherOpen={isStyleSwitcherOpen}
        setIsStyleSwitcherOpen={setIsStyleSwitcherOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        themeColors={THEME_COLORS}
      />
    </div>
  );
}

export default App;
