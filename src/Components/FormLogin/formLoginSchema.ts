import { z } from "zod";

export const formLoginSchema = z
  .object({
     email: z
      .string()
      .nonempty("O e-mail é obrigatório.")
      .email("Digite um email válido."),
    password: z
      .string()
      .nonempty("A senha é obrigatório.")
      .min(8,"A senha precisa conter pelo menos 8 caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessario pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessario pelo menos um número.")
      .regex(/(?=.*?[#?!@$%^&*-])/, "É necessario pelo um caractere especial."),
  })
  

  export type TLoginFormValues = z.infer<typeof formLoginSchema>;
