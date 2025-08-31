import React, { useState, useEffect } from "react";

const BotaoFavoritar = ({ movie, favorites, setFavorites }) => {
  const [message, setMessage] = useState("Marcar como favorito");

  // Atualiza o texto do botão se o filme está entre os favoritos
  useEffect(() => {
    const isFavorited = favorites.some((fav) => fav.id === movie.id);
    setMessage(isFavorited ? "Desmarcar como favorito" : "Marcar como favorito");
  }, [favorites, movie.id]);

  function toggleFavorite() {
    const isFavorited = favorites.some((fav) => fav.id === movie.id);

    if (isFavorited) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));// remove dos favoritos
    } else {
      setFavorites((prev) => [...prev, { id: movie.id, title: movie.title }]);// adiciona aos favoritos ("clonando" o array)
    }
  }

  return <button onClick={toggleFavorite}>{message}</button>;
};

export default BotaoFavoritar;
