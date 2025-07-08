import React from "react";

function Card() {
  return (
    <div style={styles.container}>
      <img
        src="/Luffy.png" // Use your image
        alt="Profile"
        style={styles.profile}
      />

      <h2 style={styles.username}>USERNAME</h2>

      <hr style={styles.line} />

      <div style={styles.section}>
        <h4 style={styles.label}>Experience:</h4>
        <p style={styles.detail}>3 Years</p>
      </div>

      <hr style={styles.line} />

      <div style={styles.section}>
        <h4 style={styles.label}>Games:</h4>
        <ul style={styles.gamesList}>
          <li>Valo</li>
          <li>COD</li>
          <li>COE</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    height: "auto",
    minHeight: "370px",
    backgroundColor: "#f9f9f9",
    borderRadius: "14px",
    padding: "25px 20px 35px", // Extra bottom padding
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#222",
  },
  profile: {
    width: "85px",
    height: "85px",
    borderRadius: "50%", // Perfect circle
    objectFit: "cover",
    marginBottom: "12px",
  },
  username: {
    fontSize: "24px",
    fontFamily: "'Bebas Neue', cursive",
    margin: "5px 0 15px",
    letterSpacing: "1px",
  },
  line: {
    width: "90%",
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "10px 0",
  },
  section: {
    width: "100%",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  label: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "3px",
  },
  detail: {
    fontSize: "16px",
    marginTop: "0px",
    marginBottom: "10px",
    color: "#333",
  },
  gamesList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginTop: "5px",
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export default Card;
