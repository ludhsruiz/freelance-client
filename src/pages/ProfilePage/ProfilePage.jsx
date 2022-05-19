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

            console.log('PAYMANT', data.length)

            if (data.length > 0) { setPayment(true) } else {
                setPayment(false)
            }


        })
        .catch(err => console.log(err))

    ///////////////////////////////

    publisherService
        .getPublisherByOwner(id)
        .then(({ data }) => {
            console.log('COMPANY', data.length)
            if (data.length > 0) { setCompany(true) } else {
                setCompany(false)
            }

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

    userService
        .getFollowing(id)
        .then(({ data }) => {
        })
        .catch(err => console.log(err))



    return (
        <>
            <Container className='spacer'>
                <Row>
                    <Col>
                        <h1>Perfil</h1>

                        {userIdentity && <Button onClick={openModal}><Pencil /></Button>}
                        {user?.role === 'ADMIN' && <SwitchUser userDetails={userDetails} />}  </Col>
                    <Col>    {(!payment && user.role === 'PUBLISHER') && <StripeContainer idUser={id} />}</Col>
                    <Col>  {(!company && payment) && <Button onClick={openModal2}>REGISTRAR EMPRESA</Button>}</Col>


                </Row>
                <hr />
                <Row>
                    <Col>
                        <img className='profile-imgBg' src={userDetails.profileImg} />
                    </Col>
                    <Col>
                        <h2>Nombre: {userDetails.name}</h2>
                        {userDetails.role === 'USER' ? <p>Role Actual: {userDetails.role}</p> : <h1></h1>}

                        <p><span className='bold'>Email: </span>{userDetails.email}</p>

                        <p><span className='bold'>Descripción: </span> {userDetails.description}</p>
                        <p><span className='bold'>Ocupación: </span> {userDetails.occupation}</p>
                        <p><span className='bold'>Bio: </span> {userDetails.bio}</p>
                    </Col>
                    <Col>
                        {!userIdentity && <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="Textarea">
                                <Form.Label>Deja un mensaje</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleInputChange} name="textarea" />
                            </Form.Group>
                            <Button variant="dark" type="submit">Enviar</Button>
                        </Form>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {userIdentity && <Messages />}
                    </Col>
                    <hr />
                    <Col>
                        <h3>Sigues a:</h3>
                        <Following id={id} />
                    </Col>

                    <hr />
                    <Col>

                        <h3>Te siguen:</h3>
                        <Followers id={id} />
                    </Col>
                    <hr />
                    <h3>Eventos</h3>

                    {
                        selfEvents.map((elm, index) => {

                            return (<div key={elm._id}><span className='bold' >{elm.title}</span>  <p>{elm.date.slice(0, 10)}  {elm.date.slice(11, 16)}</p> </div>)

                        })


                    }
                    <hr />
                    <h3>Cursos</h3>
                    {selfCourses.map((elm, index) => {
                        return (<div key={elm._id}><span className='bold' >{elm.name}</span>  <p>{elm.date.slice(0, 10)}  {elm.date.slice(11, 16)} </p></div>)

                    })}
                    <hr />
                </Row>
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