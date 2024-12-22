import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <i className="fab fa-whatsapp logo"></i>
        <h1>WhatsApp</h1>
        <div className="loading-bar"></div>
        <p>
          <i className="fas fa-lock"></i> End-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
