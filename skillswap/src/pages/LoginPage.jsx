import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la validación real, por ahora solo redirige
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="text" placeholder="Usuario" style={styles.input} />
        <input type="password" placeholder="Contraseña" style={styles.input} />
        <button type="submit" style={styles.button}>Ingresar</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" },
  form: { display: "flex", flexDirection: "column", gap: "10px", width: "200px" },
  input: { padding: "8px", fontSize: "16px" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer" },
};

export default LoginPage;
