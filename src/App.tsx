import { MoviesProvider } from "./providers/MoviesContext/MovieContext";
import { RoutesMain } from "./routes/RoutesMain";

export const App = () => {
  return (
    <>
      <MoviesProvider>
        <RoutesMain />
      </MoviesProvider>
    </>
  );
};
