import React from 'react';
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"alt="Netflix" />    
            </a>    
        </div>
        <div className="header--user">
            <a href="http://">
                <img src="https://i.pinimg.com/originals/9c/2c/c2/9c2cc293908d687ec3c4a20db00d46b4.jpg" alt="User"/>    
            </a>
        </div>
        </header>
    )
}