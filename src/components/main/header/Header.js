import React from 'react';
import './Header.css'
import Logo from './../../../assets/logo/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='bgWhite'></div>
            <div className='bgWhite1'></div>
            <div className='container'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <img className='header__logo-img' src={Logo} alt="logo"/>
                    </div>
                    <div className='header__right'>
                        <ul className='header__menu'>
                            <li className='header__menu-list'>Главная</li>
                            <li className='header__menu-list'>О нас</li>
                            <li className='header__menu-list'>Связь с оператором</li>
                            <li className='header__menu-list'>Пусто</li>
                        </ul>
                        <div className='header__menu-contacts'>
                                <span className='header__menu-contacts_tel'>+996 550 01 22 08</span>
                                <span className='header__menu-contacts_tel'>+996 777 32 95 46</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;