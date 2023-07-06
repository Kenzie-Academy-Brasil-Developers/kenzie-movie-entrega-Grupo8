import { useContext } from "react";
import { IReview } from "../../../../providers/MoviesContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  const { firstLetter } = useContext(UserContext);
  return (
    <ul>
      <span>{firstLetter}</span>
      <li>{review.score}</li>
      <li>{review.description}</li>
      <li>{review.userName}</li>
    </ul>
  );
};
