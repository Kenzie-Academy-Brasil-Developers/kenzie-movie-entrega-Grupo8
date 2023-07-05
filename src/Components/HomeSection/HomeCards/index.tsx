import React from "react";
import { MovieCardProps } from "../../Section/MoviesSection/MovieCard/@types";
import estrela from "../../../assets/estrela.svg";

export const HomeCards: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <li>
        <div>
          <img src={movie.image} alt={movie.name} />
        </div>

        <div>
          <p>{movie.type}</p>
          <p>{movie.duration}</p>
        </div>

        <div>
          <h3>{movie.name}</h3>
          {/* Cálculo da média das notas */}
          {movie.reviews && movie.reviews.length > 0 && (
            <div>
              <img src={estrela} alt="avaliacao" />
              <p>
                {(
                  movie.reviews.reduce(
                    (total, review) => total + review.score,
                    0
                  ) / movie.reviews.length
                ).toFixed(1)}
              </p>
            </div>
          )}
        </div>
      </li>
    </>
  );
};
