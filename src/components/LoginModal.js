import React, { useState } from "react";
import axios from "axios";
import "./LoginModal.css";

const LoginModal = ({ setToken, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5050/api/auth/login", {
        username,
        password,
      });
      setToken(response.data.token);
      onClose();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;