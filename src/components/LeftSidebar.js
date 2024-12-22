import React, { useState } from "react";
import "./LeftSidebar.css";
import Profile from "./Profile";

const LeftSidebar = ({ onLogout }) => { 
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleIconClick = (feature) => {
    alert(`The ${feature} feature is not developed yet. Please wait for complete development.`);
  };

  const user = {
    name: "Ukasha Zahid",
    profilePicture: "/images/user.png",
    about: "For you, a thousand times over 🍂",
  };

  return (
    <div className="left-sidebar">
      <div className="top-icons">
        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Archive")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Archive")}
        >
          <i className="fas fa-archive"></i>
          {hoveredIcon === "Archive" && <div className="tooltip">Archive</div>}
        </div>

        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Status")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Status")}
        >
          <i className="fas fa-bullseye"></i>
          {hoveredIcon === "Status" && <div className="tooltip">Status</div>}
        </div>

        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Channels")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Channels")}
        >
          <i className="fas fa-comment-dots"></i>
          {hoveredIcon === "Channels" && <div className="tooltip">Channels</div>}
        </div>

        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Groups")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Groups")}
        >
          <i className="fas fa-users"></i>
          {hoveredIcon === "Groups" && <div className="tooltip">Groups</div>}
        </div>

        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Communities")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Communities")}
        >
          <i className="fas fa-circle-notch"></i>
          {hoveredIcon === "Communities" && <div className="tooltip">Communities</div>}
        </div>
      </div>

      <div className="bottom-icons">
        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Profile")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => setShowProfile(true)}
        >
          <img src="/images/user.png" alt="Profile" className="profile-pic" />
          {hoveredIcon === "Profile" && <div className="tooltip">Profile</div>}
        </div>

        <div
          className="sidebar-icon"
          onMouseEnter={() => setHoveredIcon("Settings")}
          onMouseLeave={() => setHoveredIcon("")}
          onClick={() => handleIconClick("Settings")}
        >
          <i className="fas fa-cog"></i>
          {hoveredIcon === "Settings" && <div className="tooltip">Settings</div>}
        </div>
      </div>

      {showProfile && (
        <Profile
          user={user}
          onClose={() => setShowProfile(false)}
          onLogout={onLogout}
        />
      )}
    </div>
  );
};

export default LeftSidebar;
