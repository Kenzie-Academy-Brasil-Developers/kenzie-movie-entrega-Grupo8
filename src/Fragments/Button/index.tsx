import { Link } from "react-router-dom"

export const Button = ({}) => {
    return(
        <>
            <Link to={"/login"}><button className='bg-amber-400 w-96' type="submit">Entrar</button></Link>
        </>
    )
}