import { Container, Modal, Button, Row, Col } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import OfferEditForm from '../../components/OfferEditForm/OfferEditForm'
import offersService from '../../services/offers.services'
import { AuthContext } from './../../context/auth.context'
import OfferDetailCard from '../../components/OfferDetailCard/OfferDetailCard'
import { useNavigate, useParams } from 'react-router-dom'
import SubsBtn from '../../components/SubscribeBtn/SubsBtn'
import { Trash3, Pencil } from 'react-bootstrap-icons'
// import { MessageContext } from './../../context/message.context'


const OffersDetail = () => {

    const [showModal, setShowModal] = useState(false)
    const [offer, setOffer] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { id } = useParams()
    const { user, isLoggedIn } = useContext(AuthContext)

    useEffect(() => loadOffer(), [])

    const loadOffer = () => {
        offersService
            .getOneOffer(id)
            .then(({ data }) => {
                setOffer(data)
            })
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadOffer()
        // showMessage('OfferCreated')
    }

    const navigate = useNavigate()

    const handleDeleteOfferBtn = () => {
        offersService
            .deleteOffer(id)
            .then(() => navigate('/ofertas'))
            .catch(err => console.log(err))
    }


    const [isSubs, setIsSubs] = useState()
    const [btnState, setBtnState] = useState('Cargando...')


    useEffect(() => {
        id && checkIfSubs()
    }, [offer])


    const checkIfSubs = () => {
        offersService
            .getOneOffer(id)
            .then(({ data }) => {

                let foundSubs = ''

                data?.subscribers.forEach(elm => {
                    if (elm._id === id) {
                        foundSubs = elm._id
                    }
                })

                if (foundSubs !== '') {
                    setIsSubs(true)
                    setBtnState('Unsubscribe')
                } else {
                    setIsSubs(false)
                    setBtnState('Subscribe')
                }
            })
    }


    const handleSubsBtn = () => {

        if (!isSubs) {
            offersService
                .offerSubscribe(id)
                .then(() => {
                    setIsSubs(true)
                    setBtnState('Unsubscribe')
                })
                .catch(err => console.log(err))
        } else if (isSubs) {
            offersService
                .offerUnsubscribe(id)
                .then(() => {
                    setIsSubs(false)
                    setBtnState('Subscribe')
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <>
            <Container className='spacer'>
                <Row>
                    <OfferDetailCard {...offer} />
                    <Col sm={2}>
                        <div className='sidebar bg-blue'>
                            <Row>
                                <Col> <SubsBtn btnState={btnState} handleSubsBtn={handleSubsBtn} /></Col>
                                <Col> <p>Suscríbete a estea oferta onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Col>
                            </Row> </div>
                        <hr />
                        <Row className='edit-buttons'>
                            {(offer.publisher === user?._id || user.role === 'ADMIN') &&
                                <Button onClick={openModal}><Pencil /> </Button>}
                            {(offer.publisher === user?._id || user.role === 'ADMIN') &&
                                <Button className='myBtn' onClick={handleDeleteOfferBtn}><Trash3 /> </Button>}
                        </Row>
                    </Col>
                </Row>


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


// subscribe send id and add to publisher (subscribers to offer) message to publisher who publish the offer change of routes