import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";


const stripeTestPromise = loadStripe('pk_test_51KxcJgKzRRHyAofXNAEno5VcuHm7Nde6DD8mds8rO010W1kTMgAItHT0pdYfGyW5vtM2yihGBc6fEXJ9i2vv4FbI00xs5dSFQa');

const Stripe = ({ idUser }) => {
    return (

        <Elements stripe={stripeTestPromise}>
            <CheckoutForm idUser={idUser} />
        </Elements>
    );
};

export default Stripe;