import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { MoviesPage } from "../pages/MoviesPage";
import { LoginPage } from "../pages/LoginPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { DashboardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      
    
    </Routes>
  );
};
