import { useContext } from "react";
import { IReview } from "../../../../providers/MoviesContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import estrela from "../../../../assets/estrela.svg";

export const ReviewsCard = ({ review }: { review: IReview }) => {
  const { firstLetter } = useContext(UserContext);
  return (
   
    <ul className="my-[10px] mx-[1px] flex-initial w-[275px] min-h-[510px]  sm:w-[390px] md:min-h-[510px] h-max  gap-6 flex-col flex items-center flex-wrap  hover:shadow-lg hover:shadow-yellow-600 ">
      
        <span className="text-white font-poppins text-[32px] mt-6 font-semibold flex items-center justify-center w-[81px] h-[81px] rounded-4xl border-2-yellow bg-yellow-500 border">
          {firstLetter}
        </span>
      
      <li className=" font-poppins text-[21px]  gap-2 flex items-center justify-center">
        <img src={estrela} alt="estrela da avaliação" />
        {review.score}
      </li>
      <li className="">
        <p className=" flex-1 pr-6 pl-6 h-[216px] font-poppins text-[18px] overflow-auto text-justify  text-base">{review.description}</p>
      </li>
      <li className="text-[26px] font-bold">{review.userName}</li>
    </ul>
  );
};
