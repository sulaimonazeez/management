import { useState } from "react";
import "./settings.css";

export function Input({ name, type = "text", value, onChange, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
      autoComplete="false"
    />
  );
}

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}

export function Switch({ checked, onCheckedChange }) {
  return (
    <button onClick={onCheckedChange} className={`switch ${checked ? "switch-on" : "switch-off"}`}>
      <div className={`switch-thumb ${checked ? "switch-thumb-on" : "switch-thumb-off"}`}></div>
    </button>
  );
}

export default function SettingsProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="settings-profile">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Input name="name" value={profile.name} onChange={handleProfileChange} placeholder="Full Name" />
          <Input name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email Address" />
          <Input name="phone" value={profile.phone} onChange={handleProfileChange} placeholder="Phone Number" />
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Password Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <Input name="current" type="password" value={password.current} onChange={handlePasswordChange} placeholder="Current Password" />
          <Input name="new" type="password" value={password.new} onChange={handlePasswordChange} placeholder="New Password" />
          <Input name="confirm" type="password" value={password.confirm} onChange={handlePasswordChange} placeholder="Confirm New Password" />
          <Button>Update Password</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="notification-item">
            <span>Email Notifications</span>
            <Switch checked={notifications.email} onCheckedChange={() => handleNotificationChange("email")} />
          </div>
          <div className="notification-item">
            <span>SMS Notifications</span>
            <Switch checked={notifications.sms} onCheckedChange={() => handleNotificationChange("sms")} />
          </div>
          <Button>Save Preferences</Button>
        </CardContent>
      </Card>
    </div>
  );
}
