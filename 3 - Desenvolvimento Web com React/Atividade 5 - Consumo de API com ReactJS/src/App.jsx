import React, { useState } from "react";
import Filmes from "./Filmes";
import SearchField from "./SearchField";
import Favoritos from "./Favoritos";

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

  const [showFavorites, setShowFavorites] = useState(false);

  // sempre que favoritos mudar, atualizar o localStorage
  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      
      {showFavorites ? (
        <>
          <button onClick={() => setShowFavorites((prev) => !prev)}>
            {"Ver todos os filmes"}
          </button>
          <Favoritos favorites={favorites} setFavorites={setFavorites} />
        </>
      ) : (
        <>
          <SearchField onSearch={setSearchTerm} />
          <button onClick={() => setShowFavorites((prev) => !prev)}>
            {"Ver Favoritos"}
          </button>
        <Filmes
          term={searchTerm}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        </>
      )}
    </>
  );
};

export default App;
