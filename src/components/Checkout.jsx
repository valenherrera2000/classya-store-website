import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classyaLogo from '../assets/img/classya-icon.png';
import { CartContext } from './ShoppingContext';
import '../css/Checkout.css';

const Checkout = () => {

    const [cart] = useContext(CartContext);

    /* Calculate Amounts */


    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalCost = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);


    return (
        <div className="checkout-section">
            <div className="back-button">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="back-to-main-button">Back to Main</button>
                </Link>
            </div>
            <div className="checkout-header">
                <img src={classyaLogo} alt="Classya Logo" />
                <h1>Classya Checkout</h1>
                <p>Provide your personal and payment information to complete the purchase!</p>
            </div>
            <div className="shopping-cart-info">
                <h3>Total Items: {totalQuantity}</h3>
                <h3>Total Amount: ${totalCost}</h3>
            </div>
            <div className="personal-info">
                <h3>Personal Information</h3>
                <form>
                    <div className="inline-inputs">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" required />
                    <div className="inline-inputs">
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <div>
                            <label htmlFor="addressNumber">Address Number</label>
                            <input type="text" id="addressNumber" name="addressNumber" required />
                        </div>
                    </div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" required />
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" required />
                </form>
            </div>
            <div className="payment-info">
                <h3>Payment Information</h3>
                <form>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required />
                    <div className="inline-inputs">
                        <div>
                            <label htmlFor="expiryMonth">Expiry Month</label>
                            <input type="text" id="expiryMonth" name="expiryMonth" required />
                        </div>
                        <div>
                            <label htmlFor="expiryYear">Expiry Year</label>
                            <input type="text" id="expiryYear" name="expiryYear" required />
                        </div>
                    </div>
                    <label htmlFor="securityCode">Security Code</label>
                    <input type="text" id="securityCode" name="securityCode" required />
                </form>
            </div>
            <div className="shipping-method">
                <h3>Choose the shipping method</h3>
                <label>
                    <input type="radio" name="shipping" value="shipping" required /> Ship to Address
                </label>
                <label>
                    <input type="radio" name="shipping" value="storePickup" /> Pickup at Store
                </label>
            </div>
            <div className="additional-info">
                <p>Additional information or notes about your purchase:</p>
                <textarea></textarea>
            </div>
            <div className="checkout-buttons">
                <Link to="/finish" style={{ textDecoration: 'none' }}>
                    <button>Finish</button>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button>Cancel</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
