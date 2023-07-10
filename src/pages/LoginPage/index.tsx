import { Footer } from "../../Components/Footer";
import { FormLogin } from "../../Components/FormLogin";


export const LoginPage = () => {
  return (
      <>
    <div className="bg-login-image h-[100vh] flex items-center">
      <FormLogin />
    </div>  
    <Footer login={true}/>
    </>
  );
};

