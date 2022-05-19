import './ProfilePage.css'
import { Container, Row, Modal, Button, Form, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import userService from '../../services/user.services'
import postsService from '../../services/posts.services'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { useParams, Link } from "react-router-dom";
import Messages from '../../components/Messages/Messages'
import StripeContainer from '../../components/Stripe/StripeContainer'
import SwitchUser from '../../components/SwitchUser/SwitchUser'
import subscriptionsService from '../../services/subscriptions.service'
import publisherService from '../../services/publisher.services'
import NewPublisherForm from '../../components/NewPublisherForm/NewPublisherForm'
import { Pencil } from 'react-bootstrap-icons'
import eventsService from '../../services/events.services'
import coursesService from '../../services/courses.services'
import Followers from '../../components/Followers/Followers'
import Following from '../../components/Following/Following'

const ProfilePage = () => {

    const { id } = useParams()

    const { user, isLoggedIn } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [messageData, setmessageData] = useState('')

    const [payment, setPayment] = useState(false)
    const [company, setCompany] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    const fireFinalActions = () => {
        closeModal()
        loadUser()
    }

    useEffect(() => loadUser(), [id])

    const loadUser = () => {
        userService
            .editUser(id)
            .then(({ data }) => {
                setUserDetails(data)
            })
            .then(err => console.log(err))
    }
    const [showModal2, setShowModal2] = useState(false)
    const openModal2 = () => setShowModal2(true)
    const closeModal2 = () => setShowModal2(false)
    const fireFinalActions2 = () => {
        closeModal2()
    }

    const userIdentity = isLoggedIn && id === user._id

    //////////////////////////

    const handleInputChange = e => {
        setmessageData(e.currentTarget.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('form= ', user._id, id, messageData)

        postsService
            .createPost(user._id, id, messageData) // (user_id, user)
            .catch(err => console.log(err))
    }
    ///////////////////////////////

    subscriptionsService
        .getOneSubscriber(id)
        .then(({ data }) => {

            if (data.length > 0) { setPayment(true) }


        })
        .catch(err => console.log(err))

    ///////////////////////////////

    publisherService
        .getPublisherByOwner(id)
        .then(({ data }) => {

            if (data.length > 0) { setCompany(true) }

        })
        .catch(err => console.log(err))


    /////////////////////////////

    const [selfEvents, setselfEvents] = useState([])

    useEffect(() => loadEvents(), [])

    const loadEvents = () => {
        eventsService
            .getAllAttendants2(id)
            .then(({ data }) => {

                setselfEvents(data)

            })

            .then(err => console.log(err))
    }

    /////////////////////////////

    const [selfCourses, setselfCourses] = useState([])

    useEffect(() => loadCourses(), [])

    const loadCourses = () => {
        coursesService
            .getAllAttendants(id)
            .then(({ data }) => {

                setselfCourses(data)
            })
            .then(err => console.log(err))
    }
    ////////////////////////////////////////////




    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Perfil</h1>
                    </Col>
                    <Col>
                        {userIdentity && <Button onClick={openModal}><Pencil /></Button>}
                        {user?.role === 'ADMIN' && <SwitchUser userDetails={userDetails} />}
                        {!payment && < StripeContainer idUser={id} />}
                        {!company && payment && <Button onClick={openModal2}>REGISTRAR EMPRESA</Button>}

                    </Col>
                </Row>
                <hr />

                <h2>Nombre: {userDetails.name}</h2>
                {userDetails.role === 'USER' ? <p>Role Actual: {userDetails.role}</p> : <h1></h1>}

                <p>Email: {userDetails.email}</p>
                <p>Imagen: <img className='profile-img' src={userDetails.profileImg} /></p>
                <p>Descripción: {userDetails.description}</p>
                <p>Ocupación {userDetails.occupation}</p>
                <hr />

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Textarea">
                        <Form.Label>Deja un mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleInputChange} name="textarea" />
                    </Form.Group>
                    <Button variant="dark" type="submit">Escribe un mensaje</Button>
                </Form>

                <hr />
                {userIdentity && <Messages />}

                <hr />
                <h4>Seguidores</h4>
                <Following id={id} />


                <hr />
                <h4>Sigues</h4>
                <Followers id={id} />
                <hr />
                <h4>Eventos</h4>

                {
                    selfEvents.map((elm, index) => {

                        return (<div key={elm._id}><p >{elm.title} | {elm.date.slice(0, 10)} | {elm.date.slice(11, 16)} </p></div>)

                    })


                }
                <hr />
                <h4>Cursos</h4>
                {selfCourses.map((elm, index) => {
                    return (<div key={elm._id}><p>{elm.name} | {elm.date.slice(0, 10)} | {elm.date.slice(11, 16)} </p></div>)

                })}
                <hr />

            </Container>

            <Modal show={showModal2} onHide={closeModal2}>
                <Modal.Header closeButton>
                    <Modal.Title>REGISTRAR EMPRESA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPublisherForm fireFinalActions={fireFinalActions} owner={id} />
                </Modal.Body>
            </Modal>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm fireFinalActions={fireFinalActions} userDetails={userDetails} />
                </Modal.Body>
            </Modal>

        </>

    )
}

export default ProfilePage