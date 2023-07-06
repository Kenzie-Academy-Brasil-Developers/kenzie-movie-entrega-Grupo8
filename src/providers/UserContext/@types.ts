import { TRegisterFormValues } from "../../components/FormRegister/formRegisterSchema";

export interface IUserProviderProps {
    children: React.ReactNode;
  }
  
  export interface IUser{
    id:number;
    name: string;
    email:string;
  }
  
  export interface IUserLogInResponse{
    accessToken:string;
    user: IUser; 
  }
  
  export interface IUserContext{
    user: IUser | null;
    userSignUp: (formData: TRegisterFormValues) => Promise<void>;
    userLogIn: (formData: TRegisterFormValues) => Promise<void>;
    userLogout: () => void;
    userName: string | undefined;
    firstLetter: string | undefined;
    isOpen: null;
    setIsOpen: React.Dispatch<React.SetStateAction<null>>;
  }
  