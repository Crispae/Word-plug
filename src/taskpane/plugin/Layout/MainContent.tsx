import React from "react";

const MainContent: React.FC<{ text: string }> = ({ text }) => {
  const pluginInfo = [
    "Add Citation: Easily insert references and citations in your documents.",
    "Anonymize Author: Protect identities by anonymizing author information.",
    "Add Images: Enhance your content by adding images seamlessly.",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      {/* Logo */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/assets/bfr.jpg" // Replace with your logo URL
          alt="Logo"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      </div>

      {/* Main Text */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Welcome to the App!</h1>
        <p style={{ fontSize: "16px", color: "#555" }}>{text}</p>
      </div>

      {/* Plugins Information */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Available Plugins:</h2>
        <ul style={{ paddingLeft: "20px", fontSize: "16px", color: "#333" }}>
          {pluginInfo.map((info, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
