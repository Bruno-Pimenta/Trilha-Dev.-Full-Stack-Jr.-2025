import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filmes from "./Filmes";
import Favoritos from "./Favoritos";
import Header from "./Header";
import FilmeDetalhes from "./FilmeDetalhes";
import "./css/App.css"; 

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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router className="main-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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

export default App;
