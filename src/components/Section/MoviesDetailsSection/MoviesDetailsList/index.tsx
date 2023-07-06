import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsSection } from "../../ReviewsSection";
import estrela from "../../../../assets/estrela.svg";

export const MoviesDetailsList = () => {
  const { moviesDetails } = useContext(MoviesContext);

  if (!moviesDetails) {
    return <div>Carregando detalhes do filme...</div>;
  }

  const movie = moviesDetails;
  const averageRating =
    movie.reviews &&
    movie.reviews.length > 0 &&
    (
      movie.reviews.reduce((total, review: { score}) => total + review.score, 0) /
      movie.reviews.length
    ).toFixed(1.0);

  return (
    <main>
      
      <section>
        <div key={movie.id}>
          <img src={movie.image} alt={movie.name} />
          <div>
            <p>{movie.type}</p>
            <span>{movie.duration}</span>
          </div>
          <div>
            <h1>{movie.name}</h1>
            <div>
              <img src={estrela} alt="avaliação dos usuários " />
              <span>{averageRating}</span>
            </div>
          </div>
          <div>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>AVALIAÇÕES</h1>
          <button >
            <img src={estrela} alt="" /> Avaliar
          </button>
        </div>
        <ReviewsSection />
      </section>
    </main>
  );
};
