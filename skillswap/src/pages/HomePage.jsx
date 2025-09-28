import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart, FaUserFriends } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";
import { PiTargetDuotone } from "react-icons/pi";
import { PiLightbulbFilamentFill, PiArrowLeftLight } from "react-icons/pi";
import "../index.css";

function HomePage() {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  function handleAboutClick(e) {
    e.preventDefault();
    setShowAbout(true);
    setTimeout(() => {
      document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleLogoClick() {
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBackHome() {
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="page-wrapper">
      {/* NAVBAR */}
      {!showAbout ? (
        <nav className="main-nav">
          <div className="nav-left" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <img src={logo} alt="SkillSwap Logo" className="nav-logo-img" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link" onClick={handleAboutClick}>
                ¿Quiénes somos?
              </a>
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
      ) : (
        <nav className="main-nav about-navbar">
          <div className="nav-left">
            <img src={logo} alt="SkillSwap Logo" className="nav-logo-img" />
          </div>
          <div className="about-back" onClick={handleBackHome}>
            <PiArrowLeftLight size={22} style={{marginRight: "0.35em"}} />
            <span>Volver al inicio</span>
          </div>
        </nav>
      )}

      {/* HERO y LANDING PRINCIPAL */}
      {!showAbout && (
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

          {/* SECCIÓN LANDING NUEVA: ¿Por qué elegir SkillSwap? */}
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
      )}

      {/* ¿Quiénes somos? Landing */}
      {showAbout && (
        <main>
          <section className="about-section" id="about-section">
            <h2 className="about-title">¿Quiénes somos?</h2>
            <p className="about-subtitle">
              Somos un equipo apasionado por conectar personas y democratizar el acceso al conocimiento a través del intercambio de habilidades.
            </p>
            <div className="about-history">
              <h3>Nuestra Historia</h3>
              <p>
                SkillSwap nació de una idea simple pero poderosa: todos tenemos algo que enseñar y algo que aprender. En un mundo donde el conocimiento tradicional está cambiando rápidamente, creemos que las habilidades prácticas y la experiencia real son más valiosas que nunca.
              </p>
              <p>
                Desarrollado durante un hackaton, nuestro proyecto busca crear una comunidad donde el intercambio de conocimientos sea justo, accesible y mutuamente beneficioso para todos los participantes.
              </p>
            </div>

            <div className="about-values-cards">
              <div className="about-value-card">
                <div className="about-value-icon" style={{ background: "#e7f0ff", color: "#5180f7" }}>
                  <FaHeart size={28} />
                </div>
                <h4>Comunidad</h4>
                <p>
                  Creemos en el poder de las conexiones humanas y en construir una comunidad de aprendizaje mutuo.
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon" style={{ background: "#e6f7ea", color: "#25c47c" }}>
                  <FaUserFriends size={28} />
                </div>
                <h4>Inclusión</h4>
                <p>
                  Todos tienen algo valioso que compartir, independientemente de su formación o experiencia previa.
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon" style={{ background: "#f6efff", color: "#7b61ff" }}>
                  <PiLightbulbFilamentFill size={28} />
                </div>
                <h4>Innovación</h4>
                <p>
                  Utilizamos tecnología para hacer que el intercambio de conocimientos sea más fácil y efectivo.
                </p>
              </div>
            </div>

            <h3 className="about-team-title">Nuestro Equipo</h3>
            <div className="about-team-box">
              <p>
                Somos un grupo de desarrolladores, diseñadores y entusiastas del aprendizaje colaborativo, unidos por la visión de democratizar el acceso al conocimiento.
                <br /><br />
                Este proyecto fue desarrollado como parte del <strong>SkillSwap Hackaton 2025</strong>, donde nos propusimos crear una solución innovadora para el intercambio de habilidades.
              </p>
            </div>

            <h3 className="about-call-title">¿Listo para comenzar?</h3>
            <p className="about-call-text">
              Únete a nuestra comunidad y comienza a intercambiar habilidades hoy mismo.
            </p>
            <div className="about-call-buttons">
              <Link to="/signup">
                <button className="about-btn-main">
                  Comenzar Ahora
                </button>
              </Link>
              <button className="about-btn-secondary" onClick={() => navigate("/que-es-skillswap")}>
                Conoce más sobre SkillSwap
              </button>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer>
        <p className="home-footer">© 2025 SkillSwap Hackathon</p>
      </footer>
    </div>
  );
}

export default HomePage;