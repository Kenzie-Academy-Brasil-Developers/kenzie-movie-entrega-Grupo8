import { Footer } from "../../../src/components/Footer";
import { FormLogin } from "../../../src/components/FormLogin";


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

