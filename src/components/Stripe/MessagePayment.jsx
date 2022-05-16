import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../services/user.services.js"
import subscriptionsService from '../../services/subscriptions.service'

const MessagePayment = ({ amount, idUser, paymentResult }) => {


    return (

        <h3>{paymentResult.message}</h3>

    )
}

export default MessagePayment