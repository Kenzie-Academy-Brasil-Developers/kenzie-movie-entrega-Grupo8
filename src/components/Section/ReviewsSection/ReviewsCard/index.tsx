import { useContext } from "react";
import { IReview } from "../../../../providers/MoviesContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import estrela from "../../../../assets/estrela.svg";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  const { firstLetter } = useContext(UserContext);
  return (
    <ul className="w-413 h-510">
      <li className="w-43 h-43 rounded-full bg-yellow-500">
        <span className="text-white font-poppins text-17 font-semibold  w-43 h-43">
          {firstLetter}
        </span>
      </li>
      <li className="flex items-center justify-center">
        <img src={estrela} alt="estrela da avaliação" />
        {review.score}
      </li>
      <li className="w-320">
        <p className="font-family-inter text-base">{review.description}</p>
      </li>
      <li>{review.userName}</li>
    </ul>
  );
};
