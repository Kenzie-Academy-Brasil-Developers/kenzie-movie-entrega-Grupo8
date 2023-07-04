import { useContext } from "react";
import { MoviesContext } from "../../../../providers/MoviesContext/MovieContext";
import { ReviewsSection } from "../../ReviewsSection";

export const MoviesDetailsList = () => {
    const { moviesDetails } = useContext(MoviesContext);
  
    if (!moviesDetails) {
     
      return <div>Carregando detalhes do filme...</div>;
    }
  
    return (
      <div>
        <ul>
          <li>
            <img src={moviesDetails.image} alt={moviesDetails.name} /></li>
         
        </ul>
        <div>
            <ReviewsSection/>
        </div>
      </div>
    );
  };
  