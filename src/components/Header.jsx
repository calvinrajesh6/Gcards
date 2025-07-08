import React, { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div style={{ 
      ...styles.container, 
      backgroundColor: isDark ? "#1e1e1e" : "#f4f4f4", 
      color: isDark ? "#f4f4f4" : "#333" 
    }}>
      <div style={styles.leftSection}>
        <img
          src="/profile.png"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>G-cards</h1>
      </div>

      <div style={styles.rightSection}>
        <button onClick={toggleTheme} style={{
          ...styles.button,
          backgroundColor: isDark ? "#444" : "#007bff",
          color: isDark ? "#f4f4f4" : "#fff"
        }}>
          {isDark ? "☀️" : "🌙"}
        </button>
        <a href="profile" > <img
          src="/profile.png"
          alt="Profile"
          style={styles.profileImage}
        /></a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s ease",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
    width: "40px",
    marginRight: "10px",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    marginLeft: "15px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
};

export default Header;
