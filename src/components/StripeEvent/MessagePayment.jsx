import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../services/user.services.js"

const MessagePayment = ({ fireFinalActions, paymentResult }) => {



    // const [userData, setuserData] = useState({
    //     paymentResult: paymentResult
    // })

    return (

        <h3>{paymentResult.message}</h3>


    )
}

export default MessagePayment