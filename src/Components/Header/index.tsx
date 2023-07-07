import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

interface HeaderProps {
  userLogout: () => void;
  to1: string;
  text1: string;
  to2: string;
  text2: string;
}

export const Header = ({}: HeaderProps) => {
  const { userLogout, firstLetter, user } = useContext(UserContext);

  return (
    <header className="w-full h-43">
      <div className="w-full max-w-1328px h-43 flex flex-row items-center justify-between mx-auto">
        <h2>kenziemovie</h2>
        <div className="w-273 h-43 flex items-center justify-between">
          {user?.name ? (
            <>
              <div>
                <div className='flex items-center justify-between'>
                  <span
                  className="text-white font-poppins text-17 font-semibold flex items-center justify-center w-43 h-43 rounded-full bg-yellow-500"
                  >
                    {firstLetter}
                  </span>
                  <span className="text-white font-poppins text-17 font-normal leading-normal color: '#FFF'" >{user?.name}</span>
                </div>
                <NavLink onClick={userLogout} to={""}>Sair</NavLink>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink
                to="/login"
                className="inline-block w-114 h-43 left-1214 rounded-full bg"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
