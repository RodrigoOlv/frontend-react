import React from 'react';

import './Header.scss'
import logo from './assets/logo.svg'

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>
                <img src={logo} alt="Moovin"></img>
            </h1>
        </div>
    )
}

export default Header