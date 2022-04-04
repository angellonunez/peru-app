import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="menu">
                <img src={require('./img/menu.svg').default} alt="Menu" width="40px" />
            </div>
            <div className='img-container'>
                <img src={require('./img/026-man.svg').default} alt="Peruvian man" width="50%" />
            </div>
        </header>
    )
}