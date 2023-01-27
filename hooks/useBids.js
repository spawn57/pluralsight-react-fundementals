import { useEffect, useState } from 'react';
import useGetRequest from './useGetRequest';

const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const { get, loadingState } = useGetRequest(`/api/bids/${houseId}`);

    useEffect(() => {
        const fetchBids = async () => {
            const bids = await get();
            setBids(bids);
        }
        fetchBids();
    }, [get]);

    return { bids, loadingState };
};

export default useBids;