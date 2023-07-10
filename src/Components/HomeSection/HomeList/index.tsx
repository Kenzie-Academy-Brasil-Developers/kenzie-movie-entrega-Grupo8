import { useContext } from "react";
import { IMovie } from "../../../../src/providers/MoviesContext/@types";
import { MoviesContext } from "../../../providers/MoviesContext/MovieContext";
import { HomeCards } from "../HomeCards/index";

export const HomeList = () => {
  const { movies, handleMoviesDetails } = useContext(MoviesContext);

  return (
    <ul className="container mx-auto max-w-1320 bg-transparent flex flex-wrap justify-center gap-5 items-center">
           {movies.map((movie: IMovie) => (
        <HomeCards
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
    </ul>
  );
};


HomeCards