import { Container, Modal, Button } from 'react-bootstrap'
import EventsList from '../../components/EventList/EventList'
import { useEffect, useState } from "react"
import NewEventForm from '../../components/NewEventForm/NewEventForm'
import eventsService from '../../services/events.services'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'
// import { MessageContext } from './../../context/message.context'
import './EventPage.css'

const EventsPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [events, setEvents] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadEvents(), [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadEvents()
        // showMessage('EventCreated')
    }

    const { user, isLoggedIn } = useContext(AuthContext)

    return (
        <div className='events'>
            <Container >
                <h1 className='grey-color' >Un lugar para hacer networking y descubrir nuevos intereses </h1>
                <h3 className='blue-color'><br></br>
                    Nuevos eventos todas las semanas, free meet-ups para networking, y nuevas maneras de descubrir talentos creativos.<br></br>
                    Registrate y unite a nuestra comunidad de frelancers</h3>
                {isLoggedIn && (user.role === 'PUBLISHER' || user.role === 'ADMIN') &&
                    <Button  variant='outline-dark'  onClick={openModal}>Crear nuevo</Button>}
                <hr />
                <EventsList events={events} />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Publicar Evento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewEventForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EventsPage