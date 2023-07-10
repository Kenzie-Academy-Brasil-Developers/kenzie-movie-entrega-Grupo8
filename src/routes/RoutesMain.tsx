import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { MoviesPage } from "../pages/MoviesPage";
import { LoginPage } from "../pages/LoginPage";
import { PublicRoutes } from "./PublicRoutes";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { DashboardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
};
