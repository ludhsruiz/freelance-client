import { Container, Modal, Button } from 'react-bootstrap'
import OfferList from '../../components/OfferList/OfferList'
import { useEffect, useState } from "react"
import NewOfferForm from '../../components/NewOfferform/NewOfferForm'
import offersService from '../../services/offers.services'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
// import { MessageContext } from './../../context/message.context'

const OffersPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [offers, setOffers] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadOffers(), [])

    const loadOffers = () => {
        offersService
            .getAllOffers()
            .then(({ data }) => setOffers(data))
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadOffers()
        // showMessage('OfferCreated')
    }


    const { user, isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Container className='mt-5'>
                <h1 className='blue-color'>Tu próximo trabajo comienza aquí </h1><br></br>
                <h3 className='grey-color'>Configure un perfil gratuito para mostrar sus habilidades y experiencia.
                    Usted elige el método de pago que más le convenga para que le paguen fácilmente por su trabajo.
                    Solo revisa nuestras ofertas y suscríbete a ellas.</h3>
                <br></br>
                {isLoggedIn && (user.role === 'PUBLISHER' || user.role === 'ADMIN') &&
                    <Button variant='outline-dark' onClick={openModal}>Crear nueva</Button>}

                <hr />
                <OfferList offers={offers} />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Oferta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewOfferForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OffersPage