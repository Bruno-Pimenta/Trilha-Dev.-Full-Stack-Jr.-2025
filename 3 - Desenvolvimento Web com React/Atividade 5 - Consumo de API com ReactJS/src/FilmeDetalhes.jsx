import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BotaoFavoritar from "./BotaoFavoritar";
import "./css/FilmeDetalhes.css"

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

  if (loading) return <p className="movie-message-text">Carregando detalhes...</p>;
  if (error) return <p className="movie-message-text">{error}</p>;
  if (!movie) return <p className="movie-message-text">Filme não encontrado.</p>;

  const [year, month, day] = movie.release_date.split("-");

  return (
    <main className="main-background">
      <div className="movie-details-main-container">
          <div className="movie-details-container">
            <div className="movie-details-container-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-details-container-info">
              <h2 className="info-text-emphasis">{movie.title}</h2>
              <p><span className="info-text-emphasis">Título original: </span> {movie.original_title}</p>
              <p><span className="info-text-emphasis">Data de lançamento: </span> {day+"/"+month+"/"+year}</p>
              <p><span className="info-text-emphasis">Sinopse: </span> {movie.overview}</p>
              <p><span className="info-text-emphasis">Diretor: </span> {director}</p>
              <p><span className="info-text-emphasis"> Nota média: </span>{movie.vote_average}</p>
              
              {cast.length > 0 && (
                <div>
                  <h3 className="info-text-emphasis">Elenco principal</h3>
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
          </div>
          <div className="movie-details-container">
            <div className="movie-details-favorite-button">
              <BotaoFavoritar
                movie={movie}
                favorites={favorites}
                setFavorites={setFavorites} 
              />
            </div>
            
          </div>
      </div>
    </main>
    
  );
};

export default FilmeDetalhes;
