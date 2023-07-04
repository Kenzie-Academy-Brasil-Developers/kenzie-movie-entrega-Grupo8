import { Header } from "../Header"
import { Input } from "../../Fragments/Input"
import { Button } from "../../Fragments/Button"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"


export const FormRegister = () => {

    const { register, handleSubmit, formState: {errors}, setValue} = useForm();
    const { userSignUp } = useContext(UserContext);

    const onSubmit = async (formData) => {
        try{
            await userSignUp(formData);
            console.log("Signup Sucessful")
        } catch(error){
            console.log("signup error")
        }
    }

    return(
        <>
            <Header />
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>

                <p>Preencha os campos para cadastrar-se</p>

                <Input
                    type='text'
                    placeholder='Name'
                    {...register('name'), {required: 'Name is required'}}
                    onChange={(e) => setValue('name', e.target.value)}
                    error={errors?.name?.message}
                />
                {errors?.name?.message && <p>{errors.name.message</p>}}

                <Input
                     type='email'
                     placeholder='E-mail'
                     {...register('email'), {required: 'E-mail is required'}}
                     onChange={(e) => setValue('email', e.target.value)}
                     error={errors?.email?.message}
                />
                {errors?.email?.message && <p>{errors.email.message</p>}}

                <Input
                    type='password'
                    placeholder='Senha'
                    {...register('password', { 
                        required: 'Password is required',
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
                        }
                      })}
                    onChange={(e) => setValue('email', e.target.value)}
                    error={errors?.password?.message}
                />
                {errors.password && <p>{errors.password.message</p>}}

                <Input
                    type='password'
                    placeholder='Confirmar senha'
                    {...register('confirmPassword', { 
                        required: 'Confirm Password is required',
                        validate: (value) => value === watch('password') || 'Passwords do not match'
                      })}
                    onChange={(e) => setValue('email', e.target.value)}
                    error={errors?.confirmpassoword.message}
                />
                {errors?.confirmpassword?.message && <p>{errors.confirmpassword.message</p>}}

                <Button />
            </form>

        </>
    )
}