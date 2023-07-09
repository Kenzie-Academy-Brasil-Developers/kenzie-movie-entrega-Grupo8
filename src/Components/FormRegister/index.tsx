import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Fragments/Input";
import { UserContext } from "../../providers/UserContext/UserContext";
import { TRegisterFormValues, formRegisterSchema } from "./formRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormRegister = () => {
  const { userSignUp } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterFormValues>({
    resolver: zodResolver(formRegisterSchema)
  });

  const submit: SubmitHandler<TRegisterFormValues> = async (formData: any) => {
   userSignUp(formData);
    }
    
    return (
      <div className="container w-full flex justify-center sm:px-1 lg:px-1 max-w-[1320px]">
        <form className="bg-transparent w-full h-auto  py-2 px-2 shandow rounded-lg max-w-[900px]" onSubmit={handleSubmit(submit)} noValidate>

        <div className="flex justify-between items-center">
          <h2 className='text-white mb-1 font-bold text-5xl ms-2.5'>Cadastro</h2>

          <div className="flex flex-row gap-3 h-4 items-center mt-6 mr-3.5">
            <img className="mb-3" src="./src/assets/Vector.png" alt="Seta-Vector"/>

            <p className="text-yellow-400 flex justify-center font-bold text-lg mb-4">Voltar</p>
          </div>   
        </div>
        
        <p className='flex mt-5 font-normal text-base mb-3 ms-2'>Preencha os campos para cadastrar-se</p>

        <div className="flex flex-wrap w-full">

          <div className="w-full md:w-1/2 p-2">
            <Input

            type="name"
            placeholder="Digite aqui seu Nome"
            {...register("name")}
            error={errors.name}
            />

          </div>
         
          <div className="w-full md:w-1/2 p-2">
            <Input
          
            type="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
            error={errors.email}
            />

          </div>
          
          <div className="w-full md:w-1/2 p-2">
            <Input
          
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            error={errors.password}
            />

          </div>
          
          <div className="w-full md:w-1/2 p-2">
            <Input
        
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirm")}
            error={errors.password}
            />

          </div>
          
        </div>
      
        <div className="flex justify-end mr-2">
          <button className='mt-2 bg-yellow-400 text-black inline-block w-46 px-6 py-3.5 leading-none hover:bg-yellow-500 rounded-4xl font-bold text-lg' type='submit'>Cadastrar-se</button>
        </div>

      </form>
    </div>
  );
};

