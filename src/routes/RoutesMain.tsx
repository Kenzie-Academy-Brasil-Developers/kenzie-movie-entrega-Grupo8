import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

import { MovieDetailsPage } from "../pages/MoviesPage/MovieDetailsPage";
import { MoviesPage } from "../pages/MoviesPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/details" element={<MovieDetailsPage />} />
    </Routes>
  );
};
