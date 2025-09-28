import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function SignUpPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!user || !email || !pass || !confirm) {
      setError("Completa todos los campos.");
      return;
    }
    if (pass !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignUp} className="login-form">
        <h1>Crear cuenta</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="login-input"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="login-input"
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn">Registrarme</button>
        <p style={{marginTop: "1em", fontSize: "0.98em"}}>
          ¿Ya tienes cuenta?{" "}
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