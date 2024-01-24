import { Footer } from "../../../src/components/Footer";
import { MoviesDetailsSection } from "../.././components/Section/MoviesDetailsSection";

export const MovieDetailsPage = () => {
  return (
    <>
      <main className="container flex-wrap">
        <MoviesDetailsSection />
      </main>
      <Footer login={false} />
    </>
  );
};
