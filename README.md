# 📌 SkillSwap – Intercambio de habilidades

SkillSwap es una web app que conecta personas dispuestas a aprender y enseñar habilidades. Nuestra plataforma facilita el encuentro, el aprendizaje colaborativo y el intercambio de conocimientos de manera sencilla y segura.

---

## 🚀 ¿Qué puedes hacer en SkillSwap?

- **Registro y Login:**  
  Crea tu cuenta con usuario y contraseña. Inicia sesión de forma segura.

- **Completa tu perfil:**  
  - Elige las habilidades que sabes enseñar.
  - Selecciona las habilidades que quieres aprender.
  - (Opcional) Sube una foto o vídeo de presentación.

- **Visualiza perfiles en modo foro:**  
  - Explora la lista de usuarios y sus habilidades.
  - Tu propio perfil aparece como un icono flotante en la esquina superior derecha.  
    Haz clic en él para ver tus habilidades y cerrar sesión.

- **Sistema de Matching (próximamente):**  
  - Algoritmo para conectar usuarios que pueden intercambiar habilidades.
  - Por ahora, puedes buscar manualmente usuarios por habilidad.

- **Interacción entre usuarios (próximamente):**  
  - Chat interno básico para coordinar.
  - Futuras mejoras: videollamadas, tutoriales, etc.

- **Plataforma confiable:**  
  - Base de datos segura para usuarios y habilidades.
  - Interfaz amigable y fácil de usar.

---

## ✨ Características principales

- Registro y login seguro
- Perfiles personalizables con habilidades
- Visualización tipo foro de todos los perfiles (menos el tuyo)
- Modal flotante para ver tus propias habilidades y cerrar sesión
- Diseño moderno y responsivo
- Backend Express y frontend React listos para desarrollo y pruebas

---

## 🛠️ Tecnologías utilizadas

- HTML, CSS, Javascript
- React
- Express
- Node.js
- (Preparado para MySQL en futuras versiones)

---

## ▶️ ¿Cómo ejecutar SkillSwap fácilmente?

### 1. Instala las dependencias (solo la primera vez)

Abre una terminal en la carpeta raíz y ejecuta:

```sh
cd backend
npm install
cd ../skillswap
npm install
```

### 2. Inicia todo con un solo clic

En la carpeta principal encontrarás el archivo:

```
iniciar_skillswap.bat
```

**¿Cómo usarlo?**

- Haz doble clic en `iniciar_skillswap.bat`.
- Se abrirán dos ventanas de terminal: una para el backend y otra para el frontend.
- Después de unos segundos, la página se abrirá automáticamente en tu navegador en [http://localhost:5173](http://localhost:5173).
- ¡Listo! Ya puedes registrarte, iniciar sesión y explorar perfiles.

**NOTA:** Los usuarios disponibles son los siguientes:
_user:admin contraseña:1234
_user:maria contraseña:abcd
_user:juan contraseña:pass123
(son puramente ficticios para la prueba del mvp)

> **Nota:** Si la página se abre dos veces, asegúrate de que el script de inicio del frontend (`skillswap/package.json`) tenga la opción `--open false` o `--no-open` para evitar que Vite abra el navegador automáticamente.

---

## 📝 Estado del proyecto

Actualmente: **En desarrollo**  
MVP funcional: registro, login, perfiles y visualización de habilidades.

---

## 📬 Contacto y feedback

¿Tienes ideas, sugerencias o encontraste un bug?  
¡Tu feedback es bienvenido para seguir mejorando SkillSwap!
