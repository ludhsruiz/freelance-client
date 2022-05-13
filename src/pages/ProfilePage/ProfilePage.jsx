import './ProfilePage.css'
import { Container, Modal, Button, Form } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import userService from '../../services/user.services'
import postsService from '../../services/posts.services'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { useParams } from "react-router-dom";
import Messages from '../../components/Messages/Messages'


const ProfilePage = () => {

    const { id } = useParams()

    const { user, isLoggedIn } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [messageData, setmessageData] = useState('')


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadUser(), [])

    const loadUser = () => {
        userService
            .editUser(id)
            .then(({ data }) => {
                setUserDetails(data)
            })
            .then(err => console.log(err))
    }

    const fireFinalActions = () => {
        closeModal()
        loadUser()
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
            .then(response => {

            })
            .catch(err => console.log(err))
    }
    ///////////////////////////////

    return (

        <>
            <Container>
                <h1>Profile Page</h1>
                <hr />
                {userIdentity && <Button onClick={openModal}>Editar Perfil</Button>}
                {user?.role === 'ADMIN' && <h1>COMPONENTE ADMIN</h1>}
                {user?.role === 'USER' && <h1>COMPONENTE USER</h1>}

                <h2>Nombre: {userDetails.name}</h2>
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
                    <Button variant="dark" type="submit">Enviar mensaje</Button>
                </Form>

                <hr />

                <Messages />

                <hr />
                <h4>Seguidores</h4>
                <p>{userDetails.follower}</p>
                <hr />
                <h4>Sigues</h4>
                <p>{userDetails.following}</p>
                <hr />
                <h4>Eventos</h4>
                <p>{userDetails.follower}</p>
                <hr />
                <h4>Cursos</h4>
                <p>{userDetails.following}</p>
                <hr />



            </Container>


            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perf</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm fireFinalActions={fireFinalActions} userDetails={userDetails} />
                </Modal.Body>
            </Modal>

        </>

    )
}

export default ProfilePage




