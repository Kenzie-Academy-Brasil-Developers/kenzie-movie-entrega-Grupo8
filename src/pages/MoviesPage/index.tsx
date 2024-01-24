import { Footer } from "../../components/Footer";
import { MoviesSection } from "../../../src/components/Section/MoviesSection";

export const MoviesPage = () => {
  return (
    <>
      <main className="bg-transparent w-10/12 flex items-center justify-center m-auto pt-[6.25rem]">
        <MoviesSection />
      </main>
      <Footer login={false} />
    </>
  );
};
