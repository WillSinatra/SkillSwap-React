import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido a la HomePage</h1>
      <p>Esto es solo un ejemplo básico de ruteo en React.</p>
      <button 
        onClick={() => navigate("/")} 
        style={{ padding: "10px", cursor: "pointer", marginTop: "20px" }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default HomePage;
