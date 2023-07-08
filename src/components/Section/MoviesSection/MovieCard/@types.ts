import { IReview } from "../../../../providers/MoviesContext/@types.ts";

export interface Movie {
  id: number;
  name: string;
  type: string;
  duration: string;
  image: string;
  score: number;
}

/* export interface MovieCardProps {
  handleMoviesDetails: (movieId: number) => void;
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
 */

export type MovieCardProps = {
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
  handleMoviesDetails: (moviesId: number) => Promise<void>;
  isStyled: boolean; // Adicione esta propriedade ao tipo
  handleStylePhoto: (photoId: number) => void;
};
