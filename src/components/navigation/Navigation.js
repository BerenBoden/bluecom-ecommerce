import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div>
            <img src={Logo} alt="" />
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
            <div className="burger">
                <div />
                <div />
                <div />
            </div>
        </nav>
    )
}

export default Navigation