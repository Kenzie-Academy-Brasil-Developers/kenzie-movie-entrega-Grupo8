import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';
import { Input } from '../../Fragments/Input';
import { TLoginFormValues, formLoginSchema } from './formLoginSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor } from '../../Fragments/Anchor';

export const FormLogin = () => {
  const { userLogIn } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({
    resolver: zodResolver(formLoginSchema)
  });
  const submit: SubmitHandler<TLoginFormValues> = async (LoginData: any) => {
    userLogIn(LoginData);
  };
  return (
    <div className="container mx-auto sm:px-1 lg:px-1 max-w-[1320px] ">
      <form className='bg-zinc-900 mx-5 max-w-sm py-8 px-10 rounded-[10px] hover:shadow-lg hover:shadow-yellow-600' onSubmit={handleSubmit(submit)} noValidate>

        <h2 className='text-white mb-8 font-bold text-5xl'>Login</h2>

      <Input
      
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input

        type="password"
        placeholder="Senha"
        {...register("password")}
        error={errors.password}
      />
        <button className='mt-2 bg-yellow-400 text-black inline-block w-full px-8 py-3 leading-none hover:bg-yellow-500 rounded-4xl font-bold text-lg' type='submit'>Entrar</button>

        <p className='flex justify-center mt-5 font-normal text-lg'>ou</p>

        <Anchor className="flex justify-center mt-5 text-yellow-400 font-bold text-lg" to={"/register"} text='Cadastre-se' />
      </form>
    </div>
  );

}