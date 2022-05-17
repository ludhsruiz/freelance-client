import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutFormCourse } from "./CheckoutFormCourse";

const PUBLIC_KEY = "YOUR_PUBLIC_TEST";

const stripeTestPromise = loadStripe('pk_test_51KxcJgKzRRHyAofXNAEno5VcuHm7Nde6DD8mds8rO010W1kTMgAItHT0pdYfGyW5vtM2yihGBc6fEXJ9i2vv4FbI00xs5dSFQa');

const StripeContainerCourse = ({courseId}) => {
    return (

        <Elements stripe={stripeTestPromise}>
            <CheckoutFormCourse courseId={courseId} />
        </Elements>
    );
};

export default StripeContainerCourse;