import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsSection } from "../../ReviewsSection";
import estrela from "../../../../assets/estrela.svg";
import { Loading } from "../../../Loarding";
import { ManageReviews } from "../../../ManageReviews";

export const MoviesDetailsList = () => {
  const { moviesDetails, navigate, isLoading } = useContext(MoviesContext);

  if (!moviesDetails || (!moviesDetails.length && isLoading)) {
    navigate("/movies");
    return <Loading />;
  }

  const movie = moviesDetails[0];

  if (!movie || !movie.image) {
    return <div>Filme sem imagem disponível.</div>;
  }

  const averageRating =
    movie && movie.reviews && movie.reviews.length > 0
      ? (
          movie.reviews.reduce(
            (total: any, review: { score: any }) =>
              total + Number(review.score),
            0
          ) / Number(movie.reviews.length)
        ).toFixed(1)
      : 0;

  return (
    <main>
      <section className="w-screen ml-0 rounded-4xl z-0">
        <div key={movie.id} className="">
          <img
            src={movie.image}
            alt={movie.name}
            className="w-screen rounded-4xl z-0"
          />
        </div>
      </section>
      <section className="w-screen ml-0 rounded-4xl z-0 mx-auto flex-wrap">
        <section className="sm:px-1 lg:px-1 max-w-[1280px] bg-transparent w-10/12 mt-[15px] m-auto md:-mt-[125px]">
          <div className="">
            <div className="flex justify-between">
              <p className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-[120px] h-[40px] mb-4 mt-2 flex items-center justify-center text-center text-black bg-yellow-500">
                {movie.type}
              </p>
              <span className="text-slate-400">{`${movie.duration}m`}</span>
            </div>

            <div className="flex justify-between">
              <h1 className="text-white font-poppins sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                {movie.name}
              </h1>
              <div className="flex items-center gap-3">
                <img src={estrela} alt="avaliação dos usuários " />
                <span>{averageRating}</span>
              </div>
            </div>
          </div>

          <div className="mt-[66px]">
            <div className="w-4/4 md:w-3/4 text-justify md:mt-[20px] mr-1 ml-1 md:ml-0">
              <p className="md:mt-[20px]">{movie.synopsis}</p>
            </div>
          </div>
        </section>
        
        <section className="bg-transparent w-10/12 mt-[15px] m-auto">
          <ManageReviews />
        </section>
        <section className="py-10">
          <ReviewsSection />
        </section>
      </section>
    </main>
  );
};
