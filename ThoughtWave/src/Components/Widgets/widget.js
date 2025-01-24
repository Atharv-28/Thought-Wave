import React, { useState } from "react";
import "./widget.css";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ThoughtBox from "./ThoughtBox/ThoughtBox";

const Widgets = () => {
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);

  const toggleWidgets = () => {
    setIsWidgetsOpen(!isWidgetsOpen);
  };

  return (
    <div className="widget-container">
      <DriveFileRenameOutlineIcon
        className={`widgets__hamburgerIcon ${isWidgetsOpen ? "open" : ""}`}
        onClick={toggleWidgets}
      />
      <div className={`widgets__hamburger ${isWidgetsOpen ? "open" : ""}`}>
        <ThoughtBox />
      </div>
    </div>
  );
};

export default Widgets;
