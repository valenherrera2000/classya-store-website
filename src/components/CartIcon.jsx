import React, { useState } from 'react';
import cartImg from '../assets/img/shopping-cart-icon.png';

const Cart = () => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="cart-icon">
            <p>{cartCount}</p>
            <img src={cartImg} alt="Cart Icon" />
        </div>
    );
};

export { Cart };
