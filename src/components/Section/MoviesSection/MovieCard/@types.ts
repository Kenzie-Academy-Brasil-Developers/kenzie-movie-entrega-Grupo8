import { IReview } from "../../../../providers/MoviesContext/@types.ts";

export interface Movie {
  id: number;
  name: string;
  type: string;
  duration: string;
  image: string;
  score: number;
  handleStylePhoto: (photoId: number) => void
}

export interface MovieCardProps {
  handleMoviesDetails: (movieId: number) => void;
  isStyled: boolean;
  handleStylePhoto: (photoId: number) => void
  movie: {
    image: string;
    score: React.ReactNode;
    duration?: string;
    id: number;
    name: string;
    type: string;
    tempo: number;
    synopsis: string;
    reviews?: IReview[];
  };
}
