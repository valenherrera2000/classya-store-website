import React from 'react';
import paymentsImg from '../assets/img/payment-methods.png';

const BottomDetails = () => {
    return (
        <div className="payment-methods">
            <img src={paymentsImg} alt="Payment Methods" />
        </div>
    );
};

export default BottomDetails;