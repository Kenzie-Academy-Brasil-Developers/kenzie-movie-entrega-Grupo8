import "./index.css";
import { Header } from "./Components/Header";
import { MoviesContext, MoviesProvider } from "./providers/MoviesContext/MovieContext";
import { RoutesMain } from "./routes/RoutesMain";
import { useContext } from "react";
import { Loading } from "./Components/Loarding";

export const App = () => {

  const { isLoading } = useContext(MoviesContext)

  if (isLoading) {
    return <Loading />
  }
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
