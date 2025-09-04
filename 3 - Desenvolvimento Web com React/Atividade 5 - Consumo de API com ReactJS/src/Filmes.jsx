import React, { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";
import BotaoFavoritar from "./BotaoFavoritar";
import BotaoDetalhes from "./BotaoDetalhes";
import Paginacao from "./Paginacao"; 
import "./css/Filmes.css"; 

const Filmes = ({ term, favorites, setFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = import.meta.env.VITE_API_KEY;

  const getMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const url =
        term.trim() !== ""
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${term}&page=${page}`
          : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=${page}`;

      const response = await axios.get(url);
      setMovies(response.data.results || []);
      setTotalPages(response.data.total_pages);
    } catch (e) {
      setError(`Erro ao carregar os filmes: ${e.message}`);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [term, page]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading) return <p className="movie-message-text">Carregando filmes...</p>;
  if (error) return <p className="movie-message-text">{error}</p>;
  if (movies.length === 0) return <p className="movie-message-text">Nenhum filme encontrado com o termo buscado.</p>;

  return (
    <>
      <main className="main-background">
        <div className="movies-grid">
          {movies.map((movie) => {
            const releaseDate = movie.release_date || "0000-00-00";
            const [year, month, day] = releaseDate.split("-");

            return (
              <div className="movie-item" key={movie.id}>
                <Filme
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_day={day}
                  release_month={month}
                  release_year={year}
                />
                <div className="buttons-align">
                  <BotaoFavoritar
                    movie={movie}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                  <BotaoDetalhes id={movie.id} />
                </div>
              </div>
            );
          })}
        </div>

        <Paginacao 
          page={page} 
          totalPages={totalPages} 
          onPageChange={setPage} 
        />  
      </main>
    </>
  );
};

export default Filmes;
