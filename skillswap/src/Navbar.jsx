import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="nav-left">
        <img src={logo} alt="SkillSwap Logo" className="nav-logo-img" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/quienes-somos" className="nav-link">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link to="/que-es-skillswap" className="nav-link">¿Qué es SkillSwap?</Link>
        </li>
        <li>
  <a href="#login" className="nav-link nav-link-strong" onClick={handleLoginClick}>
    Iniciar sesión
  </a>
</li>
        <li>
          <Link to="/signup">
            <button className="nav-signup-btn">Registrarse</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;