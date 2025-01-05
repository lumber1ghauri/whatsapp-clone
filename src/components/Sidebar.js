import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ chats, setSelectedChat }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <div className="actions">
          <i className="fas fa-ellipsis-v" onClick={toggleDropdown}></i>
          {dropdownVisible && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <ul>
                <li onClick={() => setDropdownVisible(false)}>New group</li>
                <li onClick={() => setDropdownVisible(false)}>Starred messages</li>
                <li onClick={() => setDropdownVisible(false)}>Select chats</li>
                <li onClick={() => setDropdownVisible(false)}>Log out</li>
                <li onClick={() => setDropdownVisible(false)}>Get WhatsApp for Windows</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="search-input"
          onChange={(e) => console.log("Search input:", e.target.value)}
        />
      </div>
      <ul className="chat-list">
        {chats && chats.length > 0 ? (
          chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="chat-item"
            >
              <img
                src={chat.profilePicture}
                alt={chat.name}
                className="chat-profile-pic"
              />
              <div className="chat-details">
                <strong className="chat-name">{chat.name}</strong>
                <p className="chat-last-message">
                  {chat.messages?.[chat.messages.length - 1]?.text || "No messages yet"}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="no-chats-message">No chats available</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
