import { Container, Image, Row, Col, Modal } from "react-bootstrap"
import StripeContainerEvent from '../../components/StripeEvent/StripeContainer'
import EventsService from '../../services/events.services'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import { Navigate } from "react-router-dom"
import MessagePayment from "../../components/StripeEvent/MessagePayment";


const EventDetailCard = ({ _id, title, description, date, img, location, price }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const fireFinalActions = () => {
        closeModal()
    }

    useEffect(() => loadEvent(), [_id])

    const loadEvent = () => {
        EventsService
            .getOneEvent(_id)
            .then(({ data }) => {

                if (data.attendants.length > 0) {

                    for (let i = 0; i < data.attendants.length; i++) {

                        if (data.attendants[i]._id === user._id) {

                            setPayment(true)
                        }
                    }
                }
            })
            .then(err => console.log(err))
    }
    const [payment, setPayment] = useState(false)
    useEffect(() => {
        payment ? setShowModal(true) : console.log('NOOOOOOOO')
    }, [payment]);

    return (
        <>
            <h2>{title}</h2>
            <hr></hr>
            <Row>
                <Col>
                    <Image className='roundedCircle thumbnail' src={img}></Image>
                </Col>
                <Col md={1}></Col>
                <Col>
                    <p>{location} - {price} €</p>
                    <p>{date}</p>
                    <hr></hr>
                    <p>{description}</p>
                    {(!payment && price != 0) && <StripeContainerEvent eventId={_id} price={price} title={title} type={'event'} payment={payment} setPayment={setPayment} />}
                </Col>
                <Col md={1}></Col>
            </Row>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Estado del Pago</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MessagePayment fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EventDetailCard