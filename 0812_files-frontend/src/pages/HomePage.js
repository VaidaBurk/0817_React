import AddBand from "../AddBand";
import BandsDB from "../BandsDB";
import React from "react";


function HomePage() {
    return (
        <div>
            <AddBand></AddBand>
            <BandsDB></BandsDB>
        </div>
    )
}

export default HomePage;