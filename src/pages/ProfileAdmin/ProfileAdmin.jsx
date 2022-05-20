import './ProfileAdmin.css'
import { Container, Row, Modal, Button, Form, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import Messages from '../../components/Messages/Messages'
import offersService from '../../services/offers.services'
import eventsService from '../../services/events.services'


const ProfileAdmin = () => {

    const { user, isLoggedIn } = useContext(AuthContext)

    //const [userDetails, setUserDetails] = useState([])
    const [eventDetails, seteventDetails] = useState([])
    const [offersDetails, setoffersDetails] = useState([])

    useEffect(() => loadEvents(), [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => {
                seteventDetails(data)
            })
            .then(err => console.log(err))

        offersService
            .getAllOffers()
            .then(({ data }) => {
                setoffersDetails(data)
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <Container className='spacer'>
                <h3>Hola Admin</h3>
                <Row>
                    <hr />
                    <Messages />
                    <hr />
                    <h4>Eventos</h4>
                    {eventDetails.map((event, index) => {
                        return (
                            <p key={index}><b>{event.title}</b> - Fecha: {event.date.slice(0, 10)} - Precio: {event.price}€ - Publicado por: {event.owner?.name} {event.owner?.surname} </p>
                        )
                    })}
                    <hr />
                    <h4>Cursos</h4>
                    {
                        offersDetails.map((offer, index) => {
                            return (
                                <p key={index}><b>{offer.title}</b> - {offer.companyName} - {offer.publisher.name} {offer.publisher.surname}</p>
                            )
                        })
                    }
                    <hr />
                </Row>
            </Container>

        </>

    )
}

export default ProfileAdmin




