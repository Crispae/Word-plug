import React, { useState, useCallback } from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react";
import MainContent from "./MainContent";
import AddCitation from "../Plugins/AddCitation";
import AnonymizeAuthor from "../Plugins/AnonymizeAuthor";
import AddImages from "../Plugins/AddImages";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 200,
    height: "100%",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("home");

  const handleLinkClick = useCallback(
    (_ev: React.MouseEvent<HTMLElement>, item?: any) => {
      if (item?.key === "plugins") {
        setOpened((prev) => !prev);
      } else if (item?.key) {
        setSelectedKey(item.key);
      }
    },
    []
  );

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        { name: "Home", url: "#", key: "home", icon: "Home" },
        {
          name: "Plugins",
          url: "#",
          key: "plugins",
          iconProps: { iconName: "PlugDisconnected" },
          isExpanded: opened,
          links: [
            { name: "Add Citation", url: "#", key: "addCitation", icon: "InsertTextBox" },
            { name: "Anonymize Author", url: "#", key: "anonymizeAuthor", icon: "Hide" },
            { name: "Add Images", url: "#", key: "addImages", icon: "Photo2Add" },
          ],
        },
        { name: "Settings", url: "#", key: "settings", icon: "Settings" },
      ],
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "addCitation":
        return <AddCitation />;
      case "anonymizeAuthor":
        return <AnonymizeAuthor />;
      case "addImages":
        return <AddImages />;
      default:
        return <MainContent text="Home content goes here." />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Nav
        styles={navStyles}
        ariaLabel="Navigation menu"
        groups={navLinkGroups}
        onLinkClick={handleLinkClick}
      />
      <div style={{ marginLeft: "16px", padding: "16px", flex: 1,  }}>{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
