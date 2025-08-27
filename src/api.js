// src/api.js
const BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:3000/api";

export async function getTareas() {
  const r = await fetch(`${BASE}/tareas`);
  return r.json();
}


export async function getTareas() {
  const r = await fetch(`${BASE}/tareas`);
  return r.json();
}

export async function crearTarea(texto) {
  const r = await fetch(`${BASE}/tareas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto }),
  });
  return r.json();
}

export async function eliminarTarea(id) {
  const r = await fetch(`${BASE}/tareas/${id}`, { method: "DELETE" });
  return r.json();
}
