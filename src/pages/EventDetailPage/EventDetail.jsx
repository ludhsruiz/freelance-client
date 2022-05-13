import { Container, Modal, Button } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import EventEditForm from '../../components/EventEditForm/EventEditForm'
import eventsService from '../../services/events.services'
import { AuthContext } from '../../context/auth.context'
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { MessageContext } from './../../context/message.context'


const EventDetail = () => {

    const [showModal, setShowModal] = useState(false)
    const [event, setEvent] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => loadEvent(), [])

    const loadEvent = () => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEvent(data)
            })
            .then(err => console.log(err))
    }

    const { isLoggedIn } = useContext(AuthContext)
    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadEvent()
        // showMessage('OfferCreated')
    }

    const handleDeleteEventBtn = () => {
        eventsService
            .deleteEvent(id)
            .then(() => Navigate('/eventos'))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <EventDetailCard {...event} />
                {/* {offer.publisher === user?._id &&  --------------- } */}
                <Button onClick={openModal}>Edit</Button>
                <Button className='myBtn' onClick={handleDeleteEventBtn}>Eliminar</Button>
                <hr />
            </Container>

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


// deleteOffer = id => {   return this.api.delete(`${id}/delete`)}
// OfferSubscribe = id => {   return this.api.put(`${id}/subscribe`)}
// subscribe send id and add to publisher (subscribers to offer)