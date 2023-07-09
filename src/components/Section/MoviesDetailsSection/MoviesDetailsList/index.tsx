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



    // Modifiquei a partir daqui

    const renderReviewOptions = () => {
      if (upDateReviews && upDateReviews.length > 0) {
        const review = upDateReviews[0];
  
        return (
          <section>
            <div>
              <p>{review.description}</p>
              <div>
                <img src={estrela} alt="estrela de avaliação" />
                <span>{review.score}</span>
              </div>
              <div>
                <button
                  id={review.id.toString()}
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
                  id={review.id.toString()}
                  onClick={() => handleDelete(review.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </section>
        );
      } else {
        return (
          <div>
            <button onClick={() => setIsOpen(true)} className="rounded-4xl border-2 border-yellow-500 text-md font-bold w-[120px] h-[40px] mb-4 mt-2 flex items-center justify-center text-center text-black bg-yellow-500">
              <img src={estrelaPreta} alt="" /> Avaliar
            </button>
            {isOpen ? (
              <Modal>
                <h1 className="font-bold text-4xl mb-8">Avaliação</h1>
                <FormCreateReview />
              </Modal>
            ) : null}
          </div>
        );
      }
    };
  
    return (
      <main className="w-full">
        <section className="">
          <div key={movie.id} className="">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full rounded-4xl z-0"
            />
          </div>
        </section>
        <section className="bg-transparent w-10/12 mt-[15px] m-auto md:-mt-[125px]">
          <div className="">
            <div className="flex justify-between">
              <p>{movie.type}</p>
              <span>{`${movie.duration}m`}</span>
            </div>
  
            <div className="flex justify-between">
              <h1 className=" text-white font-poppins text-60 font-bold">
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
        <section>
          <div className="mt-[60px] container mx-auto sm:px-1 lg:px-1 max-w-[1280px] flex flex-col md:flex-row items-center justify-between ">
            <h1>AVALIAÇÕES</h1>
            {renderReviewOptions()}
          </div>
          <ReviewsSection />                        
        </section>
      </main>
    );
  };
  




















































//   return (
//     <main>
//       <section>
//         <div key={movie.id}>
//           <img src={movie.image} alt={movie.name} />
//           <div>
//             <p>{movie.type}</p>
//             <span>{movie.duration}</span>
//           </div>
//           <div>
//             <h1>{movie.name}</h1>
//             <div>
//               <img src={estrela} alt="avaliação dos usuários " />
//               <span>{averageRating}</span>
//             </div>
//           </div>
//           <div>
//             <p>{movie.synopsis}</p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div>
//           <h1>AVALIAÇÕES</h1>
          
//           {upDateReviews && upDateReviews.length > 0 ? (
//             <section>
//               <div>
//                 <p>{upDateReviews[0].description}</p>
//                 <div>
//                   <img src={estrela} alt="estrela de avaliação" />
//                   <span>{upDateReviews[0].score}</span>
//                 </div>
//                 <div>
//                   <button
//                     id={upDateReviews[0].id.toString()}
//                     onClick={() => setIsOpen(true)}
//                   >
//                     Editar
//                   </button>
//                   {isOpen ? (
//                     <Modal>
//                       <h2>Editar Avaliação</h2>
//                       <FormUpdateReview />     
//                     </Modal>
//                   ) : null}

//                   <button
//                     id={upDateReviews[0].id.toString()}
//                     onClick={() => handleDelete(upDateReviews[0].id)}
//                   >
//                     Excluir
//                   </button>
//                 </div>
//               </div>
//             </section>
//           ) : (
//             <div>
//               <button onClick={() => setIsOpen(true)}>
//                 <img src={estrela} alt="" /> Avaliar
//               </button>
//               {isOpen ? (
//                 <Modal>
//                   <h1 className="font-bold text-4xl mb-8">Avaliação</h1>
//                   <FormCreateReview />
//                 </Modal>
//               ) : null}
//             </div>
//           )}
//         </div>
//         <ReviewsSection />
//       </section>
//     </main>
//   );
// };
