import { useEffect, useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        }
        fetchHouses();
    }, []);

    return { houses, setHouses };
}

export default useHouses;