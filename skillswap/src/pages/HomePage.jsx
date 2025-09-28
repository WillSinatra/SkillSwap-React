import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";
import { PiTargetDuotone } from "react-icons/pi";
import logo from "../assets/logo.png";
import "../index.css";

function HomePage() {
  return (
    <div className="page-wrapper">
      {/* NAVBAR */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src={logo} alt="SkillSwap Logo" className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/quienes-somos" className="nav-link">
              ¿Quiénes somos?
            </Link>
          </li>
          <li>
            <Link to="/que-es-skillswap" className="nav-link">
              ¿Qué es SkillSwap?
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link nav-link-strong">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero-section">
          <h1 className="home-logo">SKILLSWAP</h1>
          <p className="home-tagline">
            Intercambia habilidades. Conecta. Crece.
          </p>
          <p className="home-subtitle">
            Only in the same place.
          </p>
          <div className="hero-buttons">
            <Link to="/signup">
              <button className="hero-btn-main">
                Comenzar Ahora <span style={{fontSize: "1.2em"}}>&rarr;</span>
              </button>
            </Link>
            <Link to="/que-es-skillswap">
              <button className="hero-btn-secondary">
                Saber Más
              </button>
            </Link>
          </div>
        </section>
      </main>


     


<main>
  <section className="hero-section">
    {/* ...todo tu hero... */}
  </section>

  {/* SECCIÓN LANDING NUEVA */}
  <section className="why-section">
    <h2 className="why-title">¿Por qué elegir SkillSwap?</h2>
    <p className="why-subtitle">
      Una plataforma innovadora que conecta personas con habilidades complementarias
    </p>
    <div className="why-cards">
      <div className="why-card">
        <div className="why-icon why-icon-blue">
          <FaUserFriends size={36} />
        </div>
        <h3>Conecta</h3>
        <p>
          Encuentra personas con las habilidades que necesitas y comparte las tuyas
        </p>
      </div>
      <div className="why-card">
        <div className="why-icon why-icon-green">
          <LuRepeat size={36} />
        </div>
        <h3>Intercambia</h3>
        <p>
          Realiza intercambios justos de conocimientos y habilidades
        </p>
      </div>
      <div className="why-card">
        <div className="why-icon why-icon-purple">
          <PiTargetDuotone size={36} />
        </div>
        <h3>Crece</h3>
        <p>
          Desarrolla nuevas competencias mientras ayudas a otros a crecer
        </p>
      </div>
    </div>
  </section>
</main>


      {/* FOOTER */}
      <footer>
        <p className="home-footer">© 2025 SkillSwap Hackathon</p>
      </footer>
    </div>
  );
}

export default HomePage;