import React, { useEffect, useRef } from "react";
import "./Profile.css";

const Profile = ({ onClose, onLogout }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);
  const user = {
    name: "Ukasha Zahid",
    profilePicture: "/images/user.png",
    about: "For you, a thousand times over 🍂",
  };

  return (
    <div className="profile-modal">
      <div
        className="profile-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Header */}
        <h2>Profile</h2>

        {/* Profile Image */}
        <div className="profile-photo-container">
          <div className="profile-photo">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>

        {/* Name Section */}
        <div className="profile-info">
          <h3>Your name</h3>
          <div className="editable-field">
            <p>{user.name}</p>
          </div>
          <p className="info-text">
            This is not your username or PIN. This name will be visible to your
            WhatsApp contacts.
          </p>
        </div>

        {/* About Section */}
        <div className="profile-info">
          <h3>About</h3>
          <div className="editable-field">
            <p>{user.about}</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="logout-section">
          <button className="logout-button" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
