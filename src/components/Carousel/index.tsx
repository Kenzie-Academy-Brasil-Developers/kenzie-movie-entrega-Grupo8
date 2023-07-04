import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../providers/MoviesContext/MovieContext";

export const Carousel: React.FC = () => {
  const { movies, currentCardIndex, setCurrentCardIndex } =
    useContext(MoviesContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentCardIndex, movies.length, setCurrentCardIndex]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.image} alt={movie.name} />
          <div>
            <p>{movie.type}</p>
            <p>{movie.duration}</p>
          </div>
          <div>
            <h3>{movie.name}</h3>

            {/* Renderizar as avaliações dos usuários */}
            {movie.reviews &&
              movie.reviews.map((review) => (
                <div key={review.userId}>
                  <p>{review.score}</p>
                </div>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
