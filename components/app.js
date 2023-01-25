import { useState } from "react"
import House from "./house";
import HouseList from "./houseList";
import Banner from "./banner";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {

        // do checks on house
        // ...
        
        setSelectedHouse(house);
    }
    return (
        <>
            <Banner>
                <div>Providing houses all over the world</div>
            </Banner>
            {selectedHouse ? ( 
                <House house={selectedHouse} />
            ): (
                <HouseList setSelectedHouse={setSelectedHouseWrapper} />
            )}
        </>
    );
};

export default App;