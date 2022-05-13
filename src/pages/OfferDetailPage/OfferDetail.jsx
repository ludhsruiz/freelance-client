import { Container, Modal, Button } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import OfferEditForm from '../../components/OfferEditForm/OfferEditForm'
import offersService from '../../services/offers.services'
import { AuthContext } from './../../context/auth.context'
import OfferDetailCard from '../../components/OfferDetailCard/OfferDetailCard'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { MessageContext } from './../../context/message.context'


const OffersDetail = () => {

    const [showModal, setShowModal] = useState(false)
    const [offer, setOffer] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => loadOffer(), [])

    const loadOffer = () => {
        offersService
            .getOneOffer(id)
            .then(({ data }) => {
                setOffer(data)
            })
            .then(err => console.log(err))
    }

    const { isLoggedIn } = useContext(AuthContext)
    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadOffer()
        // showMessage('OfferCreated')
    }

    const handleDeleteOfferBtn = () => {
        offersService
            .deleteOffer
            .deletePost(id)
            .then(() => Navigate('/ofertas'))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <OfferDetailCard {...offer} />
                {offer.publisher === user?._id && <Button onClick={openModal}>Edit</Button>}
                {offer.publisher === user?._id && <Button className='myBtn' onClick={handleDeleteOfferBtn}>Eliminar</Button>}
                <hr />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Oferta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OfferEditForm fireFinalActions={fireFinalActions} offer={offer} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OffersDetail



// editOffer = (id, offer) => {
//     return this.api.put(`${id}/edit`, offer)}
// deleteOffer = id => {
//     return this.api.delete(`${id}/delete`)}
// OfferSubscribe = id => {
//     return this.api.put(`${id}/subscribe`)}
// subscribe send id and add to publisher (subscribers to offer)