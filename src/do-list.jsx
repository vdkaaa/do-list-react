// src/do-list.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTareas, crearTarea, eliminarTarea } from "./api";
import "./App.css"; // 👈 importa tus estilos

export default function DoList() {
  const [tareas, setTareas] = useState([]);
  const [nueva, setNueva] = useState("");
  const [cargando, setCargando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  // cargar inicial
  useEffect(() => {
    (async () => {
      try {
        setCargando(true);
        setError("");
        const data = await getTareas();
        setTareas(data);
      } catch (e) {
        console.error(e);
        setError("No pudimos cargar las tareas. Intenta de nuevo.");
      } finally {
        setCargando(false);
      }
    })();
  }, []);

  // agregar
  const agregar = async () => {
    const texto = nueva.trim();
    if (!texto || enviando) return;
    try {
      setEnviando(true);
      setError("");
      const res = await crearTarea(texto);
      if (!res.ok) throw new Error(res.error || "Error al crear");
      setTareas((prev) => [...prev, res.tarea]);
      setNueva("");
    } catch (e) {
      setError(e.message || "Error al agregar.");
    } finally {
      setEnviando(false);
    }
  };

  // eliminar
  const quitar = async (id) => {
    try {
      setError("");
      const res = await eliminarTarea(id);
      if (!res.ok) throw new Error(res.error || "Error al eliminar");
      setTareas((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      setError(e.message || "Error al eliminar.");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") agregar();
  };

  // estados
  if (cargando) return <p style={{ color: "white" }}>Cargando…</p>;
  if (error) return <p style={{ color: "tomato" }}>{error}</p>;

  return (
    <section>
      <h2>Lista de Tareas</h2>
      <p style={{ textAlign: "center", marginBottom: "12px" }}>
        Total tareas: <strong>{tareas.length}</strong>
      </p>

      <ul>
        <AnimatePresence>
          {tareas.map((t) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
            >
              <span>{t.texto}</span>
              <button onClick={() => quitar(t.id)}>✖</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Nueva tarea"
        />
        <button onClick={agregar} disabled={!nueva.trim() || enviando}>
          {enviando ? "Agregando…" : "Agregar"}
        </button>
      </div>
    </section>
  );
}
