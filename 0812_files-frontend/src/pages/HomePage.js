import AddBand from "../AddBand";
import BandsDB from "../BandsDB";

function HomePage() {
    return (
        <div>
            <AddBand></AddBand>
            <BandsDB></BandsDB>
        </div>
    )
}

export default HomePage;