import React from "react";

const StyleSwitcher = ({
  isStyleSwitcherOpen,
  setIsStyleSwitcherOpen,
  isDarkMode,
  setIsDarkMode,
  activeColor,
  setActiveColor,
  themeColors,
}) => {
  return (
    <div className={`style-switcher ${isStyleSwitcherOpen ? "open" : ""}`}>
      <button
        className="style-switcher-toggler s-icon"
        onClick={() => setIsStyleSwitcherOpen(!isStyleSwitcherOpen)}
      >
        ⚙️
      </button>
      <button
        className="day-night s-icon"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <h4>Theme Colors</h4>
      <div className="colors">
        {Object.keys(themeColors).map((color) => (
          <span
            key={color}
            className={color}
            onClick={() => setActiveColor(color)}
            style={{
              border: activeColor === color ? "3px solid #fff" : "none",
              boxShadow:
                activeColor === color ? "0 0 5px rgba(0,0,0,0.3)" : "none",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
