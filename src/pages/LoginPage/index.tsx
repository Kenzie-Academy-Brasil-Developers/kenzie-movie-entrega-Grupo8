
import { FormLogin } from "../../Components/FormLogin";
import { BackgroundImage } from "../../Fragments/Image";

export const LoginPage = () => {
  return (
    <div className=" overflow-hidden overflow-y-scroll h-88vh">
      <BackgroundImage>
       <FormLogin />
      </BackgroundImage>
    </div>  
  );
};
