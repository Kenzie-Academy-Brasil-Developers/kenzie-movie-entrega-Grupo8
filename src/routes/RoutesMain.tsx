import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

import { MovieDetailsPage } from "../pages/MoviesPage/MovieDetailsPage";
import { MoviesPage } from "../pages/MoviesPage";
import { LoginPage } from "../pages/LoginPage";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
     {/*  <Route element={<ProtectedRoutes />}> */}
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/details" element={<MovieDetailsPage />} />
     {/*  </Route> */}
    </Routes>
  );
};
