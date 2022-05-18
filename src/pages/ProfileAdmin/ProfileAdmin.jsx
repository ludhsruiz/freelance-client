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
                console.log('data', data)
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
            <Container>
                <h1>Hola</h1>
                <Row>
                    <Col>
                        <h1>Admin</h1>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <hr />
                {<Messages />}
                <hr />
                <h4>Eventos</h4>
                {eventDetails.map((event, index) => {
                    return (
                        <p key={index}>Título: {event.title} | Fecha: {event.date} | Precio: {event.price} | Empresa: {event.owner} </p>
                    )
                })}
                <hr />
                <h4>Cursos</h4>
                {
                    offersDetails.map((offer, index) => {
                        return (
                            <p key={index}>{offer.title} | {offer.companyName} | {offer.description} | {offer.description} | {offer.publisher.name}</p>
                        )
                    })
                }
                <hr />

            </Container>

        </>

    )
}

export default ProfileAdmin




