import { NavLink } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

interface HeaderProps {
  userLogout: () => void;
  to1: string;
  text1: string;
  to2: string;
  text2: string;

}

export const Header = ({}: HeaderProps) => {
  const { userLogout,firstLetter, user } = useContext(UserContext)
  
  
  return (
    <header>
      <div>
        <h2>kenziemovie</h2>
        <div>
          {user?.name ? (
            <>
              <div>
                <div>
                  <span>{firstLetter}</span>
                  <span>{user?.name}</span>
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
