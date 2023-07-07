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
    <header className="w-full h-103 p-5 bg-slate-800 flex flex-row items-center z-10 ">
      <div className="w-10/12 maxh-43 mx-auto bg-yellow-500 flex flex-row gap-4 flex-wrap justify-between items-center">
        <div className="border-2 border-solid border-gray-400">
          <h2 className="w-full text-white">kenziemovie</h2>
        </div>
        <div className="w-273 h-43 ">
          {user?.name ? (
            <>
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <span className="text-white font-poppins text-17 font-semibold flex items-center justify-center w-43 h-43 rounded-full bg-yellow-500">
                    {firstLetter}
                  </span>
                  <span className="text-white font-poppins text-17 font-normal leading-normal color: '#FFF'">
                    {user?.name}
                  </span>
                </div>
                <NavLink onClick={userLogout} to={""}>
                  Sair
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="text-white flex flex-row gap-4">
                <NavLink to="/register" >
                  Register
                </NavLink>
                <NavLink to="/login" className="text-white">
                  Login
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
