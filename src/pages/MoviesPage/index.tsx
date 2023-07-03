import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";

export const MoviesPage = () => {
  const { movies } = useContext(MoviesContext);
  console.log("MoviesPages", movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {/* Renderizar os dados básicos do filme */}
          <h3>{movie.name}</h3>
          <p>{movie.type}</p>
          <p>{movie.duration}</p>
          <p>{movie.synopsis}</p>
          <img src={movie.image} alt={movie.name} />

          {/* Renderizar as avaliações dos usuários */}
          {movie.reviews && movie.reviews.map((review) => (
            <div key={review.userId}>
              <p>{review.description}</p>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};
