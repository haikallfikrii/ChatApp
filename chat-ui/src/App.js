// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import UserProfile from "./components/UserProfile";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([
    { type: "received", text: "Hi, how are you?" },
    { type: "sent", text: "I'm good, thanks!" },
  ]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { type: "sent", text: message }]);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <ChatList onSelectUser={handleSelectUser} />
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
        {selectedUser && (
          <div className="user-profile-container">
            <UserProfile user={selectedUser} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
