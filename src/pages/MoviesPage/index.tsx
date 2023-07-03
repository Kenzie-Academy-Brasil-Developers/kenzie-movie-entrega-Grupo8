import React, { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";


export const MoviesPage = () => {
  const { movies } = useContext(MoviesContext);
  console.log('MoviesPages', movies)
  return <h1>teste</h1>;
};
