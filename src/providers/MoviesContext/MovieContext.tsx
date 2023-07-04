import { createContext, useState, useEffect } from "react";
import { api } from "../../service/api";
import { Slide, toast } from "react-toastify";
import {
  IMoviesProviderProps,
  IMovie,
  IReview,
  IMoviesContext,
} from "./@types";
import { useNavigate } from "react-router-dom";

export const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [moviesDetails, setMoviesDetails] = useState<IMovie[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  console.log(currentCardIndex)

  const getMovies = async () => {
    try {
      const response = await api.get("/movies");
      console.log(response.data);
      const movies = response.data;

      for (const movie of movies) {
        const { data } = await api.get(`/movies/${movie.id}?_embed=reviews`);
        movie.reviews = data.reviews;
      }

      setMovies(movies);
    } catch (error) {
      console.error("Error retrieving movies:", error);
      setMovies([]);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleMoviesDetails = async (moviesId: any) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");

    if (tokenWithQuotes) {
      const token = tokenWithQuotes.replace(/"/g, "");

      try {
        const { data } = await api.get(`/movies/${moviesId}?_embed=reviews`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMoviesDetails(data);
        navigate("/movies/details");
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
  };

  const createReview = async (formData: IReview) => {
    try {
      const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");

      if (tokenWithQuotes) {
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
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const handleUpdateReviews = async (
    reviewId: number,
    formData: { review: any }
  ) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");

    if (tokenWithQuotes) {
      const token = tokenWithQuotes.replace(/"/g, "");

      try {
        await api.put(`/reviews/${reviewId}`, formData, {
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
        toast.error(
          "Ocorreu um erro ao tentar realizar a operação solicitada.",
          {
            transition: Slide,
            autoClose: 2000,
          }
        );
      }
    }
  };

  const handleDelete = async (reviewId: number) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieMovies:token");

    if (tokenWithQuotes) {
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
        toast.error(
          "Ocorreu um erro ao tentar realizar a operação solicitada.",
          {
            transition: Slide,
            autoClose: 2000,
          }
        );
      }
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        reviews,
        setMovies,
        currentCardIndex, 
        setCurrentCardIndex,
        getMovies,
        handleDelete,
        createReview,
        handleUpdateReviews,
        handleMoviesDetails,
        moviesDetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};