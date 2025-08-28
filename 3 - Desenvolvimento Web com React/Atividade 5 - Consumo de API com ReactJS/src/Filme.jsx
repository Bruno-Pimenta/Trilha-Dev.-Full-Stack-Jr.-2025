import React from 'react';

const Filme = ({ title, poster_path, release_day, release_month, release_year}) => {
  const link = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <h2>{title}</h2>
      <img src={`${link}${poster_path}`} alt={`Filme ${title}`} />
      <p>{release_day+"/"+release_month+"/"+release_year}</p>
    </div>
  );
};

export default Filme;

