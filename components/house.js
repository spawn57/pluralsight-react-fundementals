import currencyFormatter from '@/helpers/currencyFormatter';
import defaultPhoto from '@/helpers/defaultPhoto';
import { navigationContext } from './app';
import { useContext } from 'react';
import Bids from './bidList';
import AddBid from './addBid';
import useBids from '@/hooks/useBids';
import loadingStatus from '@/helpers/loadingStatus';
import LoadingIndicator from './loadingIndicator';

const House = () => {
    const { param: house } = useContext(navigationContext);
    const { bids, loadingState, addBid } = useBids(house.id);

    if (loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    return (
        <div className="row">
            <div class="col-6">
                <div className="row">
                    <img 
                        className="img-fluid"
                        src={
                            house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
                        } 
                        alt="House Pic" 
                    />
                </div>
            </div>
            <div class="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{house.address}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                       {currencyFormatter.format(house.price)} 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12-mt-3">{house.description}</div>
                </div>
            </div>
            <Bids bids={bids} />
            <AddBid house={house} addBid={addBid} />
        </div>
    );
};

export default House;