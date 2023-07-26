import React from 'react';
import placeholderImg from '../assets/img/clothes-placeholder.png'; // Import the placeholder image

export const Categories = () => {
    return (
        <main>
            <h2 id="pants">PANTS</h2>
            <img src={placeholderImg} alt="Pant 1" />
            <img src={placeholderImg} alt="Pant 2" />
            <img src={placeholderImg} alt="Pant 3" />
            <img src={placeholderImg} alt="Pant 4" />


            <h2 id="shirts">SHIRTS</h2>
            <img src={placeholderImg} alt="Shirt 1" />
            <img src={placeholderImg} alt="Shirt 2" />
            <img src={placeholderImg} alt="Shirt 3" />
            <img src={placeholderImg} alt="Shirt 4" />


            <h2 id="sweaters">SWEATERS</h2>
            <img src={placeholderImg} alt="Sweater 1" />
            <img src={placeholderImg} alt="Sweater 2" />
            <img src={placeholderImg} alt="Sweater 3" />
            <img src={placeholderImg} alt="Sweater 4" />


            <h2 id="accessories">ACCESSORIES</h2>
            <img src={placeholderImg} alt="Accessory 1" />
            <img src={placeholderImg} alt="Accessory 2" />
            <img src={placeholderImg} alt="Accessory 3" />
            <img src={placeholderImg} alt="Accessory 4" />

        </main>
    );
};
