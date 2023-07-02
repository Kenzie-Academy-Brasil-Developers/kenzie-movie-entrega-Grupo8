import { MoviesProvider } from "./providers/MovieContext";
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
