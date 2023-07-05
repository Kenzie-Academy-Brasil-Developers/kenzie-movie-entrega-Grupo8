import { Button } from "../../Fragments/Button";
import { Input } from "../../Fragments/Input";
import { UserContext } from "../../providers/UserContext/UserContext";

import { useForm } from "react-hook-form"; // Importe o hook useForm corretamente
import { Header } from "../Header";

export const FormRegister = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm(); // Use o hook useForm corretamente
  const { userSignUp } = useContext(UserContext);

  const onSubmit = async (formData) => {
    try {
      await userSignUp(formData);
      console.log("Signup Sucessful");
    } catch (error) {
      console.log("signup error");
    }
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>

        <p>Preencha os campos para cadastrar-se</p>

        <Input
          type="text"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })} // Corrija a propriedade do register
          onChange={(e) => setValue('name', e.target.value)}
          error={errors?.name?.message}
        />
        {errors?.name?.message && <p>{errors.name.message}</p>}

        <Input
          type="email"
          placeholder="E-mail"
          {...register('email', { required: 'E-mail is required' })} // Corrija a propriedade do register
          onChange={(e) => setValue('email', e.target.value)}
          error={errors?.email?.message}
        />
        {errors?.email?.message && <p>{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Senha"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
            },
          })}
          onChange={(e) => setValue('password', e.target.value)} // Corrija a propriedade do setValue
          error={errors?.password?.message}
        />
        {errors?.password?.message && <p>{errors.password.message}</p>}

        <Input
          type="password"
          placeholder="Confirmar senha"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
          onChange={(e) => setValue('confirmPassword', e.target.value)} // Corrija a propriedade do setValue
          error={errors?.confirmPassword?.message} // Corrija o nome da propriedade do error
        />
        {errors?.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}

        <Button />
      </form>
    </>
  );
}
