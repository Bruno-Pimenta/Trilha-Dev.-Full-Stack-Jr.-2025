import React from 'react';
import "./css/Filme.css"; 

const Filme = ({ title, poster_path, release_day, release_month, release_year}) => {
  const link = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='movie-container'>
      <h2 className='title-align'>{title}</h2>
      <img src={`${link}${poster_path}`} alt={`Filme ${title}`} />
      <p><span className='text-emphasis'>Data de lançamento: </span> {release_day+"/"+release_month+"/"+release_year}</p>
    </div>
  );
};

export default Filme;

