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
import { TRegisterFormValues } from "../../Components/FormRegister/formRegisterSchema";
import { useGetMovies } from "../../Components/Hooks/useGetMovies";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {

  const getMovies = useGetMovies();


  const [user, setUser] = useState<IUser | null>(
    JSON.parse(localStorage.getItem("@kenzieMovies:user") as string)
  );
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const userSignUp = async (formData: TRegisterFormValues) => {
    try {
      await api.post("/users", formData);

      toast.success("Cadastro efetuado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate("/login");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar se cadastrar.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const userLogIn = async (formData: TRegisterFormValues) => {
    setIsLoading(true);
    try {
      const response = await api.post<IUserLogInResponse>("/login", formData);
      setUser(response.data.user);

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
      await getMovies(); // Chama getMovies corretamente
    } catch (error) {
      console.log(error);     
    } finally {
      setIsLoading(false);
    }
  };

  const firstLetter = user?.name.charAt(0);

  useEffect(() => {
    const userJSON = localStorage.getItem("@kenzieMovies:user");
    if (userJSON) {
      /* empty */
    }
  }, [user]);

  const userLogout = () => {
    setUser(null);
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
        firstLetter,
        isLoading, 
        setIsLoading,        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

