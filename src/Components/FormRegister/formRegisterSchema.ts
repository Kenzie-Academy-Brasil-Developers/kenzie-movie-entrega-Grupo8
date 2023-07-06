import { z } from "zod";

export const formRegisterSchema = z
  .object({
    name: z.string().nonempty("Informar seu nome."),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório.")
      .email("Digite um email válido."),
    password: z
      .string()
      .nonempty("A senha é obrigatória.")
      .min(6, "A senha precisa ter pelo menos 6 caracteres.")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      ),

    confirm: z
      .string()
      .nonempty("A senha é obrigatória.")
      .min(6, "A senha precisa ter pelo menos 6 caracteres.")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      ),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof formRegisterSchema>;
