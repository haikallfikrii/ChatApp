// src/components/ChatList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://18.143.79.95/api/chatSystem/users/list")
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="chat-list">
      <input
        type="text"
        placeholder="Search Contact"
        className="search-input"
      />
      {users.map((user) => (
        <div
          key={user.id}
          className="chat-user"
          onClick={() => onSelectUser(user)}
        >
          <img
            src={user.profileImage}
            alt={user.username}
            className="user-avatar"
          />
          <div className="user-info">
            <h4>{user.username}</h4>
            <p>{user.position}</p>
          </div>
        </div>
      ))}
      <div className="meeting-schedule">
        <button className="meeting-button">Meeting</button>
        <button className="schedule-button">Schedule</button>
      </div>
      <div className="groups">
        <h4>Groups (5)</h4>
        <ul>
          <li>App Development</li>
          <li>UI/UX Designs</li>
          <li>iSpring ABC Team</li>
          <li>Marketing</li>
          <li>Accounts and Sales Team</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
