import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Header.css"; 

const Header = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();

  // Limpar busca ao sair da página inicial
  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchTerm("");
    }
  }, [location.pathname, setSearchTerm]);

  return (
    <header className="header-container main-background">
      <section className="header-section-container">
        <div className="title-search-container">
          <h1 className="header-title">API TMDB</h1>

          {location.pathname === "/" && (
            <input
              type="text"
              placeholder="Buscar filme..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          )}
        </div>

        <nav>
          <ul className="itens-menu-container">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/favoritos">Favoritos</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
