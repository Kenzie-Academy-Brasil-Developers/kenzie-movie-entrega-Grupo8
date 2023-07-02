import React, { createContext, useState } from "react";
import { api } from "../service/api";
/* import { Slide, toast } from "react-toastify"; */

export const MoviesContext = createContext({});

interface IMoviesProviderProps {
  children: React.ReactNode;
}

interface IMovie {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  reviews?: IReview[];
}

interface IReview {
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export const MoviesProvider = ({ children }: IMoviesProviderProps) => {

  const [movies, setMovies] = useState<IMovie[]>([]);
 /*  const [reviews:any, setReviews] = useState<IReview[]>(reviews.IReview[]); */

  console.log(movies)

  const getMovies = async () => {
    try {
      const response = await api.get("/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Error retrieving movies:", error);
      setMovies([]);
    }
  };

  getMovies()

//comentarios: criação de Avaliações

/*   const createReview = async (formData: IReview) => {

    try{
      const token = localStorage.getItem('@kenzieMovies:token');
      const {data} = await api.post('/reviews', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setReviews((reviews: any) => [...reviews, data])
      toast.success("Avaliação realizada com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };
 */

  //comentarios: deletar Avaliações

 /*  const handleDelete = async (reviewId: number) => {
    const token = localStorage.getItem('@kenzieMovies:token');
    try {
      await api.delete(`/users/techs/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews((reviews: any) =>
        movies.filter(
          (movie) => movie.id !== reviewId
        )
      );
      toast.success("Exclusão realizada com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  }; */

  /* const deleteReview = (review) */

  return (
    <MoviesContext.Provider value={{ movies, setMovies, getMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

