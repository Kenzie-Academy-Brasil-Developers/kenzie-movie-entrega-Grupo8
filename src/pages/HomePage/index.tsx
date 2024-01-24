import { Footer } from "../../Components/Footer"
import { HomeSection } from "../../Components/HomeSection/index"

export const HomePage = () => {

    return(
        <>
        <HomeSection/> 
        <Footer login={false} />
        </>
    )
}