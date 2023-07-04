import { IUserContext, IUserProviderProps, IUser, IUserLogInResponse } from './@types';
import { createContext, useState } from 'react';
import { api } from '../../service/api';
import { Slide, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null >(null);
  
  const navigate = useNavigate();

  
  // Comentários: Criação de usuários;

  const userSignUp = async (formData: any) => {
    try{
      const response = await api.post('/users', formData);
      setUser(response.data);
      toast.success("Cadastro efetuado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate('/login');

    }catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  }

  const userLogIn = async (formData: any) => {
    try {
      const response = await api.post<IUserLogInResponse>("/login", formData);
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem('@kenzieMovies:token', response.data.accessToken);
      localStorage.setItem('@kenzieMovies:user', JSON.stringify(response.data.user));
      toast.success("Usuário Logado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate('/movies');
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };
  
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@kenzieMovies:token');
    localStorage.removeItem('@kenzieMovies:user');
    navigate('/');
  };
  
  return (
    <UserContext.Provider value={{user, userSignUp, userLogIn, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
