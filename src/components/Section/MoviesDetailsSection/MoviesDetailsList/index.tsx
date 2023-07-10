import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsSection } from "../../ReviewsSection";
import estrela from "../../../../assets/estrela.svg";
import estrelaPreta from "../../../../assets/estrelaPreta.svg";
import delet from "../../../../assets/delet.svg";
import edit from "../../../../assets/edit.svg";
import { FormCreateReview } from "../../../FormCreateReview";
import { Modal } from "../../../Modal/ModalCreateReviews";
import { FormUpdateReview } from "../../../FormUpDateReview";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import { IReview } from "../../../../providers/MoviesContext/@types";

export const MoviesDetailsList = () => {
  const {
    moviesDetails,
    isOpen,
    setIsOpen,
    handleDelete,
    navigate,
    isOpenUpDate,
    setIsOpenUpDate

  } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  
  function findReviewByUserId(userID: number | undefined): IReview | undefined {
    const movieDetails = moviesDetails?.find((movie) =>
      movie.reviews.some((review) => review.userId === userID)
    );
    return movieDetails?.reviews.find((review) => review.userId === userID);
  }

  const review = findReviewByUserId(user?.id);

  if (!moviesDetails?.length) {
    navigate("/movies");
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
        <section className="container mx-auto sm:px-1 lg:px-1 max-w-[1280px] flex flex-col md:flex-row items-center justify-between ">
          <div className="container mx-auto my-[20px] sm:px-1 lg:px-1 max-w-[1380px] h-[100px] flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold"> Avaliações </h1>
          </div>
        </section> 
        <section className="w-screen ">

          <div className="w-screen  container mx-auto sm:px-1 lg:px-1 max-w-[1380px] flex flex-col md:flex-row items-center justify-between ">
            {review ? (
              <section className="w-11/12  sm:px-1 lg:px-1 bg-transparent mt-[15px] m-auto">
                    <div className="container sm:px-1 lg:px-1 max-w-[1380px] h-[60px] flex items-start">
                      <p>Sua avaliação</p>
                    </div>
                <div
                  key={review.id}
                  className=" container lg:px-10 max-w-[1380px] flex md:flex-row items-center justify-between "
                >
                  <div className="sm:px-1 lg:px-1 max-w-[666px] min-h-[108px] ">
                    <div className="flex items-center">
                      <p className="pl-[50px]">{review.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-10 ">
                    <div className="flex items-center gap-1">
                      <img src={estrela} alt="estrela de avaliação" />
                      <span>{review.score}</span>
                    </div>
                    <div className="flex justify-around items-center gap-2">
                      <button
                        id={review.id.toString()}
                        onClick={() => setIsOpenUpDate(true)}
                      >
                        <img src={edit} alt="Botão para editar a avaliação" />
                      </button>
                      {isOpenUpDate ? (
                        <Modal>
                          <h1> Editar Avaliação </h1>
                          <FormUpdateReview reviewId={review.id} />
                        </Modal>
                      ) : null}
                      <button
                        id={review.id.toString()}
                        onClick={() => handleDelete(review.id)}
                      >
                        <img src={delet} alt="Botão para excluir a avaliação" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="mt-[60px] container mx-auto sm:px-1 lg:px-1 max-w-[1280px] flex flex-col md:flex-row items-center justify-between ">
                <h1>AVALIAÇÕES</h1>
                <button
                  onClick={() => setIsOpen(true)}
                  className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-[120px] h-[40px] mb-4 mt-2 flex items-center justify-center text-center text-black bg-yellow-500"
                >
                  <img src={estrelaPreta} alt="" /> Avaliar
                </button>
              </section>
            )}
            {isOpen && (
              <Modal>
                <h1 className="font-bold text-4xl mb-8">Avaliação</h1>
                <FormCreateReview />
              </Modal>
            )}
          </div>
        </section>
        <section className="py-10">
          <ReviewsSection />
        </section>
      </section>
    </main>
  );
};
