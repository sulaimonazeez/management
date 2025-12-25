import React from "react";
import { motion } from "framer-motion";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ⚙️ Settings
      </motion.h1>

      {/* ACCOUNT */}
      <motion.section className="settings-card glow" whileHover={{ scale: 1.02 }}>
        <h2>Account</h2>

        <label>Full Name</label>
        <input placeholder="Sulaimon Azeez" />

        <label>Email</label>
        <input placeholder="you@email.com" />

        <button className="btn-primary">Update Profile</button>
      </motion.section>

      {/* SECURITY */}
      <motion.section className="settings-card glow" whileHover={{ scale: 1.02 }}>
        <h2>Security</h2>

        <label>New Password</label>
        <input type="password" placeholder="********" />

        <div className="toggle-row">
          <span>Two-Factor Authentication</span>
          <input type="checkbox" />
        </div>

        <button className="btn-danger">Change Password</button>
      </motion.section>

      {/* APPEARANCE */}
      <motion.section className="settings-card glow" whileHover={{ scale: 1.02 }}>
        <h2>Appearance</h2>

        <div className="toggle-row">
          <span>Dark Mode</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>Animations</span>
          <input type="checkbox" defaultChecked />
        </div>

        <label>Accent Color</label>
        <input type="color" />
      </motion.section>

      {/* NOTIFICATIONS */}
      <motion.section className="settings-card glow" whileHover={{ scale: 1.02 }}>
        <h2>Notifications</h2>

        <div className="toggle-row">
          <span>Email Notifications</span>
          <input type="checkbox" />
        </div>

        <div className="toggle-row">
          <span>Push Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>System Alerts</span>
          <input type="checkbox" />
        </div>
      </motion.section>

      {/* SYSTEM */}
      <motion.section className="settings-card glow" whileHover={{ scale: 1.02 }}>
        <h2>System</h2>

        <label>Language</label>
        <select>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>

        <label>Timezone</label>
        <select>
          <option>GMT +1 (Nigeria)</option>
          <option>UTC</option>
        </select>

        <button className="btn-outline">Reset Preferences</button>
      </motion.section>
    </div>
  );
}