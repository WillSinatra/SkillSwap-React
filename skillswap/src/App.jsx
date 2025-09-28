import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

// Páginas de ejemplo
function QuienesSomos() {
  return <div className="info-page"><h1>¿Quiénes somos?</h1><p>Somos SkillSwap, una comunidad para intercambiar habilidades.</p></div>;
}

function QueEsSkillSwap() {
  return <div className="info-page"><h1>¿Qué es SkillSwap?</h1><p>SkillSwap es una plataforma para aprender y enseñar habilidades de forma colaborativa.</p></div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/que-es-skillswap" element={<QueEsSkillSwap />} />
    </Routes>
  );
}

export default App;