import { useContext } from "react";
import { IReview } from "../../../../providers/MoviesContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import estrela from "../../../../assets/estrela.svg";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  const { firstLetter } = useContext(UserContext);
  return (
    <ul className="min-w-413 min-h-510 flex-col  flex-wrap">
      <li className="w rounded-full bg-yellow-500">
        <span className="text-white font-poppins text-17 font-semibold ">
          {firstLetter}
        </span>
      </li>
      <li className="flex items-center justify-center">
        <img src={estrela} alt="estrela da avaliação" />
        {review.score}
      </li>
      <li className="">
        <p className="font-family-inter text-base">{review.description}</p>
      </li>
      <li>{review.userName}</li>
    </ul>
  );
};
