import React from 'react';
import homeBannerImg from '../assets/img/home-banner.png';
import menuImg from '../assets/img/menu-icon.png';
import cartImg from '../assets/img/shopping-cart-icon.png'

const Header = () => {
    return (
        <>
            <div id= "menu" className="menu-section">
                <img src={menuImg} alt="Menu Icon" />
                <h1>Classya</h1>
                <div className="cart-icon">
                    <p>0</p>
                    <img src={cartImg} alt="Cart Icon" />
                </div>
            </div>
            <div>
                <img src={homeBannerImg} alt="Classya Cover" />
                <h4>Where elegance meets style</h4>
                <a href="#navbar" className="shop-now-link">SHOP NOW</a>
            </div>
        </>
    );
};

export default Header;
