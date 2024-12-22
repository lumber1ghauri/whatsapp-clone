import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";

const Chat = ({ selectedChat }) => {
  const [message, setMessage] = useState(""); 
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [plusDropdownVisible, setPlusDropdownVisible] = useState(false);

  const menuDropdownRef = useRef(null);
  const plusDropdownRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      selectedChat.messages.push({
        text: message,
        sender: "You",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleMenuDropdown = (e) => {
    e.stopPropagation();
    setMenuDropdownVisible(!menuDropdownVisible);
    setPlusDropdownVisible(false);
  };

  const togglePlusDropdown = (e) => {
    e.stopPropagation();
    setPlusDropdownVisible(!plusDropdownVisible);
    setMenuDropdownVisible(false);
  };

  const closeDropdowns = (e) => {
    if (
      menuDropdownRef?.current &&
      !menuDropdownRef.current.contains(e.target) &&
      plusDropdownRef?.current &&
      !plusDropdownRef.current.contains(e.target)
    ) {
      setMenuDropdownVisible(false);
      setPlusDropdownVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        setMenuDropdownVisible(false);
        setPlusDropdownVisible(false);
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", closeDropdowns);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleCallClick = (type) => {
    alert(`You have to use your mobile phone to ${type} call.`);
  };
  const handleSearchClick = () => {
    alert('The search option will be available soon')
  }
  const handleMicClick = () =>
  {
    alert('Microphone feature is not available for now')
  }
  if (!selectedChat) {
    return (
      <div className="chat-placeholder">
        <div className="placeholder-content">
          <i className="fab fa-whatsapp placeholder-logo"></i>
          <h2>WhatsApp for Windows</h2>
          <p>
            Send and receive messages without keeping your phone online. <br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
          <div className="encryption">
            <i className="fas fa-lock"></i>
            <span>End-to-end encrypted</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-left">
          <img
            src={selectedChat.profilePicture}
            alt={selectedChat.name}
            className="contact-pic"
          />
          <div className="chat-info">
            <h3>{selectedChat.name}</h3>
            <p>Online</p>
          </div>
        </div>
        <div className="chat-header-right">
          <i
            className="fas fa-video"
            onClick={() => handleCallClick("video")}
            title="Start a video call"
          ></i>
          <i
            className="fas fa-phone"
            onClick={() => handleCallClick("audio")}
            title="Start an audio call"
          ></i>
          <i className="fas fa-search"
          onClick={()=> handleSearchClick("Search")}
          title="Search inside chat"></i>
          <i
            className="fas fa-ellipsis-v dropdown-toggle"
            onClick={toggleMenuDropdown}
          ></i>
          {menuDropdownVisible && (
            <div className="dropdown-menu" ref={menuDropdownRef}>
              <ul>
                <li>Contact info</li>
                <li>Select messages</li>
                <li>Disappearing messages</li>
                <li>Clear chat</li>
                <li>Delete chat</li>
                <li>Close chat</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="messages">
        {selectedChat.messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "You" ? "sent" : "received"}`}
          >
            <p>{msg.text}</p>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="chat-input">
        <i
          className="fas fa-plus"
          onClick={togglePlusDropdown}
          title="More options"
        ></i>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        {message.trim() ? (
          <button onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i> {}
          </button>
        ) : (
          <i className="fas fa-microphone"
          onClick={()=> handleMicClick("Mic")}
          title="Click on Mic"></i>
        )}
        {/* Plus Dropdown */}
        {plusDropdownVisible && (
          <div className="dropdown-menu plus-dropdown" ref={plusDropdownRef}>
            <ul>
              <li>
                <i className="fas fa-file-alt"></i> Document
              </li>
              <li>
                <i className="fas fa-image"></i> Photos & videos
              </li>
              <li>
                <i className="fas fa-camera"></i> Camera
              </li>
              <li>
                <i className="fas fa-user"></i> Contact
              </li>
              <li>
                <i className="fas fa-poll"></i> Poll
              </li>
              <li>
                <i className="fas fa-sticky-note"></i> New sticker
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
