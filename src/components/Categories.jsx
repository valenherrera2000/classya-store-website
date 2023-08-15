import React, { useState, useEffect } from 'react';

const Categories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then((result) => result.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.log(error))
            .finally(() => console.log('Data has been retrieved successfully'))
    }, []);

    const categories = ['PANTS', 'SHIRTS', 'SWEATERS', 'ACCESSORIES'];

    return (
        <div className="category-section">
            {categories.map((category) => (
                <React.Fragment key={category}>
                    <h2 id={category}>{category}</h2>
                    <div className="category">
                        {products
                            .filter((product) => getCategoryName(product.id) === category)
                            .map((product) => (
                                <div className="product" key={product.id}>
                                    <img src={product.img} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <h4>${product.price}</h4>
                                    <p>{product.description}</p>
                                    {category !== 'ACCESSORIES' ? (
                                        <div class="sizes">
                                            <button>XS</button>
                                            <button>S</button>
                                            <button>M</button>
                                            <button>L</button>
                                            <button>XL</button>
                                        </div>
                                    ) : null}
                                    <button>+</button>
                                </div>
                            ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

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
}

export default Categories;
