import useHouses from "@/hooks/useHouses";
import HouseRow from "./houseRow";

const HouseList = ({setSelectedHouse}) => {
   const { houses, setHouses } = useHouses();

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 7,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} setSelectedHouse={setSelectedHouse}></HouseRow>)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;