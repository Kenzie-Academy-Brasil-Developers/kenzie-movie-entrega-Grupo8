import "./index.css";
import { Header } from "./Components/Header";
import { MoviesProvider } from "./providers/MoviesContext/MovieContext";
import { RoutesMain } from "./routes/RoutesMain";
import { useContext } from "react";
import { Loading } from "./Components/Loading";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./providers/UserContext/UserContext";
import { CustomToastContainer } from "./Components/CustomToastContainer/CustomToastContainer";

export const App = () => {
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <main className="bg-default text-white">
        <MoviesProvider>
          {isLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <RoutesMain />
          )}
          <Header
            to1={"/register"}
            text1={"Cadastre-se"}
            to2={"/login"}
            text2={"Entrar"}
            userLogout={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </MoviesProvider>
      </main>
      <CustomToastContainer />
    </>
  );
};
