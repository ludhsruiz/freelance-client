import { Toast, ToastContainer } from "react-bootstrap"
import { useContext } from "react"
import { MessageContext } from '../../context/userMessage.context'

const ToastMessage = () => {

    const { show, setShow, messageInfo } = useContext(MessageContext)


    return (

        <ToastContainer position={'top-end'}>
            <Toast show={show} autohide delay={3000} onClose={() => setShow(false)}>
                <Toast.Header>
                    {/* <strong className="me-auto">{messageInfo.title}</strong> */}
                    <small className="text-muted">{messageInfo.title}</small>
                </Toast.Header>
                <Toast.Body>{messageInfo.description}</Toast.Body>
            </Toast>
        </ToastContainer>


    )
}

export default ToastMessage