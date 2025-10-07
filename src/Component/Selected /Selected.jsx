import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const Selected = ({selectedPlayer, setSelectedPlayer, setAvailableBalance, availableBalance}) => {
    console.log(selectedPlayer);
    return (
        <div className='max-w-[1320px] mx-auto mt-2'>
            {
                selectedPlayer.map(playerSelect => <SelectedCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} playerSelect={playerSelect}></SelectedCard>)
            }
        </div>
    );
};

export default Selected;