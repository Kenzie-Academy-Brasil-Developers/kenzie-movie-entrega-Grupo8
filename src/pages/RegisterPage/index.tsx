import { Footer } from "../../components/Footer";
import { FormRegister } from "../../../src/components/FormRegister";

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
