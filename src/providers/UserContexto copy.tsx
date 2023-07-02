import { createContext, useState } from 'react';
import { api } from "../service/api";

export const UserContext = createContext({});

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState();
  // Comentários: Criação de usuários;
  // Comentários: login;

  const login = async () => {
    try {
      const response = await api.post("/sessions", {
        email: "johndoe@email.com",
        password: "123456"
      });
  
      // Tratar a resposta aqui...
  
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  // Comentários: AutoLogin;

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};
