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

export const Header = ({ userLogout, to1, text1, to2, text2 }: HeaderProps) => {
  const { firstLetter, user } = useContext(UserContext);

  return (
    <header className="w-full bg-slate-800">
      <div className="container mx-auto max-w-1320">
        <div className="flex items-center justify-between h-103 p-5">
          <div className="border-2 border-solid border-gray-400">
            <h2 className="text-white">kenziemovie</h2>
          </div>
          <div className="w-273 h-43">
            {user?.name ? (
              <div className="flex items-center justify-between">
                <span className="text-white font-poppins text-17 font-semibold flex items-center justify-center w-43 h-43 rounded-full bg-yellow-500">
                  {firstLetter}
                </span>
                <span className="text-white font-poppins text-17 font-normal leading-normal">
                  {user?.name}
                </span>
                <NavLink onClick={userLogout} to={""}>
                  Sair
                </NavLink>
              </div>
            ) : (
              <div className="text-white flex gap-4">
                <NavLink to="/register">{text1}</NavLink>
                <NavLink to="/login">{text2}</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
