import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContext";


export const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? <Navigate to="/movies" /> : <Outlet />;
};
