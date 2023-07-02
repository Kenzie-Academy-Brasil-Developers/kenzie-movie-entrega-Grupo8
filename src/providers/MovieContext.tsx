import React, { createContext, useState, useEffect } from "react";
import { api } from "../service/api";
import { Slide, toast } from "react-toastify";

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
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}


export const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [moviesDetalis, setMoviesDetalis] = useState<IMovie[]>([]);

  console.log(moviesDetalis)

  //Comentários: Listagem de filmes

  const getMovies = async () => {
    try {
      const response = await api.get("/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error("Error retrieving movies:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  //Comentários: Renderizar detalhes do filme

const handleMoviesDetails = async (moviesId: IMovie) => {
  const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");
  const token = /* tokenWithQuotes.replace(/"/g, ""); */'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYmFzdGlhb0BlbWFpbC5jb20iLCJpYXQiOjE2ODgzMTMzNzksImV4cCI6MTY4ODMxNjk3OSwic3ViIjoiMiJ9.m6LL_AB9OYxUhekjPLVlB37rEBGTEEdEQZSEKlfvoTY'

  try {
    const { data } = await api.get(`/movies/3?_embed=reviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMoviesDetalis(data);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
  
};
useEffect(() => {
  handleMoviesDetails();
}, []);


  //Comentários: criação de Avaliações

  const createReview = async (formData: IReview) => {
    try {
      const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");
      const token = tokenWithQuotes.replace(/"/g, "");
      const { data } = await api.post("/reviews", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews((reviews) => [...reviews, data]);
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

  //Comentários: Edição Avaliações

  const handleUpdateReviews = async (reviewId: number, formData) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
    const token = tokenWithQuotes.replace(/"/g, "");
    try {
      await api.put(`/users/techs/${reviewId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReviews((prevReviews) =>
      prevReviews.map((review) => {
          if (review.id === reviewId) {
            return {
              ...review,
              status: formData.review,
            };
          }
          return review;
        })
      );

      toast.success("Status atualizado com sucesso!", {
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

  //Comentários: deletar Avaliações
  
  const handleDelete = async (reviewId: number) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");
    const token = tokenWithQuotes.replace(/"/g, "");
    try {
      await api.delete(`/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews((reviews) =>
        reviews.filter((review) => review.id !== reviewId)
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
  };

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, getMovies, handleDelete, createReview, handleUpdateReviews, handleMoviesDetails }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
