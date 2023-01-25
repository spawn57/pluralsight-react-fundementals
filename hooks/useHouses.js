import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch("/api/houses");
                const houses = await response.json();
                setHouses(houses);
                setLoadingState(loadingStatus.loaded);
            }
            catch {
                setLoadingState(loadingStatus.hasErrored);
            }
        }
        fetchHouses();
    }, []);

    return { houses, setHouses, loadingState };
}

export default useHouses;