import './ProfilePage.css'
import { Container, Modal, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import userService from '../../services/user.services'
import ProfileForm from '../../components/ProfileForm/ProfileForm'


const ProfilePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)


    const [userDetails, setUserDetails] = useState([])
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadUser(), [])


    const loadUser = () => {
        userService
            .editUser(user._id)
            .then(({ data }) => {

                setUserDetails(data)
                console.log(data)

            })
            .then(err => console.log(err))
    }

    const fireFinalActions = () => {
        closeModal()
        loadUser()
    }

    return (

        <>
            <Container>
                <h1>Profile Page</h1>
                <hr />
                {isLoggedIn && <Button onClick={openModal}>Editar Perfil</Button>}
                {user?.role === 'ADMIN' && <h1>COMPONENTE ADMIN</h1>}
                {user?.role === 'USER' && <h1>COMPONENTE USER</h1>}

                <h2>Nombre: {userDetails.name}</h2>
                <p>Email: {userDetails.email}</p>
                <p>Imagen: <img className='profile-img' src={userDetails.profileImg} /></p>
                <p>Descripción: {userDetails.description}</p>
                <p>Ocupación {userDetails.occupation}</p>
                <hr />
                <h3>Seguidores</h3>
                <p>{userDetails.follower}</p>
                <hr />
                <h3>Sigues</h3>
                <p>{userDetails.following}</p>
                <hr />
                <h3>Eventos</h3>
                <p>{userDetails.follower}</p>
                <hr />
                <h3>Cursos</h3>
                <p>{userDetails.following}</p>
                <hr />

            </Container>


            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm fireFinalActions={fireFinalActions} userDetails={userDetails} />
                </Modal.Body>
            </Modal>

        </>

    )
}

export default ProfilePage




