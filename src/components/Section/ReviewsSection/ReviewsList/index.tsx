import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsCard } from "../ReviewsCard";

export const ReviewsList = () => {
  const { moviesDetails } = useContext(MoviesContext);

  if (moviesDetails === null) {
    return null;
  }

  return (
    <div>
      {moviesDetails.reviews?.map((review) => (
        <ReviewsCard key={review.id} review={review} />
      ))}
    </div>
  );
};
