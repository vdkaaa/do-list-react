
# 📝 Do List React + Express #

Mini aplicación Full Stack para gestionar tareas.
Frontend hecho con React + Vite, backend con Express desplegado en Render, y frontend en Netlify.

---------------------------------
🚀 Demo en vivo
---------------------------------
Frontend (Netlify): https://do-list-react.netlify.app
Backend (Render API): https://do-list-react.onrender.com/api/tareas

---------------------------------
✨ Features
---------------------------------
- Agregar y eliminar tareas
- Animaciones con Framer Motion
- Contador de tareas visibles
- Estados de carga, error y lista vacía
- Diseño responsivo y centrado
- Full Stack: Frontend en Netlify + Backend en Render

---------------------------------
🛠️ Stack Tecnológico
---------------------------------
Frontend: React (Vite), CSS, Framer Motion
Backend: Node.js, Express, CORS
Hosting: Netlify (frontend), Render (backend)

---------------------------------
📂 Estructura del repo
---------------------------------
/ (raíz)
  server/        → backend Express
    server.js
    package.json
  src/           → frontend React
    App.jsx
    do-list.jsx
    api.js
  public/
  package.json   → frontend
  vite.config.js

---------------------------------
⚙️ Cómo correr local
---------------------------------
# Clonar repo
git clone https://github.com/vdkaaa/do-list-react.git
cd do-list-react

# Backend
cd server
npm install
npm start   # http://localhost:3000

# Frontend
cd ..
npm install
npm run dev # http://localhost:5173

---------------------------------
🔑 Variables de entorno
---------------------------------
En el frontend (src/api.js) se usa la variable:

VITE_API_BASE
- Local: http://localhost:3000/api
- Producción: https://do-list-react.onrender.com/api

Ejemplo en src/api.js:
const BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000/api";

---------------------------------
📸 Screenshots
---------------------------------
(agrega aquí tus capturas o GIFs en carpeta docs/)

---------------------------------
📄 Licencia
---------------------------------
Este proyecto se publica con fines de aprendizaje y portafolio.
Puedes usarlo como base para tus propios proyectos 🚀.
