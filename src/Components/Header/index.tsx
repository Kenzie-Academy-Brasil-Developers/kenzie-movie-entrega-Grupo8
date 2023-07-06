import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

<<<<<<< HEAD
interface HeaderProps {
  onLogout: () => void;
}

export const Header = ({ onLogout }: HeaderProps) => {
  const [userName, setUserName] = useState<string | undefined>(undefined);

  
  useEffect(() => {
    const userJSON = localStorage.getItem("@kenzieMovies:user");
    if (userJSON) {
      
      const user = JSON.parse(userJSON);
      setUserName(user.name);
    }/* 
    const firstLetter = user.name.charAt(0); */
  }, []);
  
  return (
    <header>
      <div>
        <h2>kenziemovie</h2>
        <div>
          {userName ? (
            <>
              <div>
                <div>
                  <span>p</span>
                  <span>{userName}</span>
=======
export const Header = () => {
    return(
        <header>
            <div className="flex">
                <div className="flex-none w-14 h-14">
                    <h2>kenziemovie</h2>
                </div>

                <div className="flex-initial w-64">
                    <Anchor />

                    <Button />
>>>>>>> Desing/Login
                </div>
                <button onClick={onLogout}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
