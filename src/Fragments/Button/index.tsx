import { Link } from "react-router-dom"

export const Button = ({}) => {
    return(
        <>
            <Link to={"/login"}><button type="submit">Entrar</button></Link>
        </>
    )
}