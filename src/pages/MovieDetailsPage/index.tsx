import { Footer } from "../../Components/Footer";
import { MoviesDetailsSection } from "../../Components/Section/MoviesDetailsSection";

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
