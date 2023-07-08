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
            
            className="bg-zinc-700 appearance-none block w-full px-4 py-3 leading-tight text-gray-500
            focus:bg-gray-500 border border-zinc-700 hover:border-amber-500"
            
            id={rest.name} name={rest.name} ref={ref} type="text" {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);