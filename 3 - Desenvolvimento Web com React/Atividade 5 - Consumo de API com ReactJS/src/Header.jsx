// Header.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchField from "./SearchField";

const Header = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();

  // Limpar busca ao sair da página inicial
  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchTerm("");
    }
  }, [location.pathname, setSearchTerm]);

  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1>API TMDB</h1>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/favoritos">Favoritos</a>
          </li>
          {(location.pathname === "/favoritos" || location.pathname.startsWith("/filme/")) && (
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
              >
                Voltar
              </a>
            </li>
          )}
        </ul>
      </nav>

      {location.pathname === "/" && <SearchField onSearch={setSearchTerm} />}
    </header>
  );
};

export default Header;
