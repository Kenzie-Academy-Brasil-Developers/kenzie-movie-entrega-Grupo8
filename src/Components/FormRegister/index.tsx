import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Fragments/Input";
import { UserContext } from "../../providers/UserContext/UserContext";
import { Header } from "../Header";
import { TRegisterFormValues, formRegisterSchema } from "./formRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";



export const FormRegister = () => {
  const { userSignUp } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterFormValues>({
    resolver: zodResolver(formRegisterSchema)
  });

  const submit: SubmitHandler<TRegisterFormValues> = async (formData: any) => {
    console.log(formData)
    userSignUp(formData);
    }
    
    return (
      <>
      <Header />

      <form onSubmit={handleSubmit(submit)} noValidate>
        <h2>Cadastro</h2>

        <p>Preencha os campos para cadastrar-se</p>

        <Input
        type="name"
        placeholder="Digite aqui seu Nome"
        {...register("name")}
        error={errors.name}
        />
       <Input
        
        type="email"
        placeholder="Digite aqui seu e-mail"
        {...register("email")}
        error={errors.email}
        />
        <Input
        
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
        />
        <Input
        
        type="password"
        placeholder="Confirme sua senha"
        {...register("confirm")}
        error={errors.password}
        />
        <button type='submit'>Entrar</button>
      </form>
    </>
  );
};

