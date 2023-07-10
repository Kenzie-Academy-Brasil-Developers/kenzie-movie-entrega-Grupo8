import "./index.css";
import { Header } from "./Components/Header";
import { MoviesProvider } from "./providers/MoviesContext/MovieContext";
import { RoutesMain } from "./routes/RoutesMain";

export const App = () => {
  return (
    <>
    <main className="bg-default text-white">
      <MoviesProvider>
        <Header
          to1={"/register"}
          text1={"Cadastre-se"}
          to2={"/login"}
          text2={"Entrar"}
          userLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <RoutesMain />
      </MoviesProvider>
    </main>
    </>

  );
};
