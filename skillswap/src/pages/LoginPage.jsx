import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // corrige la ruta si es diferente
import "../navbar.css";
import "../index.css";

function HomePage() {
  return (
    <div className="page-wrapper">
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
            <Link to="/login">
              <button className="nav-login-btn">Iniciar sesión</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="nav-signup-btn">Registrarse</button>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <section className="hero-section">
          <h1 className="home-logo">SKILLSWAP</h1>
          <p className="home-tagline">Intercambia habilidades. Conecta. Crece.</p>
          <h2 className="home-subtitle">Solo en el mismo lugar.</h2>
          <Link to="/login">
            <button className="hero-cta-btn">¡Únete ahora!</button>
          </Link>
        </section>
      </main>
      <footer>
        <p className="home-footer">© 2025 SkillSwap Hackathon</p>
      </footer>
    </div>
  );
}

export default HomePage;