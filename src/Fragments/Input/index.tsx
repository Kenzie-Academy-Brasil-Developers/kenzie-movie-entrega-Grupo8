import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, IInputProps >(
   ({ label, error, ...rest }, ref) => {
      return (
         <div>
            {label ? <label htmlFor={rest.name}>{label}</label> : null}
            <input className="bg-zinc-700" id={rest.name} name={rest.name} ref={ref} type="text" {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);