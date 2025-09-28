import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function SignUpPage() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!fields.username || !fields.email || !fields.password || !fields.confirm) {
      setError("Completa todos los campos.");
      return;
    }
    if (fields.password !== fields.confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    // Aquí pondrías lógica real de registro
    navigate("/login");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignUp} className="login-form">
        <h1>Crear cuenta</h1>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={fields.username}
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Gmail"
          value={fields.email}
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={fields.password}
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirmar contraseña"
          value={fields.confirm}
          onChange={handleChange}
          className="login-input"
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn">Registrarme</button>
        <p style={{marginTop: "1em", fontSize: "0.98em"}}>
          ¿Tienes cuenta?{" "}
          <span
            style={{color: "#1dd1a1", cursor: "pointer"}}
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUpPage;