import { forwardRef } from "react";

export const Input = forwardRef(({error, label, type, ...rest}, ref) => {
    return(
        <>
            <label>{label}</label>
            <input ref={ref} type={type} {...rest}/>
            
        </>
    )
}) 