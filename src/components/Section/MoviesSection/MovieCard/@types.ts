import { IReview } from "../../../../providers/MoviesContext/@types";

export interface Movie {
  id: number;
  name: string;
  type: string;
  duration: string;
  image: string;
  score: number;
}

export interface MovieCardProps {
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