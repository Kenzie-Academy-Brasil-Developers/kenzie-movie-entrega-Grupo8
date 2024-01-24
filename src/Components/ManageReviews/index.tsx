import { useContext } from "react";
import { IReview } from "../../providers/MoviesContext/@types";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import estrela from "../../assets/estrela.svg";
import estrelaPreta from "../../assets/estrelaPreta.svg";
import delet from "../../assets/delet.svg";
import edit from "../../assets/edit.svg";
import { FormCreateReview } from "../FormCreateReview";
import { FormUpdateReview } from "../FormUpDateReview";
import { ModalCreateReviews } from "../Modal/ModalCreateReviews";
import { ModalUpDateReviews } from "../Modal/ModalUpDateReviews";
import { Anchor } from "../../Fragments/Anchor";

export const ManageReviews = () => {
  const {
    moviesDetails,
    isOpen,
    setIsOpen,
    handleDelete,
    isOpenUpDate,
    setIsOpenUpDate,
  } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  function findReviewByUserId(userID: number | undefined): IReview | undefined {
    const movieDetails = moviesDetails?.find((movie) =>
      movie.reviews.some((review) => review.userId === userID)
    );
    return movieDetails?.reviews.find((review) => review.userId === userID);
  }

  const review = findReviewByUserId(user?.id);

  return (
    <>
      {user?.name ? (
        <section>
          <div className="">
            {review ? (
              <section className="max-w-[1280px] bg-transparent mt-[15px] m-auto ">
                <div className="h-[100px] flex items-center">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {" "}
                    Avaliações{" "}
                  </h1>
                </div>
                <div className="container max-w-[1280px] h-[60px] flex items-start">
                  <p>Sua avaliação</p>
                </div>
                <div
                  key={review.id}
                  className="w-4/4 md:flex md:flex-row md:justify-between flex-wrap "
                >
                  <div className="w-2/2 md:w-3/4 py-4 min-h-[108px] ">
                    <p className="px-[1px] md:px-[30px] text-justify">
                      {review.description}
                    </p>
                  </div>
                  <div className=" w-2/2 md:w-1/4 justify-evenly py-4 flex md:justify-between gap-10 ">
                    <div className="flex items-center gap-3">
                      <img src={estrela} alt="estrela de avaliação" />
                      <span>{review.score}</span>
                    </div>
                    <div className="flex justify-around items-center gap-3">
                      <button
                        id={review.id.toString()}
                        onClick={() => setIsOpenUpDate(true)}
                      >
                        <img src={edit} alt="Botão para editar a avaliação" />
                      </button>
                      {isOpenUpDate ? (
                        <ModalUpDateReviews>
                          <h1> Editar Avaliação </h1>
                          <FormUpdateReview reviewId={review.id} />
                        </ModalUpDateReviews>
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
              <section className="max-w-[1280px] bg-transparent mt-[15px] m-auto h-[100px] flex items-center justify-between flex-wrap">
                <div className=" w-full flex justify-center sm:w-1/4">
                  <h1 className=" text-2xl md:text-4xl font-bold">
                    AVALIAÇÕES
                  </h1>
                </div>
                <div className="  w-full flex justify-center sm:w-1/4">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-[120px] h-[40px] mb-4 mt-2 flex items-center justify-center text-center text-black bg-yellow-500"
                  >
                    <img src={estrelaPreta} alt="" /> Avaliar
                  </button>
                </div>
              </section>
            )}
            {isOpen && (
              <ModalCreateReviews>
                <h1 className="font-bold text-4xl mb-8">Avaliação</h1>
                <FormCreateReview />
              </ModalCreateReviews>
            )}
          </div>
        </section>
      ) : (
        <>
        <section className="flex flex-col items-center justify-center mt-[50px] gap-11">
          <div>
            <h1 className="text-2xl">Quer registrar a sua avaliação? faça o seu cadastro! </h1>
          </div>
          <div>
            <Anchor
              to={"/register"}
              text="Cadastre-se"
              className="font-bold flex items-center justify-center gap-2 rounded-4xl w-[120px] h-10 bg-yellow-500 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-white"
            />
          </div>

        </section>
        </>
      )}
    </>
  );
};
