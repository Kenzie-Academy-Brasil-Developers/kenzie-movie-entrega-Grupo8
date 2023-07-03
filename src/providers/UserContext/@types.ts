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
    userSignUp: (formData: any) => Promise<void>;
    userLogIn: (formData: any) => Promise<void>;
    userLogout: () => void;
  }
  