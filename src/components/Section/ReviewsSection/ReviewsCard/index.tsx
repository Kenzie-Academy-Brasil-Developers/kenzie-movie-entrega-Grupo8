import { IReview } from "../../../../providers/MoviesContext/@types";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  return (
    <ul>
      <li>{review.score}</li>
      <li>{review.description}</li>
    </ul>
  );
};
