import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsCard } from "../ReviewsCard";

export const ReviewsList = () => {
  const { moviesDetails } = useContext(MoviesContext);
 

  if (!moviesDetails?.length) {
    return null;
  }

  const movieReview = moviesDetails![0].reviews

  return (
    <div className="flex container mx-auto lg gap-4 flex-wrap">
      {movieReview.map((review) => (
        <ReviewsCard key={review.id} review={review} />
      ))}
    </div>
  );
};


