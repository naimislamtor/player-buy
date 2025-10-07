import React, { useState } from 'react';
import manImg from '../../assets/Group.png'
import CountryFlag from '../../assets/CountryFlag.png'
import { toast } from 'react-toastify';



const PlalyerCard = ({player, availableBalance, setAvailableBalance, setSelectedPlayer, selectedPlayer}) => {
    const [isSelect, setIsSelect] = useState(false);
    return (
        
        <div className="card bg-base-100 w-full shadow-sm p-4 mx-auto" key={player.id}>
            <figure>
                <img
                    src={player.image}
                    alt="Picture"
                    className='w-full h-[300px] object-cover '
                />
            </figure>
            <div className="">
                <div className='flex items-center'> <img src={manImg} alt="" /> <h2 className="card-title m-4">{player.name} </h2></div>
                <div className='flex justify-between items-center border-b-1 border-gray-300 pb-2 '>
                    <p className='flex gap-3 items-center font-bold text-gray-400'><img src={CountryFlag} alt="Country Flag" /> <span>{player.country} </span></p>
                    <button className="btn text-gray-600">{player.role}</button>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='font-bold'>Rating</p>
                    <p className="text-yellow-500 mr-3">⭐ {player.rating}</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='font-bold'>{player.batting_style} </p>
                    <p>{player.bowling_style} </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className='font-bold'>Price: ${player.price} </p>
                    <button disabled={isSelect} onClick={ () => (availableBalance < player.price ? toast("You don't have available balance") : selectedPlayer.length === 6 ? toast("6 Player Already Selected") : (setAvailableBalance(availableBalance-player.price), setIsSelect(true), setSelectedPlayer(prev => [...prev, player])) )} className="btn text-gray-600">{isSelect ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlalyerCard;

{/* <button disabled={isSelect} onClick={() => availableBalance < player.price ? alert("Sorry, you don't have enough balance!"): (setAvailableBalance(availableBalance - player.price), setIsSelect(true))} className="btn text-gray-600"> {isSelect ? 'Selected' : 'Choose Player'} </button> */}
