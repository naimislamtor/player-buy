import React from 'react';
import logo from '../../assets/logo.png'
import currency from '../../assets/Currency.png'

const Navbar = () => {
    return (
        <div className="navbar w-[1140px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="flex-none">
                <img src={currency} alt="currency note" />
            </div>
        </div>
    );
};

export default Navbar;