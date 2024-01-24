
import { FormLogin } from "../../Components/FormLogin";
import { BackgroundImage } from "../../Fragments/Image";

export const LoginPage = () => {
  return (
    <div className=" overflow-hidden h-screen">
      <BackgroundImage>
       <FormLogin />
      </BackgroundImage>
    </div>  
  );
};
