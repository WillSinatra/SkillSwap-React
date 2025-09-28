import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import "../navbar.css";
import "../index.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleBackHome(e) {
    e.preventDefault();
    navigate("/");
  }

  function handleRegister(e) {
    e.preventDefault();
    navigate("/");
    // Si tienes lógica adicional para abrir el registro, agrégala aquí
  }

  return (
    <div className="page-wrapper">
      {/* NAVBAR MINIMALISTA */}
      <nav className="main-nav about-navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="SkillSwap Logo" className="nav-logo-img" />
          </Link>
        </div>
        <div className="about-back" onClick={handleBackHome} style={{ cursor: "pointer" }}>
          <span style={{ fontWeight: 600 }}>&larr; Volver al inicio</span>
        </div>
      </nav>
      <main>
        <section className="login-section" id="login-section">
          <h2 className="login-welcome">Bienvenido de Vuelta</h2>
          <h3 className="login-title">Inicio de Sesión</h3>
          <form className="login-form">
            <div className="login-password-wrapper">
              <input
                type="text"
                placeholder="Usuario o Correo Electrónico"
                className="login-input"
                required
                style={{ paddingRight: "2.7em" }} // espacio igual que la contraseña
              />
            </div>
            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="login-input"
                required
                style={{ paddingRight: "2.7em" }}
              />
              <span
                className="login-eye-icon"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                style={{
                  cursor: "pointer",
                  right: "1.1em",
                  top: "50%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  background: "none",
                  border: "none",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {showPassword ? <PiEyeClosed size={22} /> : <PiEye size={22} />}
              </span>
            </div>
            <button type="submit" className="login-btn">
              Iniciar sesión
            </button>
          </form>
          <div className="login-register-link">
            ¿No tienes cuenta?{" "}
          <a href="/#register" className="login-register-link-btn">
           Registrarse
          </a>
          </div>
        </section>
      </main>
      <footer>
        <p className="home-footer">© 2025 SkillSwap Hackathon</p>
      </footer>
    </div>
  );
}

export default LoginPage;