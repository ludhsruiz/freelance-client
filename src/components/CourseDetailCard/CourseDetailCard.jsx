import { Image, Row, Col, Modal } from "react-bootstrap"
import StripeContainerCourse from '../../components/StripeCourse/StripeContainer'
import coursesService from '../../services/courses.services'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/auth.context'
import MessagePayment from "../../components/StripeCourse/MessagePayment";

const CourseDetailCard = ({ _id, name, description, date, img, location, price }) => {


    const { user, isLoggedIn } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const fireFinalActions = () => {
        closeModal()
    }

    useEffect(() => loadCourse(), [_id])

    const loadCourse = () => {
        coursesService
            .getOneCourse(_id)
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
            <h2>{name}</h2>
            <hr></hr>
            <Row>
                <Col>
                    <Image className='roundedCircle thumbnail' src={img}></Image>
                </Col>
                <Col md={1}></Col>
                <Col>
                    <p>{location} - <b>{price}</b> €</p>
                    <p>{date}</p>
                    <hr></hr>
                    <p>{description}</p>
                    {!payment && <StripeContainerCourse courseId={_id} price={price} name={name} type={'event'} payment={payment} setPayment={setPayment} />}
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

export default CourseDetailCard