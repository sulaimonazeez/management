import React from "react";
import "./UserProfile.css";
import profile from "./student/1691413082957.jpg";
export default function UserProfile() {
  const user = {
    profilePic: profile,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
}
