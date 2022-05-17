import { Modal, Button } from 'react-bootstrap'
import { useState } from "react"
import NewPublisherForm from '../../components/NewPublisherForm/NewPublisherForm'

const CompanyRegister = (modal) => {

    const [showModal2, setShowModal2] = useState(modal)

    const openModal2 = () => setShowModal2(true)
    const closeModal2 = () => setShowModal2(false)


    const fireFinalActions = () => {
        closeModal2()
    }

    return (
        <>

            <Modal show={showModal2} onHide={closeModal2}>
                <Modal.Header closeButton>
                    <Modal.Title>REGISTRAR EMPRESA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPublisherForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CompanyRegister