export interface IMoviesProviderProps {
  children: React.ReactNode;
};

export interface IMovie {
  score: React.ReactNode;
  duration?: string;
  image: string | undefined;
  id: number;
  name: string;
  type: string;
  tempo: number;
  synopsis: string;
  reviews?: IReview[];
};


export interface IReview {
  name: ReactNode;
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
};

export interface IMoviesContext {
  movies: IMovie[];
  reviews: IReview[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  currentCardIndex: number;
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>;
  getMovies: () => Promise<void>;
  handleDelete: (reviewId: number) => Promise<void>;
  createReview: (formData: IReview) => Promise<void>;
  handleUpdateReviews: (
    reviewId: number,
    formData: {
      review: any;
    }
  ) => Promise<void>;
  handleMoviesDetails: (moviesId: number) => Promise<void>;
  moviesDetails: IMovie | null;
};
