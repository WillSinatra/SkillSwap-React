# SkillSwap Backend

Backend simple en Node.js con Express para autenticación de usuarios.

## Instalación

1. Navega a la carpeta del backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

## Uso

### Iniciar el servidor

```bash
npm start
```

O para desarrollo con auto-reload:
```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:4000`

## Endpoints

### GET /
Información del servidor y endpoints disponibles.

**Respuesta:**
```json
{
  "message": "Servidor SkillSwap Backend funcionando",
  "endpoints": {
    "POST /login": "Endpoint para autenticación"
  }
}
```

### POST /login
Autenticación de usuarios.

**Request Body:**
```json
{
  "username": "admin",
  "password": "1234"
}
```

**Respuestas:**

**Login exitoso (200):**
```json
{
  "message": "Login exitoso",
  "token": "abc123"
}
```

**Credenciales inválidas (401):**
```json
{
  "message": "Credenciales inválidas"
}
```

**Datos faltantes (400):**
```json
{
  "message": "Username y password son requeridos"
}
```

## Credenciales de prueba

- **Username:** `admin`
- **Password:** `1234`

## Configuración

- **Puerto:** 4000
- **CORS:** Habilitado para `http://localhost:5173` (puerto por defecto de Vite)
- **JSON:** Middleware habilitado para parsear requests JSON
