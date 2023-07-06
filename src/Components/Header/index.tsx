import { Anchor } from "../../Fragments/Anchor";
import { Button } from "../../Fragments/Button";

export const Header = () => {
    return(
        <header>
            <div className="flex">
                <div className="flex-none w-14 h-14">
                    <h2>kenziemovie</h2>
                </div>

                <div className="flex-initial w-64">
                    <Anchor />

                    <Button />
                </div>
            </div>
        </header>
    );
};