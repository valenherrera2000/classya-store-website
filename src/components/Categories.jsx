import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './ShoppingContext';

const Categories = () => {
    /* Fetch products */
    const [cart, setCart] = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    
    // Conditional rendering when data is loading
    if (loading) {
        return <p>Loading...</p>;
    }

    useEffect(() => {
        fetch('/products.json')
            .then((result) => result.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => console.log(error))
            .finally(() => console.log('Data has been retrieved successfully'));
    }, []);

    const categories = ['PANTS', 'SHIRTS', 'SWEATERS', 'ACCESSORIES'];

    // Define getCategoryName function
    const getCategoryName = (productId) => {
        if (productId >= 1 && productId <= 4) {
            return 'PANTS';
        } else if (productId >= 5 && productId <= 7) {
            return 'SHIRTS';
        } else if (productId >= 8 && productId <= 11) {
            return 'SWEATERS';
        } else if (productId >= 12 && productId <= 15) {
            return 'ACCESSORIES';
        }
    };

    return (
        <div className="category-section">
            {categories.map((category) => (
                <React.Fragment key={category}>
                    <h2 id={category}>{category}</h2>
                    <div className="category">
                        {products
                            .filter((product) => getCategoryName(product.id) === category)
                            .map((product) => {
                                const quantityPerItem = getQuantityByID(product.id);

                                return (
                                    <div className="product" key={product.id}>
                                        <img src={product.img} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <h4>${product.price}</h4>
                                        <p>{product.description}</p>
                                        <div>
                                            {quantityPerItem === 0 ? (
                                                <button onClick={() => addToCart(product.id, product.price)}>+</button>
                                            ) : (
                                                <div className="selected-products">
                                                    <button onClick={() => removeItem(product.id)}>-</button>
                                                    <p>{quantityPerItem}</p>
                                                    <button onClick={() => addToCart(product.id, product.price)}>+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Categories;
