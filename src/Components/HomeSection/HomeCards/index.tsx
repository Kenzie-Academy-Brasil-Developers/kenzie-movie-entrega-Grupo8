import React from "react";
import { MovieCardProps } from "../../Section/MoviesSection/MovieCard/@types";
import estrela from "../../../assets/estrela.svg";

// ver map da avalicao

export const HomeCards: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <li className="bg-gray-800 flex-col mt-4 mb-4">
        <div>
          <img  className="bg-gray-800 rounded-3xl mb-4" src={movie.image} alt={movie.name} />
        </div>

        <div className="flex justify-between">
          <p className="border-2 border-solid border-yellow-500 rounded-xl text-md font-bold w-16 mb-4 text-center text-black bg-yellow-500">{movie.type}</p>
          <p className="text-gray-500">{`${movie.duration} min`}</p>
        </div>

        <div className="flex  justify-between">
          <p className="text-white font-bold text-xl">{movie.name}</p>
          {/* Cálculo da média das notas */}
          {movie.reviews && movie.reviews.length > 0 && (
            <div className="flex items-center gap-2 text-white font-bold">
              <img src={estrela} alt="avaliacao" />
              <p>
                {(movie.reviews.reduce((total, review) => total + review.score,0) / movie.reviews.length).toFixed(1)}
              </p>
            </div>)}
        </div>
      </li>
    </>
  );
};