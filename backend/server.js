const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
  origin: ['http://localhost:5173','http://localhost:8080'], // Puerto por defecto de Vite/React
  credentials: true
}));

// Leer usuarios desde users.json
function getUsers() {
  const usersPath = path.join(__dirname, 'users.json');
  const data = fs.readFileSync(usersPath, 'utf-8');
  return JSON.parse(data);
}

// Endpoint POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validar que se envíen username y password
  if (!username || !password) {
    return res.status(400).json({
      message: 'Username y password son requeridos'
    });
  }

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  // Validar credenciales contra usuarios en users.json
  if (user) {
    return res.status(200).json({
      message: 'Login exitoso',
      token: 'abc123'
    });
  } else {
    return res.status(401).json({
      message: 'Credenciales inválidas'
    });
  }
});

// Nuevo endpoint para obtener perfiles de usuario (sin contraseñas)
app.get('/users', (req, res) => {
  const users = getUsers().map(u => ({
    username: u.username,
    skills: u.skills || []
  }));
  res.json(users);
});

// Endpoint de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.json({
    message: 'Servidor SkillSwap Backend funcionando',
    endpoints: {
      'POST /login': 'Endpoint para autenticación'
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET  / - Información del servidor`);
  console.log(`   POST /login - Autenticación de usuarios`);
});
