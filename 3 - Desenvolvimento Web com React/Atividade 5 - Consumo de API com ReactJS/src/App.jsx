import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Filmes from "./Filmes";
import Favoritos from "./Favoritos";
import SearchField from "./SearchField";
import FilmeDetalhes from "./FilmeDetalhes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Erro ao ler favorites do localStorage:", e);
      return [];
    }
  });

  // sempre que favoritos mudar, atualizar o localStorage
  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <Filmes
              term={searchTerm}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Favoritos favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/filme/:id"
          element={
        <FilmeDetalhes favorites={favorites} setFavorites={setFavorites} />
          }
        />

      </Routes>
    </Router>
  );
};

// Componente Header com botões de navegação
const Header = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <SearchField onSearch={setSearchTerm} />
      <button onClick={() => navigate("/")}>Início</button>
      <button onClick={() => navigate("/favoritos")}>Favoritos</button>
    </div>
  );
};

export default App;
