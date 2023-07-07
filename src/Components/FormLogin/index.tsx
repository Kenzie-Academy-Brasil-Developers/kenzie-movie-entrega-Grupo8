import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';
import { Input } from '../../Fragments/Input';
import { TLoginFormValues, formLoginSchema } from './formLoginSchema';
import { zodResolver } from "@hookform/resolvers/zod";

export const FormLogin = () => {
  const { userLogIn } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({
    resolver: zodResolver(formLoginSchema)
  });
  const submit: SubmitHandler<TLoginFormValues> = async (LoginData: any) => {
    userLogIn(LoginData);
  };
  return (
    <form className='bg-zinc-900 max-w-md h-80 absolute top-1/3 left-24' onSubmit={handleSubmit(submit)} noValidate>

      <h2 className='text-white'>Login</h2>

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
      <button type='submit'>Entrar</button>
    </form>
  );

}