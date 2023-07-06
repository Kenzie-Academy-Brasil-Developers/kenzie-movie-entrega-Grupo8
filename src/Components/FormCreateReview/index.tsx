import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateReviews, formCreateReviewSchema } from "./formCreateReview";
import { SubmitHandler, useForm } from "react-hook-form";
import { IReview } from "../../providers/MoviesContext/@types";


interface IReview {
    name: string;
    id: string;
    movieId: string;
    userId: string;
    userName: string;
    score: string;
    description: string;
  }
  

export const FormCreateReview = () => {
  const { createReview } = useContext(MoviesContext);
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateReviews>({
    resolver: zodResolver(formCreateReviewSchema),
  });

  const submit: SubmitHandler<IReview> = async (formData) => {
    createReview(formData);
  };
  

  return (
    <>
      <h2>Avaliação</h2>
      <form onSubmit={handleSubmit(submit)}>
        <select
          {...register("score")}
          aria-invalid={errors.score ? "true" : "false"}
        >
          <option value="">Selecione uma nota</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <textarea
          placeholder="Deixe um comentário"
          {...register("description")}
          aria-invalid={errors.description ? "true" : "false"}
        ></textarea>

        <button type="submit">Avaliar</button>
      </form>
    </>
  );
};
