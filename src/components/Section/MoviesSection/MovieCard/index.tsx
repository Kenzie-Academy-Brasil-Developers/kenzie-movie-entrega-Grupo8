 import React from "react";
import { MovieCardProps } from "./@types";

export const MovieCard: React.FC<MovieCardProps> = ({ movie, handleMoviesDetails }) => {
  const handleClick = () => {
    handleMoviesDetails(movie.id);
  };

  return (
    <li onClick={handleClick}>
      <ul>
        <li>
          <img src={movie.image} alt={movie.name} />
        </li>
        <li>
          <p>{movie.type}</p>
          <p>{movie.duration}</p>
        </li>
        <li>
          <h3>{movie.name}</h3>
          <p>{movie.score}</p>
        </li>
      </ul>
    </li>
  );
};

