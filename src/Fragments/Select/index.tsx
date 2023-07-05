import { forwardRef } from "react"

export const Select = forwardRef(({ id, children, error, label, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={label}></label>
        <select ref={ref} {...rest} id={label}>
          {children}
        </select>
        {error ? <p>{error.message}</p> : null }
      </div>
    )
})