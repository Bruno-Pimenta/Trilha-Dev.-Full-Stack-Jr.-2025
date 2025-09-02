import React, { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";
import BotaoFavoritar from "./BotaoFavoritar";
import BotaoDetalhes from "./BotaoDetalhes";


const Filmes = ({ term, favorites, setFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  const getMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const url =
        term.trim() !== ""
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${term}`
          : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`;

      const response = await axios.get(url);
      setMovies(response.data.results || []);
    } catch (e) {
      setError(`Erro ao carregar os filmes: ${e.message}`);
      setMovies([]);
    } 
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [term]);

  // Salvar favoritos sempre que mudar
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie) => {
          const releaseDate = movie.release_date || "0000-00-00";
          const [year, month, day] = releaseDate.split("-");

          return (
            <div key={movie.id}>
              <Filme
                title={movie.title}
                poster_path={movie.poster_path}
                release_day={day}
                release_month={month}
                release_year={year}
              />
              <BotaoFavoritar
                movie={movie}
                favorites={favorites}
                setFavorites={setFavorites}
              />
              <BotaoDetalhes id={movie.id} /> 
            </div>
          );
        })
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </>
  );
};

export default Filmes;
