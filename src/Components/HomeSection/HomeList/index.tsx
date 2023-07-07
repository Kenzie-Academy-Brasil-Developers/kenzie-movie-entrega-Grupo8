import { useContext } from "react";
import { IMovie } from "../../../../src/providers/MoviesContext/@types";
import { MoviesContext } from "../../../providers/MoviesContext/MovieContext";
import { HomeCards } from "../HomeCards/index";

export const HomeList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <ul className="container mx-auto max-w-1320bg-transparent flex flex-wrap justify-evenly items-center">
      {movies.map((movie: IMovie) => (
       
        <HomeCards
          key={movie.id}
          movie={{...movie, image: movie.image ?? "" }} handleMoviesDetails={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      ))}
    </ul>
  );
};