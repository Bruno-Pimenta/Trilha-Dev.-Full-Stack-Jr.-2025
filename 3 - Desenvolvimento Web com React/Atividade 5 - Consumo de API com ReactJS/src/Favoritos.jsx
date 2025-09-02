import React, { useEffect, useState } from "react";
import Filme from "./Filme";
import BotaoFavoritar from "./BotaoFavoritar";
import BotaoDetalhes from "./BotaoDetalhes";

const Favoritos = ({ favorites, setFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = import.meta.env.VITE_API_KEY;
  const itemsPerPage = 8; //Não uso os 20 filmes por página padrão da paginação do TMDB aqui em Favoritos

  // Atualiza localStorage sempre que favorites mudar
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Busca os filmes pelo ID salvo nos favoritos
  useEffect(() => {
    if (favorites.length === 0) {
      setMovies([]);
      setLoading(false);
      setTotalPages(1);
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
        setTotalPages(Math.ceil(results.length / itemsPerPage));
        setPage(1); // resetar página ao atualizar lista
      } catch (error) {
        setError(`Erro ao carregar os filmes: ${error.message}`);
        setMovies([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [favorites, apiKey]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>{error}</p>;

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {movies.length > 0 ? (
        <>
          {paginatedMovies.map((movie) => {
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
          })}

          <div style={{ marginTop: "20px" }}>
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Anterior
            </button>
            <span style={{ margin: "0 10px" }}>
              Página {page} de {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </>
  );
};

export default Favoritos;
