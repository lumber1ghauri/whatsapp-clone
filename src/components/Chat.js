import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./Chat.css";

const Chat = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(""); 
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [plusDropdownVisible, setPlusDropdownVisible] = useState(false);
  const socket = useRef(null);

  const menuDropdownRef = useRef(null);
  const plusDropdownRef = useRef(null);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io("http://localhost:5050");
    }

    if (selectedChat) {
      const fetchMessages = async () => {
        try {
          console.log("Fetching messages for chatId:", selectedChat.chatId);
          const response = await axios.get(
            `http://localhost:5050/api/messages/${selectedChat.chatId}`
          );
          setMessages(response.data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };
      
      fetchMessages();

      socket.current.on("receiveMessage", (newMessage) => {
        if (newMessage.chatId === selectedChat.chatId) {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      });

      return () => {
        socket.current.off("receiveMessage");
      };
    }
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        chatId: selectedChat.chatId,
        sender: "You",
        message: message.trim(),
        timestamp: new Date(),
      };

      socket.current.emit("sendMessage", newMessage);

      setMessages((prevMessages) => [...prevMessages, newMessage]);
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
            title="Start a video call"
          ></i>
          <i
            className="fas fa-phone"
            title="Start an audio call"
          ></i>
          <i className="fas fa-search" title="Search inside chat"></i>
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
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "You" ? "sent" : "received"}`}
          >
            <p>{msg.message}</p>
            <span className="time">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
