import React from 'react';
import './Header.css';
import image from './img/kidslogo.png';

const Header = () => {

    return (
        <div id="header">
            <div className="firstComponent">
                <a href="#"><img src={image} alt=""/></a>
            </div>
            <div className="secondComponent">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#seasonsDiv">Смены</a></li>
                    <li><a href="#gallery">Галерея</a></li>
                    <li><a href="#about">О нас</a></li>
                </ul>
            </div>
            <div className="thirdComponent">
                <p>+7 (778) 439-91-62</p>
                <a href="#form"><button className="applyButton">Оформить заявку</button></a>
            </div>
        </div>
    )
}

export default Header;