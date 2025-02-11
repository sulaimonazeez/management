import React from "react";
import "./StudentMessages.css";

export default function StudentMessages() {
  const messages = [
    { id: 1, sender: "Admin", text: "Welcome to the school portal!", time: "10:00 AM" },
    { id: 2, sender: "Teacher", text: "Your assignment is due tomorrow.", time: "11:30 AM" },
    { id: 3, sender: "Admin", text: "Holiday starts next week!", time: "1:00 PM" },
  ];

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message-card">
            <h4>{message.sender}</h4>
            <p>{message.text}</p>
            <span className="message-time">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
