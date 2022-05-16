import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios'
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap"
import './CheckoutForm.css'
import { useState, useEffect } from "react"
import MessagePayment from "./MessagePayment";


export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = 2000

    const [showModal, setShowModal] = useState(false)
    const [paymentResult, setpaymentResult] = useState('')
    //useEffect(() => loadUser(), [id])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const fireFinalActions = () => {
        closeModal()
        // loadUser()
    }

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
                    console.log('RESPONSE= ', response.data.success)
                    console.log('RESPONSEDATA= ', response.data)
                    setpaymentResult(response.data)
                    setShowModal(true)

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

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Estado del Pago</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MessagePayment fireFinalActions={fireFinalActions} paymentResult={paymentResult} />
                </Modal.Body>
            </Modal>


        </Container>
    );
};


