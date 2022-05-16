import { Container, Modal, Button } from 'react-bootstrap'
import PublisherList from '../../components/PublisherList/PublisherList'
import { useEffect, useState } from "react"
import NewPublisherForm from '../../components/NewPublisherForm/NewPublisherForm'
import publishersServices from '../../services/publisher.services'
// import { AuthContext } from './../../context/auth.context'
// import { MessageContext } from './../../context/message.context'


const PublishersPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [publishers, setPublishers] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadPublishers(), [])

    const loadPublishers = () => {
        publishersServices
            .getPublishers()
            .then(({ data }) => setPublishers(data))
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadPublishers()
        // showMessage('CourseCreated')
    }


    return (
        <>
            <Container>
                <h1> EMPRESAS CON LAS QUE TRABAJAMOS </h1>
                <Button onClick={openModal}>REGiSTraR una nueva empresa</Button>
                <hr />
                {/* <PublishersList publishers={publishers} /> */}
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>REGiSTraR EMPRESA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPublisherForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PublishersPage