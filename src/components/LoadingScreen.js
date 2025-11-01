import React from "react";

const LoadingScreen = ({ color }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "4px solid rgba(255, 255, 255, 0.3)",
          borderTop: "4px solid #ffffff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "30px",
        }}
      ></div>
      <div
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
