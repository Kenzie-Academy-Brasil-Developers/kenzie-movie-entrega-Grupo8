import { Footer } from "../../../src/components/Footer"
import { HomeSection } from "../../../src/components/HomeSection"

export const HomePage = () => {

    return(
        <>
        <HomeSection/> 
        <Footer login={false} />
        </>
    )
}