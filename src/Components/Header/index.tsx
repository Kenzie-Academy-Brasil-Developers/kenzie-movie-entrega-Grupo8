import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import logoKenzie from "../../assets/kenziemovie.svg";

interface HeaderProps {
  userLogout: () => void;
  to1: string;
  text1: string;
  to2: string;
  text2: string;
}

export const Header = ({ text1, text2 }: HeaderProps) => {
  const { firstLetter, user, userLogout } = useContext(UserContext);

  return (
    <header className="w-full bg-transparent flex-wrap fixed md:top-0">
      <div className="container mx-auto sm:px-1 lg:px-1 max-w-[1320px] ">
        <div className="flex flex-col md:flex-row items-center justify-between h-103 p-5 flex-wrap">
          <img src={logoKenzie} alt="logo Kenzie" />

          <div className="w-full flex justify-between md:w-1/2 h-14  md:justify-end gap-9 mt-5 md:mt-2">
            {user?.name ? (
              <>
                <div className="flex items-center md:justify-center gap-2 ">
                  <span className="text-white font-poppins text-17 font-semibold flex items-center justify-center w-9 h-9 rounded-4xl  bg-yellow-500">
                    {firstLetter}
                  </span>
                  <span className="text-white font-poppins text-17 font-normal leading-normal flex items-center justify-center ">
                    {user?.name}
                  </span>
                </div>
                <div className="flex items-center md:justify-center gap-2 ">
                  <NavLink
                    onClick={userLogout}
                    to={"/"}
                    className="text-white flex gap-4 items-center md:justify-center"
                  >
                    Sair
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center md:justify-center w-30 h-9 gap-2">
                  <NavLink to="/register">{text1}</NavLink>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-4xl w-20 h-9 bg-yellow-500 text-black ">
                  <NavLink to="/login">{text2}</NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
