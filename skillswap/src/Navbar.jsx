import React from "react";


function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
      </div>
      <ul style={styles.links}>
        <li style={styles.link}>¿Quiénes somos?</li>
        <li style={styles.link}>¿Qué es SkillSwap?</li>
        <li>
          <button style={styles.button}>SkillSwap</button>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default NavBar;
