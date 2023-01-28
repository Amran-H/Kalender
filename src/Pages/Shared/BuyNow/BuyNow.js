import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const BuyNow = () => {
    return (
        <div className='sm:h-screen '>

            {/* <p className='my-10 md:ml-64 ml-10' >
                <img className='w-3/4 h-2/4 text-center ' src="https://t3.ftcdn.net/jpg/03/53/83/92/360_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg" alt="" />
            </p> */}
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>

        </div>
    );
};

export default BuyNow;