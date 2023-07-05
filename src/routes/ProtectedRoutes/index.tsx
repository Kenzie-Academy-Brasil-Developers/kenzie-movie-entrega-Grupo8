import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  console.log('user',user)

  return user ? <Outlet /> : <Navigate to="/" />;
};
