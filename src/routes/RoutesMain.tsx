import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

import { MovieDetailsPage } from "../pages/MoviesListPage/MovieDetailsPage";
import { MoviesListPage } from "../pages/MoviesListPage";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movies" element={<MoviesListPage />} />
      <Route path="/movies/details" element={<MovieDetailsPage />} />
    </Routes>
  );
};
