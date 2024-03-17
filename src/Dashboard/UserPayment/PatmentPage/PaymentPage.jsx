

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../Checkoutform/CheckoutForm";


const PaymentPage = () => {
    const stripePromise = loadStripe('pk_test_51OFG56CNauCCHpjswzTuGxspOJUO2v6cJAsiQnU5MbDmMdH8IK9Mm8vJQEWa1U6PS9uhz7YxA6zCXrTUYcDCh99300G5tJ7396')

    return (
        <div className='h-[90vh] flex items-center justify-center' >
            <div>
              
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;