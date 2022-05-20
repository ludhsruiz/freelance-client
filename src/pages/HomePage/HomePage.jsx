import './HomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import offersService from '../../services/offers.services'
import OfferList from '../../components/OfferList/OfferList'
import eventsService from '../../services/events.services'
import EventsList from '../../components/EventList/EventList'
import userService from '../../services/user.services'
import UsersListImg from '../../components/UsersListImg/UsersListImg'



const IndexPage = () => {

    const [offers, setOffers] = useState([])
    const [events, setEvents] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => loadUsers(), [])

    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => {
                setUsers(data)
            })
            .then(err => console.log(err))
    }


    useEffect(() => loadOffers(), [])

    const loadOffers = () => {
        offersService
            .getAllOffers()
            .then(({ data }) => setOffers(data.slice(0, 3)))
            .then(err => console.log(err))
    }

    useEffect(() => loadEvents(), [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data.slice(0, 3)))
            .then(err => console.log(err))
    }

    return (
        <Container className='spacer'>
            <Row className='mb-3'>

                {/* <Col md-12> */}
                    <h1 className='blue-color'>Conectando personas</h1>
                    <h1 className='grey-color'>Conecta empresas con profesionales independientes y agencias de todo el mundo.</h1>
                   
                    <br pad></br>
                {/* </Col> */}
                <Col ></Col>
            </Row >
            <Row className='mb-3'>

                <hr />
                <br></br>
                <h3>ÚLTIMAS OFERTAS</h3>
                <Col className='mt-3'>
                    <OfferList offers={offers} />
                </Col>
            </Row>
            <Row className='mt-3'>

                <hr />
                <br></br>
                <h3>ÚLTIMOS EVENTOS</h3>
                <Col className='mt-3'>
                    <EventsList events={events} />
                </Col>
            </Row>
            <Row className='mt-3'>

                <hr />
                <br></br>
                <h3>USUARIOS</h3>
                <Col className='mt-3'>
                    <p>Contamos con más de {users.length} Freelance</p>
                    <UsersListImg users={users} />

                </Col>
            </Row>


        </Container>
    )
}

export default IndexPage



