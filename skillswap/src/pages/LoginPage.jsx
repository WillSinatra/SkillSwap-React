import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim() === "" || password.trim() === "") {
      setError("Por favor completa todos los campos.");
    } else {
      setError("");
      navigate("/"); // Redirige a la home
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
