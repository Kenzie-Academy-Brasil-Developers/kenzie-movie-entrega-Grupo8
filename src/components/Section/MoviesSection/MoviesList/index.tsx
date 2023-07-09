import { useContext } from "react";
import { IMovie } from "../../../../providers/MoviesContext/@types";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { MovieCard } from "../MovieCard";

export const MoviesList = () => {
  const { movies, handleMoviesDetails } = useContext(MoviesContext);

  return (
    <section className="container mx-auto max-w-1320 bg-transparent flex flex-wrap justify-center gap-14 items-center">
      {movies.map((movie: IMovie) => (
        <MovieCard
          key={movie.id}
          movie={{
            ...movie,
            image: movie.image ?? "",
          }}
          handleMoviesDetails={handleMoviesDetails}
          isStyled={false}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          handleStylePhoto={() => {
            // Implemente o código necessário para estilizar a foto específica aqui
          }}
        />
      ))}
    </section>
  );
};
