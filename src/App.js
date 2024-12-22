import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import LeftSidebar from "./components/LeftSidebar";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/Login";

import "./App.css";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const [chats] = useState([
    {
      id: 1,
      name: "Haseeb Karachi",
      profilePicture: "/images/user.jpg",
      messages: [
        { text: "Hey, how are you?", sender: "John", time: "11:00 AM" },
        { text: "I’m good, thanks!", sender: "You", time: "11:01 AM" },
      ],
    },
    {
      id: 2,
      name: "Abdul Rehman",
      profilePicture: "/images/user2.jpg",
      messages: [
        { text: "Hi! Long time no see.", sender: "Jane", time: "10:00 AM" },
        { text: "Yeah, it’s been a while.", sender: "You", time: "10:01 AM" },
      ],
    },
    {
      id: 3,
      name: "Hassan Iftikhar",
      profilePicture: "/images/user3.jpg",
      messages: [
        { text: "Hey, how are you?", sender: "John", time: "11:00 AM" },
        { text: "I'm good, thanks!", sender: "You", time: "11:01 AM" },
      ],
    },
    {
      id: 4,
      name: "Usman Shahid",
      profilePicture: "/images/user4.jpg",
      messages: [
        { text: "Hi! Long time no see.", sender: "Jane", time: "10:00 AM" },
        { text: "Yes, it's been a while!", sender: "You", time: "10:05 AM" },
      ],
    },
    {
      id: 5,
      name: "Muaz",
      profilePicture: "/images/user5.jpg",
      messages: [
        { text: "Did you finish the project?", sender: "You", time: "9:45 AM" },
        { text: "Yes, I sent it this morning.", sender: "Chris", time: "9:46 AM" },
      ],
    },
    {
      id: 6,
      name: "Waleed Baig",
      profilePicture: "/images/user6.jpg",
      messages: [
        { text: "Are you joining the meeting?", sender: "Sarah", time: "8:30 AM" },
        { text: "I'll be there in 5 minutes.", sender: "You", time: "8:31 AM" },
      ],
    },
    {
      id: 7,
      name: "Ikram Bhai",
      profilePicture: "/images/user7.jpg",
      messages: [
        { text: "Good morning! Ready for the mission?", sender: "Steve", time: "7:00 AM" },
        { text: "Always ready!", sender: "You", time: "7:05 AM" },
      ],
    },
    {
      id: 8,
      name: "Aqdas IT 21",
      profilePicture: "/images/user8.jpg",
      messages: [
        { text: "Can we discuss the project tonight?", sender: "Bruce", time: "11:00 PM" },
        { text: "Sure, I'll call you.", sender: "You", time: "11:01 PM" },
      ],
    },
    {
      id: 9,
      name: "Wasim Iqbal",
      profilePicture: "/images/user9.jpg",
      messages: [
        { text: "Did you check the new updates?", sender: "Diana", time: "4:15 PM" },
        { text: "Yes, looks great!", sender: "You", time: "4:16 PM" },
      ],
    },
    {
      id: 10,
      name: "Peter Parker",
      profilePicture: "/images/user10.jpg",
      messages: [
        { text: "The photos are amazing!", sender: "Peter", time: "2:30 PM" },
        { text: "Thanks! Glad you liked them.", sender: "You", time: "2:31 PM" },
      ],
    },
    {
      id: 11,
      name: "Clark Kent",
      profilePicture: "/images/user11.jpg",
      messages: [
        { text: "Can we reschedule the meeting?", sender: "Clark", time: "5:45 PM" },
        { text: "No problem, let me know the new time.", sender: "You", time: "5:46 PM" },
      ],
    },
    {
      id: 12,
      name: "Barry Allen",
      profilePicture: "/images/user12.jpg",
      messages: [
        { text: "I'll be there in 10 minutes.", sender: "Barry", time: "6:00 PM" },
        { text: "Alright, see you soon!", sender: "You", time: "6:01 PM" },
      ],
    },
  ]);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 5000);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedChat(null); 
  };

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  return (
    <div className="app">
      <div className="content-container">
        <LeftSidebar onLogout={handleLogout} />
        <Sidebar chats={chats} setSelectedChat={setSelectedChat} />
        <Chat selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default App;
