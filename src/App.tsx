
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MoviesProvider } from "./providers/MoviesContext/MovieContext";
import { RoutesMain } from "./routes/RoutesMain";

export const App = () => {
  return (
    <>
      <MoviesProvider>
        <Header to1={"/register"} text1={"Cadastre-se"} to2={"/login"} text2={"Entrar"} userLogout={function (): void {
          throw new Error("Function not implemented.");
        } }/>
        <RoutesMain />
        <Footer/>
      </MoviesProvider>
    </>
  );
};
