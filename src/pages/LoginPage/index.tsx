import { FormLogin } from "../../Components/FormLogin";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { BackgroundImage } from "../../Fragments/Image";

export const LoginPage = () => {
  return (
    <main>
      <Header />
      <FormLogin />
      <Footer />
      <BackgroundImage />
    </main>
  );
};
