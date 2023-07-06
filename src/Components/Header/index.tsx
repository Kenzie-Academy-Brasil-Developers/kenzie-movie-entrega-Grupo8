import { NavLink } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

interface HeaderProps {
  userLogout: () => void;
}

export const Header = ({}: HeaderProps) => {
  const { userLogout, userName, firstLetter } = useContext(UserContext)
  
  
  return (
    <header>
      <div>
        <h2>kenziemovie</h2>
        <div>
          {userName ? (
            <>
              <div>
                <div>
                  <span>{firstLetter}</span>
                  <span>{userName}</span>
                </div>
                <button onClick={userLogout}>Sair</button>
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
