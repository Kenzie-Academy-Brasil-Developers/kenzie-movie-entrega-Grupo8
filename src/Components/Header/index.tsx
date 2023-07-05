import { Anchor } from "../../Fragments/Anchor";
import { Button } from "../../Fragments/Button";

export const Header = () => {
    return(
        <header>
            <div>
                <h2>kenziemovie</h2>

                <div>
                    <Anchor />

                    <Button />
                </div>
            </div>
        </header>
    );
};