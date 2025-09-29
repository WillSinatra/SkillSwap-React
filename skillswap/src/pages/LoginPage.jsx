import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import "../navbar.css";
import "../index.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleBackHome(e) {
    e.preventDefault();
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      if (response.status === 200) {
        localStorage.setItem("loggedUser", username);
        navigate("/perfiles");
      } else {
        const data = await response.json();
        setErrorMsg(data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      setErrorMsg("No se pudo conectar con el servidor");
    }
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
        <div
          className="about-back"
          onClick={handleBackHome}
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontWeight: 600 }}>&larr; Volver al inicio</span>
        </div>
      </nav>
      <main>
        <section className="login-section" id="login-section">
          <h2 className="login-welcome">Bienvenido de Vuelta</h2>
          <h3 className="login-title">Inicio de Sesión</h3>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-password-wrapper">
              <input
                type="text"
                placeholder="Usuario o Correo Electrónico"
                className="login-input"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ paddingRight: "2.7em" }} // espacio igual que la contraseña
              />
            </div>
            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="login-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: "2.7em" }}
              />
              <span
                className="login-eye-icon"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
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
            {errorMsg && (
              <div style={{ color: "red", marginBottom: "0.5em" }}>
                {errorMsg}
              </div>
            )}
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