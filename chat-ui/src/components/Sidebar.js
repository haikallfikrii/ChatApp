// src/components/Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComments,
  faUsers,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faComments} />
      </div>
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faUsers} />
      </div>
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
};

export default Sidebar;
