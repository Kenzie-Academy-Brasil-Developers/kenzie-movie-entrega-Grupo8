import { NavLink } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContext/UserContext";


 HEAD
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
<<<<<<< HEAD
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
=======
            <span>{firstLetter}</span>
              <span>{userName}</span>
              <button onClick={userLogout}>Sair</button>
>>>>>>> 0bc38971aa0d96dbe5edf23b383351c93a5411dd
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
