// server/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://TU-SITIO.netlify.app"
  ]
}));            // permite peticiones desde el front (Vite 5173)
app.use(express.json());    // parsea JSON del body

// "BD" en memoria
let autoId = 3;
let tareas = [
  { id: 1, texto: "Comprar cebo" },
  { id: 2, texto: "Reparar caña" },
];

// GET: listar
app.get("/api/tareas", (req, res) => {
  res.json(tareas);
});

// POST: crear
app.post("/api/tareas", (req, res) => {
  const texto = (req.body?.texto || "").trim();
  if (!texto) return res.status(400).json({ ok: false, error: "Texto requerido" });
  const nueva = { id: autoId++, texto };
  tareas.push(nueva);
  res.status(201).json({ ok: true, tarea: nueva });
});

// DELETE: eliminar
app.delete("/api/tareas/:id", (req, res) => {
  const id = Number(req.params.id);
  const prev = tareas.length;
  tareas = tareas.filter(t => t.id !== id);
  if (tareas.length === prev) return res.status(404).json({ ok: false, error: "No existe" });
  res.json({ ok: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
