import React, { useEffect, useState } from "react";
import Filme from "./Filme";
import BotaoFavoritar from "./BotaoFavoritar";

const Favoritos = ({ favorites, setFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  // Atualiza localStorage sempre que favorites mudar
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Busca os filmes pelo ID salvo nos favoritos
  useEffect(() => {
    if (favorites.length === 0) {
      setMovies([]);
      setLoading(false);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.all(
          favorites.map(async (fav) => {
            const res = await fetch(
              `https://api.themoviedb.org/3/movie/${fav.id}?api_key=${apiKey}&language=pt-BR`
            );
            if (!res.ok) throw new Error("Erro ao buscar filme");
            return res.json();
          })
        );
        setMovies(results);
      } catch (error) {
        setError(`Erro ao carregar os filmes: ${error.message}`);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [favorites, apiKey]);

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
            </div>
          );
        })
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </>
  );
};

export default Favoritos;
