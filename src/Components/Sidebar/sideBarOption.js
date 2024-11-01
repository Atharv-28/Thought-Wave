import React from "react";
import "./sideBarOption.css";

const SideBarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideBarOption;