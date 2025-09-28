const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://localhost:5173', // Puerto por defecto de Vite/React
  credentials: true
}));

// Endpoint POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validar que se envíen username y password
  if (!username || !password) {
    return res.status(400).json({
      message: 'Username y password son requeridos'
    });
  }

  // Validar credenciales contra usuario fijo
  if (username === 'admin' && password === '1234') {
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
