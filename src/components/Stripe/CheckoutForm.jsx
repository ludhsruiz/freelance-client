import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import './CheckoutForm.css'


export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = 2000

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);

            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:3001/stripe/charge",
                    {
                        amount: amount,
                        id: id,
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                    console.log('RESPONSE= ', response)
                    console.log('RESPONSEDATA= ', response.data)
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <Container>
            <Row className='stripe'>
                <Col>

                    <img src="https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png" />
                    <h3>Curso de React</h3>

                    <Form onSubmit={handleSubmit} >

                        <CardElement />
                        <hr />
                        <Button variant="primary" type="submit">
                            Pagar
                        </Button>
                    </Form>

                </Col>

            </Row>
        </Container>
    );
};


