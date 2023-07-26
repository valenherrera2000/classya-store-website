import React from 'react';
import homeBannerImg from '../assets/img/home-banner.png';
import categoriesBannerImg from '../assets/img/categories-banner.png';

const Header = () => {
    return (
        <header>
            <h1>Classya</h1>
            <img src={homeBannerImg} alt="Classya Cover" /> 
            <h4>Where elegance meets style</h4>
            <a href="#navbar" className="shop-now-link">SHOP NOW</a>
        </header>
    );
};

export default Header;
