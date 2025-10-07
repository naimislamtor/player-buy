import React, { use } from 'react';

import PlalyerCard from '../PlayerCard/PlalyerCard';

const Available = ({ playerPromise, availableBalance, setAvailableBalance, setSelectedPlayer, selectedPlayer}) => {
    const playerData = use(playerPromise);
    // console.log(playerData);
    return (
        <div className='max-w-[1320px] mx-auto  grid  sm:grid-cols-1 md:grid-cols-3  gap-4'>

            {
                playerData.map(player => <PlalyerCard player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} ></PlalyerCard> )
            }
            
        </div>
    );
};

export default Available;