import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Filmes
                term={searchTerm}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </>
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

// 🔹 Header com regra: só mostra botões na página inicial
const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Sempre que sair da página inicial, limpar busca
  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchTerm("");
    }
  }, [location.pathname, setSearchTerm]);

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <SearchField onSearch={setSearchTerm} />
      {location.pathname === "/" && (
        <>
          <button onClick={() => navigate("/")}>Início</button>
          <button onClick={() => navigate("/favoritos")}>Favoritos</button>
        </>
      )}
    </div>
  );
};

export default App;
