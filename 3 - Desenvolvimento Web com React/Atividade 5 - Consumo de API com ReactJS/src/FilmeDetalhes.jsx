import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BotaoFavoritar from "./BotaoFavoritar";

const FilmeDetalhes = ({ favorites, setFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        );
        if (!res.ok) throw new Error("Erro ao buscar detalhes do filme");
        const data = await res.json();
        setMovie(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, apiKey]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Data de lançamento: {movie.release_date}</p>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      {/* Botão de favoritar */}
      <BotaoFavoritar
        movie={movie}
        favorites={favorites}
        setFavorites={setFavorites}
      />

      <br />
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default FilmeDetalhes;
