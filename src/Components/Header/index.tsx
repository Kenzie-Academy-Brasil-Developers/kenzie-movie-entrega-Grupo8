import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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
    }
  }, []);

  return (
    <header>
      <div>
        <h2>kenziemovie</h2>
        <div>
          {userName ? (
            <>
              <span>Welcome, {userName}</span>
              <button onClick={onLogout}>Logout</button>
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
