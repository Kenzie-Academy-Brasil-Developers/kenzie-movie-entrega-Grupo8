/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMovie {
  score: React.ReactNode;
  duration?: string;
  image?: string | undefined;
  id: number;
  name: string;
  type: string;
  tempo: number;
  synopsis: string;
  reviews?: IReview[] | undefined;
}

export interface IMovieDetails {
  name: string;
  synopsis: React.ReactNode;
  duration: React.ReactNode;
  type: string;
  image: string | undefined;
  id: number;
  movie: IMovie;
  reviews: IReview[];
}

export interface IReview {
  length: number;
  name: React.ReactNode;
  id: number;
  movieId: number;
  userId: number;
  formData?: number | object;
  score: number;
  description: string;
  userName: string;
  synopsis: string;
  reviews: string | number | object;
  image?: string | undefined;
  reviewId: number;
  upDateReviews: IReview[];
}

export interface IMoviesContext {
  movies: IMovie[];
  reviews: IReview[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  getMovies: () => Promise<void>;
  handleDelete: (reviewId: number) => Promise<void>;
  createReview: (formData: IReview) => Promise<void>;
  handleUpdateReviews: (
    reviewId: number,
    formData: { review: IReview }
  ) => Promise<void>;
  handleMoviesDetails: (moviesId: number) => Promise<void>;
  moviesDetails?: IMovieDetails[] | undefined;
  navigate: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenUpDate: boolean;
  setIsOpenUpDate: React.Dispatch<React.SetStateAction<boolean>>;
}
