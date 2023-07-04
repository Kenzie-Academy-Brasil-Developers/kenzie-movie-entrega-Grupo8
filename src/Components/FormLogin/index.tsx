import { useForm } from 'react-hook-form';
import { Input } from '../../Fragments/Input';
import { Anchor } from '../../Fragments/Anchor';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';
import { Button } from '../../Fragments/Button';

export const FormLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { userLogIn } = useContext(UserContext);

  const onSubmit = async (formData) => {
    try {
       await userLogIn(formData);
        console.log(formData)
      console.log('Login successful');
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

      <Input
        type='email'
        placeholder='E-mail'
        {...register('email', { required: 'E-mail is required' })}
        onChange={(e) => setValue('email', e.target.value)}
        error={errors.email}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Input
        type='password'
        placeholder='Password'
        {...register('password', { required: 'Password is required' })}
        onChange={(e) => setValue('password', e.target.value)}
        error={errors.password}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Button />
      <p>or</p>
      <Anchor />
    </form>
  );
};




// type LoginFormValue = {
//     email: string;
//     password: string;
// }

// export const LoginForm = () => {
//     const {
//         register, handleSubmit, formState: { errors },
//     } = useForm<LoginFormValue>();

//     const onSubmit = async (data: LoginFormValue) => {
//         try{

//             const response = await api.post('login', data);

//             const { token, user } = response.data;

//         } catch(error) {

//             console.log('erro no login')

//         }
//     }

//     return(
//         <form onSubmit={handleSubmit(onSubmit)}>

//             <h2>Login</h2>

//             <Input  
//                 register={register("email", {required: true})}
//                 error={errors.email && "Email é obrigatório"}
//              />;
//             <Input  
//                 register={register("password", {required: true})}
//                 error={errors.password && "Senha é obrigatório"}
//             />;

//             <Button />
//             <p>ou</p>
//             <Anchor />
//         </form>
//     )
// }