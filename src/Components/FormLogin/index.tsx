import { useForm } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';
import { Input } from '../../Fragments/Input';
import { TLoginFormValues } from './formLoginSchema';

export const FormLogin = () => {
  const { userLogIn } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>();
  const submit = async (LoginData: any) => {
    userLogIn(LoginData);
  };
  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu e-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
      />
      <button type='submit'>Entrar</button>
    </form>
  );

}