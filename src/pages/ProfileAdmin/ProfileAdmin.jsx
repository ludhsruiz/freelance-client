import './ProfileAdmin.css'
import { Container, Row, Modal, Button, Form, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import Messages from '../../components/Messages/Messages'
import offersService from '../../services/offers.services'
import eventsService from '../../services/events.services'
import coursesService from '../../services/courses.services'

const ProfileAdmin = () => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [coursesDetails, setCoursesDetails] = useState([])
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

        coursesService
            .getAllCourses()
            .then(({ data }) => {
                     setCoursesDetails(data)
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <Container>
                <h3>Hola Admin</h3>
                <Row>
                    <hr />
                    <Messages />
                    <hr />
                    <h4>Eventos</h4>
                    {eventDetails.map((event, index) => {
                        return (
                            <p key={index}>Título: {event.title} | Fecha: {event.date} | Precio: {event.price} | Empresa: {event.owner} </p>
                        )
                    })}
                    <hr />
                    <h4>Ofertas de Empleo</h4>
                    {
                        offersDetails.map((offer, index) => {
                            return (
                                <p key={index}>{offer.title} | {offer.companyName} | {offer.publisher.name}</p>
                            )
                        })
                    }
                    <hr />
                    <h4>Cursos</h4>
                    {
                        coursesDetails.map((course, index) => {
                            return (
                                <p key={index}>Título: {course.name} | Fecha: {course.date} | {course.price}</p>
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




