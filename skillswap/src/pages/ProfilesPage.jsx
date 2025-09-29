import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../home.css";
import "../navbar.css";

function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOwnSkills, setShowOwnSkills] = useState(false);
  const navigate = useNavigate();

  // Obtener usuario logueado de localStorage
  const loggedUser = localStorage.getItem("loggedUser");

  // Encontrar el perfil del usuario logueado
  const ownProfile = profiles.find((u) => u.username === loggedUser);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      });
  }, []);

  // Perfiles sin el usuario logueado
  const otherProfiles = profiles.filter((u) => u.username !== loggedUser);

  function handleLogout() {
    localStorage.removeItem("loggedUser");
    setShowOwnSkills(false);
    navigate("/login");
  }

  return (
    <div
      className="page-wrapper"
      style={{ minHeight: "100vh", background: "#f6f7fb" }}
    >
      <nav className="main-nav">
        <div className="nav-left">
          <img
            src="/logo.png"
            alt="SkillSwap Logo"
            className="nav-logo-img"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="/perfiles" className="nav-link">
              Perfiles
            </a>
          </li>
        </ul>
      </nav>
      <main style={{ maxWidth: 700, margin: "2em auto" }}>
        <h1
          style={{
            color: "#1dd1a1",
            textAlign: "center",
            marginBottom: "1.5em",
          }}
        >
          Foro de Perfiles
        </h1>
        {loading ? (
          <p style={{ textAlign: "center" }}>Cargando perfiles...</p>
        ) : (
          <div>
            {otherProfiles.map((user, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(30,200,150,0.08)",
                  marginBottom: "1.5em",
                  padding: "1.5em 2em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.7em",
                  }}
                >
                  <div
                    style={{
                      background: "#1dd1a1",
                      color: "#fff",
                      borderRadius: "50%",
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.7em",
                      fontWeight: "bold",
                      marginRight: "1em",
                    }}
                  >
                    {user.username[0].toUpperCase()}
                  </div>
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "1.2em",
                        color: "#222",
                      }}
                    >
                      {user.username}
                    </span>
                  </div>
                </div>
                <div>
                  <span
                    style={{ color: "#10ac84", fontWeight: 500 }}
                  >
                    Habilidades:
                  </span>
                  <div
                    style={{
                      marginTop: "0.5em",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5em",
                    }}
                  >
                    {user.skills && user.skills.length > 0 ? (
                      user.skills.map((skill, i) => (
                        <span
                          key={i}
                          style={{
                            background: "#e0f7fa",
                            color: "#009688",
                            borderRadius: "16px",
                            padding: "0.3em 1em",
                            fontSize: "1em",
                            fontWeight: 500,
                            boxShadow: "0 1px 4px rgba(30,200,150,0.07)",
                          }}
                        >
                          #{skill}
                        </span>
                      ))
                    ) : (
                      <span style={{ color: "#888" }}>
                        Sin habilidades registradas
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      {/* Icono flotante del usuario logueado */}
      {ownProfile && (
        <div
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={() => setShowOwnSkills(true)}
          title="Ver mis habilidades"
        >
          <div
            style={{
              background: "#1dd1a1",
              color: "#fff",
              borderRadius: "50%",
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2em",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(30,200,150,0.18)",
            }}
          >
            {ownProfile.username[0].toUpperCase()}
          </div>
        </div>
      )}
      {/* Modal simple para mostrar habilidades propias */}
      {showOwnSkills && ownProfile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
          onClick={() => setShowOwnSkills(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "2em 2.5em",
              minWidth: 300,
              boxShadow: "0 4px 24px rgba(30,200,150,0.15)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOwnSkills(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 48,
                background: "none",
                border: "none",
                fontSize: "1.5em",
                color: "#888",
                cursor: "pointer",
              }}
              aria-label="Cerrar"
            >
              ×
            </button>
            <button
              onClick={handleLogout}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "#ff6b6b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.3em 0.8em",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1em",
              }}
            >
              Cerrar sesión
            </button>
            <h2
              style={{
                color: "#1dd1a1",
                marginBottom: "1em",
              }}
            >
              Mis habilidades
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7em",
              }}
            >
              {ownProfile.skills && ownProfile.skills.length > 0 ? (
                ownProfile.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#e0f7fa",
                      color: "#009688",
                      borderRadius: "16px",
                      padding: "0.4em 1.2em",
                      fontSize: "1.1em",
                      fontWeight: 500,
                      boxShadow: "0 1px 4px rgba(30,200,150,0.07)",
                    }}
                  >
                    #{skill}
                  </span>
                ))
              ) : (
                <span style={{ color: "#888" }}>
                  Sin habilidades registradas
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      <footer>
        <p className="home-footer">© 2025 SkillSwap Hackathon</p>
      </footer>
    </div>
  );
}

export default ProfilesPage;