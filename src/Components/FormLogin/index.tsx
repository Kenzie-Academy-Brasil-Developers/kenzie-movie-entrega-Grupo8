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
    <form className='bg-zinc-900 mx-auto max-w-md py-8 px-10 shandow rounded-lg ' onSubmit={handleSubmit(submit)} noValidate>

      <h2 className='text-white mb-8'>Login</h2>

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
      <button className='mt-2 bg-amber-500 py-2 px-10' type='submit'>Entrar</button>

      <p>ou</p>

      <Anchor to={"/register"} text='Cadastre-se' />
    </form>
  );

}