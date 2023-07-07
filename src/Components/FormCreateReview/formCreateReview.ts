import { z } from "zod";

export const formCreateReviewSchema = z
    .object({
        score: z
            .string()
            .nonempty("A nota é obrigatória."),
        description: z
            .string()
            .nonempty("O comentário é obrigatório.")
            .min(3,"O comentário precisa ter pelo menos 3 caracteres."),
    })

export type TCreateReviews = z.infer<typeof formCreateReviewSchema>;