import { forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
   label?: string;
   error?: FieldError;
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps >(
   ({ children, label, error, ...rest }, ref) => {
      return (
         <div>
            {label ? <label htmlFor={rest.name}>{label}</label> : null}
            <Select id={rest.name} name={rest.name} ref={ref} {...rest} />
            {children}
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);