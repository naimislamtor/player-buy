import React from 'react';
import logo from '../../assets/logo.png'
import currency from '../../assets/Currency.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1320px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="flex">
                <p className='mr-[5px]'><span>{availableBalance}</span> <span>Coin</span></p>
                <img src={currency} alt="currency note" />
            </div>
        </div>
    );
};

export default Navbar;