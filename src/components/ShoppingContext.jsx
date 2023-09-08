// ShoppingCartProvider.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    /* Add products */
    const addToCart = (id, price) => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, quantity: 1, price }];
            }
        });
    };

    /* Remove products */
    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    /* Archive quantity of products */
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const getQuantityByID = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    /* Calculate Amounts */


    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalCost = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);


    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};
