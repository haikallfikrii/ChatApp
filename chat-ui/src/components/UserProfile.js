// src/components/UserProfile.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img
        src={user.profileImage}
        alt="User Avatar"
        className="user-avatar-large"
      />
      <h2>{user.username}</h2>
      <p>{user.position}</p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} /> {user.address}
      </p>
      <div className="user-info">
        <p>
          <FontAwesomeIcon icon={faPhone} /> {user.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {user.email}
        </p>
      </div>
      <div className="group-participants">
        <h3>Group Participants</h3>
        <p>Marketing</p>
      </div>
      <div className="media-section">
        <h3>Media</h3>
        <div className="media-images">
          <img src="https://picsum.photos/seed/picsum/50/50" alt="media" />
          <img src="https://picsum.photos/seed/picsum/50/50" alt="media" />
          <img src="https://picsum.photos/seed/picsum/50/50" alt="media" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
