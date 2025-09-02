import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BotaoFavoritar from "./BotaoFavoritar";

const FilmeDetalhes = ({ favorites, setFavorites }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const resMovie = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        );
        if (!resMovie.ok) throw new Error("Erro ao buscar detalhes do filme");
        const dataMovie = await resMovie.json();
        setMovie(dataMovie);

        const resCredits = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`
        );
        if (!resCredits.ok) throw new Error("Erro ao buscar o elenco do filme");
        const dataCredits = await resCredits.json();
        setCast(dataCredits.cast || []);

        const diretor = dataCredits.crew?.find(member => member.job === "Director");
        setDirector(diretor ? diretor.name : "Desconhecido");

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, apiKey]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  const [year, month, day] = movie.release_date.split("-");

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
      <p>Título original: {movie.original_title}</p>
      <p>Data de lançamento: {day+"/"+month+"/"+year}</p>
      <p>Sinopse: {movie.overview}</p>
      <p>Diretor: {director}</p>
      <p>Nota média:{movie.vote_average}</p>
      
      {cast.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Elenco principal:</h3>
          <ul>
            {cast.slice(0, 10).map((actor) => (
              <li key={actor.cast_id}>
                {actor.name} como {actor.character}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <BotaoFavoritar
        movie={movie}
        favorites={favorites}
        setFavorites={setFavorites}
      />

      
    </div>
  );
};

export default FilmeDetalhes;
