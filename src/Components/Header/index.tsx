import { NavLink } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

interface HeaderProps {
  userLogout: () => void;
  to1: string;
  text1: string;
  to2: string;
  text2: string
}

export const Header = ({}: HeaderProps) => {
  
  const {userName, userLogout, firstLetter } = useContext(UserContext)

  
  
  return (
    <header>
      <div>
        <h2>kenziemovie</h2>
        <div>
          {userName ? (
            <>
            <span>{firstLetter}</span>
              <span>{userName}</span>
              <button onClick={userLogout}>Sair</button>
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
