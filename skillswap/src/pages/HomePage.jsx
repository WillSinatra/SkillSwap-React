import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart, FaUserFriends, FaRegComments } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";
import { PiTargetDuotone, PiLightbulbFilamentFill, PiArrowLeftLight, PiCheckCircleDuotone, PiStarDuotone } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "../index.css";

function HomePage() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWhatIs, setShowWhatIs] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  function handleAboutClick(e) {
    e.preventDefault();
    setShowAbout(true);
    setShowWhatIs(false);
    setShowRegister(false);
    setTimeout(() => {
      document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleWhatIsClick(e) {
    e.preventDefault();
    setShowWhatIs(true);
    setShowAbout(false);
    setShowRegister(false);
    setTimeout(() => {
      document.getElementById("what-is-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleRegisterClick(e) {
    e.preventDefault();
    setShowRegister(true);
    setShowAbout(false);
    setShowWhatIs(false);
    setTimeout(() => {
      document.getElementById("register-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleLogoClick() {
    setShowAbout(false);
    setShowWhatIs(false);
    setShowRegister(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBackHome() {
    setShowAbout(false);
    setShowWhatIs(false);
    setShowRegister(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleConoceEquipo() {
    setShowWhatIs(false);
    setShowRegister(false);
    setShowAbout(true);
    setTimeout(() => {
      document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div className="page-wrapper">
      {/* NAVBAR */}
      {(!showAbout && !showWhatIs && !showRegister) ? (
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
              <a href="#what-is" className="nav-link" onClick={handleWhatIsClick}>
                ¿Qué es SkillSwap?
              </a>
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
      {(!showAbout && !showWhatIs && !showRegister) && (
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
              <button className="hero-btn-main" onClick={handleRegisterClick}>
                Comenzar Ahora <span style={{fontSize: "1.2em"}}>&rarr;</span>
              </button>
              <a href="#what-is" className="hero-btn-secondary" onClick={handleWhatIsClick}>
                Saber Más
              </a>
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

      {/* REGISTRO */}
      {showRegister && (

  <main>
    <section className="register-section" id="register-section">
      <h2 className="register-title">Registro</h2>
      <form className="register-form">
        <input type="text" placeholder="Usuario" className="register-input" required />
        <input type="email" placeholder="Correo Electrónico" className="register-input" required />
        <input type="password" placeholder="Contraseña" className="register-input" required />
        <input type="password" placeholder="Confirmar Contraseña" className="register-input" required />
        <button type="submit" className="register-btn">Registrarse</button>
      </form>
      <div className="register-login-link">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="register-login-link-btn">
          Iniciar sesión
        </Link>
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
              <button className="about-btn-main" onClick={handleRegisterClick}>
                Comenzar Ahora
              </button>
              <button className="about-btn-secondary" onClick={() => setShowWhatIs(true) || setShowAbout(false)}>
                Conoce más sobre SkillSwap
              </button>
            </div>
          </section>
        </main>
      )}

      {/* ¿Qué es SkillSwap? Landing */}
      {showWhatIs && (
        <main>
          {/* 1. PRIMERA IMAGEN */}
          <section className="what-section" id="what-is-section">
            <h2 className="what-title">¿Qué es SkillSwap?</h2>
            <p className="what-subtitle">
              Una plataforma innovadora que conecta personas para intercambiar habilidades y conocimientos de manera justa y colaborativa.
            </p>
            <div className="what-cards">
              <div className="what-card">
                <div className="what-icon what-icon-blue">
                  <FaUserFriends size={34} />
                </div>
                <h3>Conecta con Expertos</h3>
                <p>Encuentra personas con las habilidades que necesitas aprender y conecta con ellas de manera directa y personal.</p>
              </div>
              <div className="what-card">
                <div className="what-icon what-icon-green">
                  <LuRepeat size={34} />
                </div>
                <h3>Intercambio Justo</h3>
                <p>No solo aprendes, también enseñas. Cada intercambio es una oportunidad de crecimiento mutuo y colaboración.</p>
              </div>
              <div className="what-card">
                <div className="what-icon what-icon-purple">
                  <PiTargetDuotone size={34} />
                </div>
                <h3>Crecimiento Personal</h3>
                <p>Desarrolla nuevas competencias mientras contribuyes al crecimiento de otros miembros de la comunidad.</p>
              </div>
            </div>
          </section>

          {/* 2. SEGUNDA IMAGEN */}
          <section className="how-section">
            <h2 className="how-title">¿Cómo Funciona?</h2>
            <div className="how-steps">
              <div className="how-step">
                <div className="how-circle step-blue">1</div>
                <h4>Regístrate</h4>
                <p>Crea tu perfil y describe las habilidades que tienes y las que quieres aprender.</p>
              </div>
              <div className="how-step">
                <div className="how-circle step-green">2</div>
                <h4>Explora</h4>
                <p>Busca personas que tengan las habilidades que necesitas y que estén interesadas en las tuyas.</p>
              </div>
              <div className="how-step">
                <div className="how-circle step-purple">3</div>
                <h4>Conecta</h4>
                <p>Inicia conversaciones y acuerda los detalles de tu intercambio de habilidades.</p>
              </div>
              <div className="how-step">
                <div className="how-circle step-blue">4</div>
                <h4>Intercambia</h4>
                <p>Realiza sesiones de aprendizaje mutuo y haz crecer tu red de conocimientos.</p>
              </div>
            </div>
            <h3 className="how-features-title">Características Principales</h3>
            <div className="how-features">
              <div className="how-feature">
                <FaRegComments size={20} className="how-feature-icon" style={{ color: "#5180f7" }} />
                <div>
                  <strong>Chat Integrado</strong>
                  <p>Comunícate directamente con otros usuarios para coordinar tus intercambios de habilidades.</p>
                </div>
              </div>
              <div className="how-feature">
                <MdOutlineCalendarMonth size={20} className="how-feature-icon" style={{ color: "#25c47c" }} />
                <div>
                  <strong>Programación de Sesiones</strong>
                  <p>Organiza y programa tus sesiones de intercambio con un sistema de calendario integrado.</p>
                </div>
              </div>
              <div className="how-feature">
                <PiStarDuotone size={20} className="how-feature-icon" style={{ color: "#7b61ff" }} />
                <div>
                  <strong>Sistema de Valoraciones</strong>
                  <p>Evalúa y recibe evaluaciones de tus intercambios para construir tu reputación en la plataforma.</p>
                </div>
              </div>
              <div className="how-feature">
                <PiCheckCircleDuotone size={20} className="how-feature-icon" style={{ color: "#5180f7" }} />
                <div>
                  <strong>Perfiles Verificados</strong>
                  <p>Conecta con confianza gracias a nuestro sistema de verificación de usuarios y habilidades.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. TERCERA IMAGEN */}
          <section className="why-choose-section">
            <div className="why-choose-bg">
              <h2 className="why-choose-title">¿Por qué elegir SkillSwap?</h2>
              <ul className="why-choose-list">
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Aprende habilidades prácticas de expertos reales</li>
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Intercambios justos sin costo monetario</li>
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Comparte tus conocimientos y construye tu reputación</li>
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Flexibilidad total para organizar tus sesiones</li>
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Conecta con una comunidad global de aprendizaje</li>
                <li><PiCheckCircleDuotone className="why-choose-icon" /> Crecimiento personal y profesional continuo</li>
              </ul>
            </div>
            <div className="why-choose-call">
              <h2>¿Listo para comenzar tu intercambio?</h2>
              <p>Únete a miles de personas que ya están intercambiando habilidades y creciendo juntas en SkillSwap.</p>
              <div className="why-choose-buttons">
                <button className="why-choose-btn-main" onClick={handleRegisterClick}>
                  Comenzar Ahora <span style={{fontSize: "1.1em"}}>&rarr;</span>
                </button>
                <button className="why-choose-btn-secondary" onClick={handleConoceEquipo}>
                  Conoce nuestro equipo
                </button>
              </div>
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