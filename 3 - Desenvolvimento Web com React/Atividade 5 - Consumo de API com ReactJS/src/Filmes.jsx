import React, { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";

const Filmes = ({ term }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  const baseURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${term}`;

  const getMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = term.trim() !== "" ? searchURL : baseURL;
      const response = await axios.get(url);

      setMovies(response.data.results || []);
    } catch (e) {
      setError(`Erro ao carregar os filmes: ${e.message}`);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [term]); // executa quando o termo muda

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie) => {
          const releaseDate = movie.release_date || "0000-00-00";
          const [year, month, day] = releaseDate.split("-");

          return (
            <Filme
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_day={day}
              release_month={month}
              release_year={year}
            />
          );
        })
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </>
  );
};

export default Filmes;
