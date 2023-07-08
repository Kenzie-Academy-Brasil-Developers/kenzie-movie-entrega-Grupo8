import { useContext } from "react";
import { IReview } from "../../../../providers/MoviesContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import estrela from "../../../../assets/estrela.svg";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  const { firstLetter } = useContext(UserContext);
  return (
    // <ul className="my-[10px] mx-[5px] w-[413px] min-h-[510px] border-2 overflow-auto gap-6 flex-col flex items-center flex-wrap hover:border-black hover:shadow-xl ">
    <ul className="my-[10px] mx-[5px] w-[413px] min-h-[510px]  overflow-auto gap-6 flex-col flex items-center flex-wrap  hover:shadow-lg hover:shadow-yellow-600 ">
      
        <span className="text-white font-poppins text-[32px] font-semibold flex items-center justify-center w-[81px] h-[81px] rounded-4xl border-2-yellow bg-yellow-500">
          {firstLetter}
        </span>
      
      <li className=" font-poppins text-[21px] gap-2 flex items-center justify-center">
        <img src={estrela} alt="estrela da avaliação" />
        {review.score}
      </li>
      <li className="">
        <p className=" w-[302px] h-[216px] text-center font-poppins text-[18px] text-justify  text-base">{review.description}</p>
      </li>
      <li className="text-[26px] font-bold">{review.userName}</li>
    </ul>
  );
};
