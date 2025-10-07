import React from 'react';

const SelectedCard = ({ playerSelect, setSelectedPlayer, selectedPlayer, setAvailableBalance, availableBalance }) => {
    console.log(playerSelect)
    const handleRemove = (remove) => {
        const newPlayerSelected = selectedPlayer.filter(p => p.id !== remove.id)
        setSelectedPlayer(newPlayerSelected)
        setAvailableBalance(availableBalance + remove.price)
    }
    return (
        <div className='flex justify-between items-center p-4 rounded-xl border-2 border-gray-300 mt-3'>
            <div className='flex gap-2'>
                <img src={playerSelect.image} className='h-[50px] w-[50px] rounded-xl ' alt="" />
                <div>
                    <h3 className='text-md font-bold'>{playerSelect.name}</h3>
                    <p>{playerSelect.role}</p>
                </div>
            </div>
            <button onClick={() => {handleRemove(playerSelect)}} className='cursor-pointer'> <img src="https://i.ibb.co.com/qFLDMhd1/Frame.png" alt="Delete Iamge" /></button>
        </div>
    );
};

export default SelectedCard;