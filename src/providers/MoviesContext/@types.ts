export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMovie {
  image: string | undefined;
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  reviews?: IReview[];
}

export interface IReview {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export interface IMoviesContext {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  getMovies: () => Promise<void>;
  handleDelete: (reviewId: number) => Promise<void>;
  createReview: (formData: IReview) => Promise<void>;
  handleUpdateReviews: (
    reviewId: number,
    formData: {
      review: any;
    }
  ) => Promise<void>;
  handleMoviesDetails: (moviesId: number) => Promise<void>; // ajuste do tipo do parâmetro
  moviesDetails: IMovie[];
}
