import {
  IUserContext,
  IUserProviderProps,
  IUser,
  IUserLogInResponse,
} from "./@types";
import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TRegisterFormValues } from "../../components/FormRegister/formRegisterSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
 

  const [userName, setUserName] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const userSignUp = async (formData: TRegisterFormValues) => {
    try {
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      setUserName(response.data.user.name);
      toast.success("Cadastro efetuado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate("/login");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const userLogIn = async (formData: TRegisterFormValues) => {
    try {
      const response = await api.post<IUserLogInResponse>("/login", formData);
      setUser(response.data.user);
      setUserName(response.data.user.name);
      localStorage.setItem("@kenzieMovies:token", response.data.accessToken);
      localStorage.setItem(
        "@kenzieMovies:user",
        JSON.stringify(response.data.user)
      );
      toast.success("Usuário Logado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate("/movies");
      getMovies();
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const firstLetter = userName?.charAt(0);

  useEffect(() => {
    const userJSON = localStorage.getItem("@kenzieMovies:user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
    }
  }, []);

  const userLogout = () => {
    setUser(null);
    setUserName(undefined);
    localStorage.removeItem("@kenzieMovies:token");
    localStorage.removeItem("@kenzieMovies:user");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
      
        user,
        userSignUp,
        userLogIn,
        userLogout,
        userName,
        firstLetter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function getMovies() {
  throw new Error("Function not implemented.");
}
