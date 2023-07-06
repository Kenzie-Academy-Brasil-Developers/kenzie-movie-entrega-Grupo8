import { useContext } from "react";
import { IMovie } from "../../../../src/providers/MoviesContext/@types";
import { MoviesContext } from "../../../providers/MoviesContext/MovieContext";
import { HomeCards } from "../HomeCards/index";

export const HomeList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      {movies.map((movie: IMovie) => (
        <HomeCards
          key={movie.id}
          movie={{ ...movie, image: movie.image ?? "" }} handleMoviesDetails={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      ))}
    </div>
  );
};
