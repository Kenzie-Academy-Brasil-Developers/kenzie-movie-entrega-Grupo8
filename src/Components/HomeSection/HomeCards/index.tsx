import React from "react";
import estrela from "../../../assets/estrela.svg";
import { MovieCardProps } from "../../Section/MoviesSection/MovieCard/@types.ts";


export const HomeCards: React.FC<MovieCardProps> = ({ movie }) => {
  
  return (
    
    <>
      <li className="bg-transparent flex-col mt-4 mb-4">
        <div>
          <img  className="bg-transparent rounded-4xl mb-4"  src={movie.image} alt={movie.name} />
        </div>

        <div className="flex justify-between">
          <p className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-18 mb-4 text-center text-black bg-yellow-500">{movie.type}</p>
          <p className="text-gray-500">{`${movie.duration}m`}</p>
        </div>

        <div className="flex  justify-between">
          <p className="text-white font-bold text-xl">{movie.name}</p>
         
          {movie.reviews && movie.reviews.length > 0 && (
            <div className="flex items-center gap-2 text-white font-bold">
              <img src={estrela} alt="avaliacao" />
              <p>
                {(movie.reviews.reduce((total, review) => total + Number(review.score),0) / Number(movie.reviews.length)).toFixed(1)}
              </p>
            </div>)}
        </div>
      </li>
    </>
  );
};