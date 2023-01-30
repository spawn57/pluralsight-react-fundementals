import { useState } from 'react';
import useBids from '@/hooks/useBids';
import loadingStatus from '@/helpers/loadingStatus';
import LoadingIndicator from './loadingIndicator';
import currencyFormatter from '@/helpers/currencyFormatter';

const Bids = ({ house }) => {
    const { bids, loadingState } = useBids(house.id);

    const emptyBid = {
        houseId: house.id,
        bidder: '',
        amount: 0,
    };

    const [newBid, setNewBid] = useState(emptyBid);

    if (loadingState != loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Bidder</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((b) => (
                                <tr key={b.id}>
                                    <td>{b.bidder}</td>
                                    <td>{currencyFormatter.format(b.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Bids;