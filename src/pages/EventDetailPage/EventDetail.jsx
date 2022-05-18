import { Container, Modal, Button, Row, Col } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import EventEditForm from '../../components/EventEditForm/EventEditForm'
import eventsService from '../../services/events.services'
import { AuthContext } from '../../context/auth.context'
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import { useNavigate, useParams } from 'react-router-dom'
import StripeContainerEvent from '../../components/StripeEvent/StripeContainer'
import { Trash3, Pencil } from 'react-bootstrap-icons'

// import { MessageContext } from './../../context/message.context'
import './EventDetail'


const EventDetail = () => {

    const [showModal, setShowModal] = useState(false)
    const [event, setEvent] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { id } = useParams()
    const { user, isLoggedIn } = useContext(AuthContext)


    useEffect(() => loadEvent(), [])

    const loadEvent = () => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEvent(data)
            })
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadEvent()
        // showMessage('OfferCreated')
    }

    const navigate = useNavigate()

    const handleDeleteEventBtn = () => {

        eventsService
            .deleteEvent(id)
            .then(() => navigate('/eventos'))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Container className='events'>
                <EventDetailCard {...event} />
                <Row>
                    <Col md={8}></Col>
                    <Col className='edit-buttons'>{(event.owner === user?._id || user.role === 'ADMIN') &&
                        <Button onClick={openModal}><Pencil /></Button>}
                        {(event.owner === user?._id || user.role === 'ADMIN') &&
                            <Button className='myBtn' onClick={handleDeleteEventBtn}><Trash3 /></Button>}
                    </Col>
                </Row>
            </Container>

            <StripeContainerEvent eventId={id} />

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Oferta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EventEditForm fireFinalActions={fireFinalActions} event={event} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EventDetail


// eventAttendance = id => {
//     return this.api.put(`${id}/attendance`)
// }

// eventLeave = id => {
//     return this.api.put(`${id}/leave`)
// }