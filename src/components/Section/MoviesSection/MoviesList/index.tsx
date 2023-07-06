import { useContext } from "react";
import { IMovie } from "../../../../providers/MoviesContext/@types";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { MovieCard } from "../MovieCard";


export const MoviesList = () => {
  const { movies, handleMoviesDetails } = useContext(MoviesContext);

  return (
    <div>
      {movies.map((movie: IMovie) => (
        <MovieCard
          key={movie.id}
          movie={{
            ...movie,
            image: movie.image ?? "",
          }}
          handleMoviesDetails={handleMoviesDetails}
        />
      ))}
    </div>
  );
};

