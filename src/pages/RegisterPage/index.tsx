import { Footer } from "../../Components/Footer";
import { FormRegister } from "../../Components/FormRegister";

export const RegisterPage = () => {
  return (
    <>
      <main className="bg-transparent h-[100vh] w-10/12 flex items-center justify-center m-auto pt-[6.25rem]">
        <FormRegister />
      </main>
      <Footer login={true} />
    </>
  );
};
