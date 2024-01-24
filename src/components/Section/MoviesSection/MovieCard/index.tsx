import React from "react";
import { MovieCardProps } from "./@types";
import estrela from "../../../../assets/estrela.svg";

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  handleMoviesDetails,
}) => {
  const handleClick = () => {
    handleMoviesDetails(movie.id);
  };

  const averageRating =
    movie && movie.reviews && movie.reviews.length > 0
      ? (
          movie.reviews.reduce(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (total, review: { score: any }) =>
              total + Number(review.score),
            0
          ) / Number(movie.reviews.length)
        ).toFixed(1)
      : 0;

  return (
    <ul onClick={handleClick} className="bg-transparent flex-col mt-4 mb-4 gap-5">
      <li>
        <img
          src={movie.image}
          alt={movie.name}
          id={String(movie.id)}
          className="bg-transparent rounded-4xl mb-4"
        />
      </li>
      <li className="flex justify-between">
        <p className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-[120px] h-[40px] mb-4 mt-2 flex items-center justify-center text-center text-black bg-yellow-500">
          {movie.type}
        </p>
        <p className="text-gray-500">{`${movie.duration}m`}</p>
      </li>
      <li className="flex  justify-between">
        <h3 className="text-white font-bold text-xl">{movie.name}</h3>
        <div className="flex items-center gap-2 text-white font-bold">
          <img src={estrela} alt="Estrela de Avaliação" />
          <p>{averageRating}</p>
        </div>
      </li>
    </ul>
  );
};
