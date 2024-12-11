import React from "react";
import { Icon, FontIcon } from '@fluentui/react';
import AnonymizeAuthor from "../Plugins/AnonymizeAuthor";

const MainContent: React.FC = () => {
  const pluginInfo = [
    {
      icon: <Icon iconName="InsertTextBox" />
      ,
      label: "Add Citation",
      description: "Easily insert references and citations in your documents.",
    },
    {
      icon:<Icon iconName="Hide" />
      ,
      label: "Anonymize Author",
      description: "Hide the author's identity to ensure anonymity.",
    },
    {
      icon: <Icon iconName="Photo2Add" />
      ,
      label: "Insert Templates",
      description: "Quickly insert pre-defined templates into your documents.",
    },
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
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Office-plugins</h1>
      </div>

      {/* Plugins Information */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <ul style={{ paddingLeft: "20px", fontSize: "16px", color: "#333" }}>
          {pluginInfo.map((info, index) => (
            <li key={index} style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
              
              <div >
                <span style={{ marginRight: "10px", fontSize: "20px" }}>{info.icon}</span>
                <strong>{info.label}</strong>
                <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#555" }}>{info.description}</p>
              </div>


            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
