import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsSection } from "../../ReviewsSection";
import estrela from "../../../../assets/estrela.svg";
import estrelaPreta from "../../../../assets/estrelaPreta.svg";
import { FormCreateReview } from "../../../FormCreateReview";
import { Modal } from "../../../Modal";
import { FormUpdateReview } from "../../../FormUpDateReview";

export const MoviesDetailsList = () => {
  const { moviesDetails, isOpen, setIsOpen, upDateReviews, handleDelete,navigate } =
    useContext(MoviesContext);

  if (!moviesDetails?.length) {
    navigate("/movies")
    return <div>Carregando detalhes do filme...</div>;

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
    <main className="w-full">
      <section className="">
        <div key={movie.id} className="">
          <img
            src={movie.image}
            alt={movie.name}
            className=" w-full rounded-4xl z-0"
          />
        </div>
      </section>
      <section className="mb-[101px] container mx-auto sm:px-1 lg:px-1 max-w-[1320px] lg:-mt-[125px]">
        <div className="">
          <div className="flex justify-between items-center">
            <p className=" mt-5 sm:mt-0 flex items-center justify-center w-[100px] h-[32px] lg:w-[170px] lg:h-[50px] rounded-4xl border-2-yellow bg-yellow-500 text-black font-bold flex-row">{movie.type}</p>
            <span className="mt-5 sm:mt-0 text-gray-400">{`${movie.duration}m`}</span>
          </div>

          <div className="mt-5 sm:mt-0 flex justify-between items-center">
            <h1 className=" text-white font-poppins lg:text-[50px] font-bold">{movie.name}</h1>
            <div className=" flex items-center gap-3">
              <img src={estrela} alt="avaliação dos usuários " />
              <span className="font-bold sm:text-[21px]">{averageRating}</span>
            </div>
          </div>
        </div>

        <div className="mt-[66px]">
          <div className="mr-2 sm:w-3/4">
            <p className="text-justify">{movie.synopsis}</p>
          </div>
        </div>
      </section>
      <section className=" mt-[60px] mb-[101px] container mx-auto sm:px-1 lg:px-1 max-w-[1320px]">
        <div className=" flex flex-wrap items-center justify-between">
          <h1 className="sm:text-[24px] lx:text-[34px] lg:text-[44px]  font-bold">AVALIAÇÕES</h1>

          {upDateReviews && upDateReviews.length > 0 ? (
            <section>
              <div>
                <p>{upDateReviews[0].description}</p>
                <div>
                  <img src={estrela} alt="estrela de avaliação" />
                  <span>{upDateReviews[0].score}</span>
                </div>
                <div>
                  <button
                    id={upDateReviews[0].id.toString()}
                    onClick={() => setIsOpen(true)}
                  >
                    Editar
                  </button>
                  {isOpen ? (
                    <Modal>
                      <h2>Editar Avaliação</h2>
                      <FormUpdateReview />
                    </Modal>
                  ) : null}

                  <button
                    id={upDateReviews[0].id.toString()}
                    onClick={() => handleDelete(upDateReviews[0].id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <div className=" flex items-center justify-center  w-[100px] h-[32px] lg:w-[170px] lg:h-[50px] rounded-4xl border-2-yellow bg-yellow-500 flex-row">
              <button className="flex items-center font-poppins text-[15px] font-semibold text-black" onClick={() => setIsOpen(true)}>
                <img className="" src={estrelaPreta} alt="" /> Avaliar
              </button>
              {isOpen ? (
                <Modal>
                  <FormCreateReview />
                </Modal>
              ) : null}
            </div>
          )}
        </div>
          </section>
          <section className="container mx-auto sm:px-1 lg:px-1 max-w-[1320px]">
          
            <ReviewsSection />
          </section>
    </main>
  );
};
