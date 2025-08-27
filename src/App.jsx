// src/App.jsx
import DoList from "./do-list.jsx";
import Saludo from "./Saludo.jsx";

function App() {
  return (
    <div>
      <h1>Mi app React + API</h1>
      <Saludo nombre="Diego Santander" />
      <DoList />
    </div>
  );
}

export default App;
