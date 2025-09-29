import React, { useState, useRef, useEffect } from "react";
import "./MiCuenta.css";
import { useNavigate } from "react-router-dom";
import { PiArrowLeftBold } from "react-icons/pi";

const USER_DEFAULT = {
  nombre: "Will Sinatra",
  username: "WillSinatra",
  email: "will@skillswap.com",
  bio: "Desarrollador fullstack, amante de la música y el aprendizaje colaborativo.",
  avatar: "",
  habilidades: ["react", "javascript", "musica", "frontend"],
  quieroAprender: ["python", "idiomas", "cocina"],
  seguidores: [
    { nombre: "Ana Dev", username: "AnaDev" },
    { nombre: "Leo Music", username: "LeoMusic" }
  ],
  seguidos: [
    { nombre: "Cami Art", username: "CamiArt" },
    { nombre: "Santi Code", username: "SantiCode" }
  ]
};

const USER_POSTS = [
  {
    id: 101,
    title: "¿Cómo mejorar mis habilidades de React?",
    content: "¡Hola comunidad! Estoy buscando recursos y consejos para mejorar en React y frontend. ¿Qué me recomiendan?",
    tags: ["react", "frontend"],
    date: "hace 2 horas"
  },
  {
    id: 102,
    title: "Desafío: Dibuja tu superhéroe favorito",
    content: "¡Propongo un desafío! Suban su dibujo de su superhéroe favorito y votemos el mejor.",
    tags: ["dibujo", "arte"],
    date: "hace 1 día"
  }
];

function avatarColor(name) {
  const colors = ["#7b61ff", "#4e7cf7", "#25c47c", "#ffb370", "#f95959", "#4747d1"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export default function MiCuenta() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Intenta cargar del localStorage primero
  const getStoredUser = () => {
    try {
      const stored = localStorage.getItem("skillswap-user");
      return stored ? JSON.parse(stored) : USER_DEFAULT;
    } catch (e) {
      return USER_DEFAULT;
    }
  };

  const [user, setUser] = useState(getStoredUser());
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...user });
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [myPosts] = useState(USER_POSTS);

  // Cuando guardas el perfil, también lo guardas en localStorage
  const handleEdit = (e) => {
    e.preventDefault();
    const updatedUser = { ...form, avatar: avatarPreview };
    setUser(updatedUser);
    localStorage.setItem("skillswap-user", JSON.stringify(updatedUser));
    setEditing(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatarPreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Si el usuario vuelve de otra pantalla, actualiza el estado desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("skillswap-user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setForm(parsed);
      setAvatarPreview(parsed.avatar);
    }
  }, []);

  return (
    <div className="micuenta-bg">
      <div className="micuenta-back-bar">
        <button className="micuenta-back-btn" onClick={() => navigate("/foro")}>
          <PiArrowLeftBold size={22} style={{marginRight: 8}} />
          Volver al Foro
        </button>
      </div>
      <div className="micuenta-container">
        <div className="micuenta-card">
          <div className="micuenta-avatar" style={{ background: avatarColor(user.username) }}>
            {user.avatar
              ? <img src={user.avatar} alt="avatar" />
              : user.nombre[0]}
          </div>
          <div className="micuenta-info">
            <h2 className="micuenta-nombre">{user.nombre}</h2>
            <div className="micuenta-username">@{user.username}</div>
            <div className="micuenta-email">{user.email}</div>
            <div className="micuenta-bio">{user.bio}</div>
            <div className="micuenta-social">
              <div>
                <strong>{user.seguidores.length}</strong> Seguidores
                <div className="micuenta-social-list">
                  {user.seguidores.map((seg, i) => (
                    <div
                      className="micuenta-mini-avatar"
                      key={i}
                      title={seg.nombre}
                      style={{ background: avatarColor(seg.username) }}
                    >
                      {seg.nombre[0]}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <strong>{user.seguidos.length}</strong> Seguidos
                <div className="micuenta-social-list">
                  {user.seguidos.map((seg, i) => (
                    <div
                      className="micuenta-mini-avatar"
                      key={i}
                      title={seg.nombre}
                      style={{ background: avatarColor(seg.username) }}
                    >
                      {seg.nombre[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="micuenta-btn-edit" onClick={() => setEditing(true)}>
              Editar perfil
            </button>
          </div>
        </div>

        <div className="micuenta-habs">
          <div>
            <h3>Mis habilidades</h3>
            <div className="micuenta-tags">
              {user.habilidades.map((hab, i) => (
                <span className="micuenta-tag" key={i}>#{hab}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>Quiero aprender</h3>
            <div className="micuenta-tags">
              {user.quieroAprender.map((hab, i) => (
                <span className="micuenta-tag micuenta-tag-aprender" key={i}>#{hab}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="micuenta-mis-posts">
          <h3>Mis publicaciones</h3>
          <div className="micuenta-posts-list">
            {myPosts.map(post => (
              <div className="micuenta-post-card" key={post.id}>
                <div className="micuenta-post-header">
                  <span className="micuenta-post-title">{post.title}</span>
                  <span className="micuenta-post-date">{post.date}</span>
                </div>
                <div className="micuenta-post-content">{post.content}</div>
                <div className="micuenta-post-tags">
                  {post.tags.map(tag =>
                    <span className="micuenta-tag" key={tag}>#{tag}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {editing && (
        <div className="micuenta-modal-bg">
          <form className="micuenta-modal" onSubmit={handleEdit}>
            <h2>Editar perfil</h2>
            <div style={{ display: "flex", gap: "1.2em", alignItems: "center", marginBottom: 12 }}>
              <div className="micuenta-avatar" style={{ background: avatarColor(form.username), width: 72, height: 72 }}>
                {avatarPreview
                  ? <img src={avatarPreview} alt="avatar" />
                  : form.nombre[0]}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
              <button
                type="button"
                className="micuenta-btn-edit"
                style={{ padding: "0.5em 1.2em", fontSize: "1em" }}
                onClick={() => fileInputRef.current.click()}
              >
                Cambiar foto
              </button>
            </div>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="micuenta-modal-input"
              required
            />
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Usuario"
              className="micuenta-modal-input"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="micuenta-modal-input"
              required
            />
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Biografía"
              className="micuenta-modal-textarea"
              rows={3}
            />
            <div className="micuenta-modal-actions">
              <button type="button" className="micuenta-btn-cancel" onClick={() => setEditing(false)}>
                Cancelar
              </button>
              <button type="submit" className="micuenta-btn-save">
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}