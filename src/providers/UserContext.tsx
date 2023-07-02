import { createContext, useState } from 'react';


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

      });
  
   
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
