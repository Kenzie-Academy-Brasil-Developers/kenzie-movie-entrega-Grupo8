import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, IInputProps >(
   ({ label, error, ...rest }, ref) => {
      return (
         <div className="mb-2">
            {label ? <label htmlFor={rest.name}>{label}</label> : null}
            <input
            
            className="bg-zinc-700 appearance-none block w-full px-4 py-3 leading-tight text-white
            focus:tranparent border border-zinc-700 hover:border-yellow-500 placeholder:text-white font-bold text-base"
            
            id={rest.name} name={rest.name} ref={ref} type="text" {...rest} />
            {error ? <p className="text-red-500 text-sm mt-2 font-normal">{error.message}</p> : null}
         </div>
      );
   }
);