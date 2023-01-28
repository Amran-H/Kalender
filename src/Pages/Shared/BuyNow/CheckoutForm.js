import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

    }

    return (
        <>
            <form className='ml-12 ' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-600 mt-4'>{cardError}</p>

                <button className='btn btn-sm my-8 border-none bg-emerald-400 hover:bg-emerald-600'
                    type="submit" disabled={!stripe} >
                    Pay
                </button>

            </form>
        </>
    );
};

export default CheckoutForm;