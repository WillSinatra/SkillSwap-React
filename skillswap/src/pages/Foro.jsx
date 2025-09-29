import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- IMPORTA AQUÍ
import "./Foro.css";


// Utilidad simple para color de avatar
function avatarColor(name) {
  const colors = ["#7b61ff", "#4e7cf7", "#25c47c", "#ffb370", "#f95959", "#4747d1"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

// Dummy data
const DUMMY_POSTS = [
  {
    id: 1,
    user: "AnaDev",
    title: "¿Cómo mejorar mis habilidades de React?",
    content: "¡Hola comunidad! Estoy buscando recursos y consejos para mejorar en React y frontend. ¿Qué me recomiendan?",
    tags: ["programacion", "frontend", "react"],
    date: "hace 2 horas",
    reactions: { like: 2, love: 1, clap: 0 }
  },
  {
    id: 2,
    user: "LeoMusic",
    title: "¿Alguien quiere intercambiar clases de guitarra?",
    content: "Sé tocar guitarra y busco a alguien que me enseñe inglés. ¡Podríamos hacer un intercambio!",
    tags: ["musica", "idiomas"],
    date: "hace 4 horas",
    reactions: { like: 1, love: 0, clap: 1 }
  }
];

const REACTIONS = [
  { key: "like", emoji: "👍", label: "Me gusta" },
  { key: "love", emoji: "❤️", label: "Me encanta" },
  { key: "clap", emoji: "👏", label: "Aplaudir" }
];

function Foro() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [showForm, setShowForm] = useState(false);
  const [animModal, setAnimModal] = useState(false);
  const [newPost, setNewPost] = useState({
    user: "",
    title: "",
    content: "",
    tags: ""
  });

    const navigate = useNavigate();

  // Para animación: fadeIn al cargar posts
  React.useEffect(() => {
    document.querySelectorAll(".foro-post-card").forEach((card, idx) => {
      card.style.opacity = 0;
      setTimeout(() => { card.style.opacity = 1; }, 150 + idx * 80);
    });
  }, [posts]);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.user) return;
    setPosts([
      {
        ...newPost,
        id: Date.now(),
        tags: newPost.tags.split(",").map(t => t.trim()).filter(Boolean),
        date: "recién",
        reactions: { like: 0, love: 0, clap: 0 }
      },
      ...posts
    ]);
    setNewPost({ user: "", title: "", content: "", tags: "" });
    setAnimModal(false);
    setTimeout(() => setShowForm(false), 260);
  };

  // Reacciones por post
  const handleReaction = (postId, key) => {
    setPosts(posts =>
      posts.map(p =>
        p.id === postId
          ? { ...p, reactions: { ...p.reactions, [key]: (p.reactions[key] || 0) + 1 } }
          : p
      )
    );
  };

  // Animación modal
  const openModal = () => {
    setShowForm(true);
    setTimeout(() => setAnimModal(true), 20);
  };
  const closeModal = () => {
    setAnimModal(false);
    setTimeout(() => setShowForm(false), 230);
  };

  // Navegación a "Mi cuenta"
  const goToMiCuenta = () => {
    window.location.href = "/micuenta";
  };

  return (
    <div className="foro-bg">
      <div className="foro-topbar">
        <button className="foro-logout-btn" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>
      <div className="foro-hero">
        <h1 className="foro-title">Foro SkillSwap</h1>
        <p className="foro-subtitle">
          Compartí, debatí, aprendé. <span role="img" aria-label="fuego">🔥</span>
        </p>
        <div className="foro-bar">
          <button className="foro-btn-cuenta" onClick={goToMiCuenta}>
            <span role="img" aria-label="Usuario">👤</span> Mi cuenta
          </button>
          <button className="foro-btn-main" onClick={openModal}>
            + Nueva publicación
          </button>
        </div>
      </div>

      {showForm && (
        <div className="foro-modal">
          <form className={`foro-form ${animModal ? "foro-form-in" : ""}`} onSubmit={handleCreatePost}>
            <h2 className="foro-form-title">Crear nueva publicación</h2>
            <input
              name="user"
              className="foro-form-input"
              placeholder="Tu usuario"
              autoComplete="off"
              value={newPost.user}
              onChange={handleInputChange}
              required
            />
            <input
              name="title"
              className="foro-form-input"
              placeholder="Título"
              autoComplete="off"
              value={newPost.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="content"
              className="foro-form-textarea"
              placeholder="Contenido"
              rows={4}
              value={newPost.content}
              onChange={handleInputChange}
              required
            />
            <input
              name="tags"
              className="foro-form-input"
              placeholder="Etiquetas (separadas por coma, ej: react, musica)"
              autoComplete="off"
              value={newPost.tags}
              onChange={handleInputChange}
            />
            <div className="foro-form-actions">
              <button
                type="button"
                className="foro-btn-cancel"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button type="submit" className="foro-btn-main">
                Publicar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="foro-feed">
        {posts.map((post) => (
          <div className="foro-post-card" key={post.id}>
            <div className="foro-post-header">
              <div className="foro-avatar" style={{ background: avatarColor(post.user) }}>
                {post.user[0]?.toUpperCase()}
              </div>
              <span className="foro-post-user">@{post.user}</span>
              <span className="foro-post-date">{post.date}</span>
            </div>
            <h3 className="foro-post-title">{post.title}</h3>
            <p className="foro-post-content">{post.content}</p>
            <div className="foro-post-tags">
              {post.tags && post.tags.map((tag, idx) => (
                <span className="foro-tag" key={idx}>#{tag}</span>
              ))}
            </div>
            <div className="foro-post-reactions">
              {REACTIONS.map(r => (
                <button
                  key={r.key}
                  className="foro-reaction-btn"
                  onClick={() => handleReaction(post.id, r.key)}
                  tabIndex={0}
                  aria-label={r.label}
                >
                  {r.emoji} <span>{post.reactions?.[r.key] || 0}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foro;