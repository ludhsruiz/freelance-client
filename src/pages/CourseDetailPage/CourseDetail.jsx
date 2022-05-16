import { Container, Modal, Button } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import CourseEditForm from '../../components/CourseEditForm/CourseEditForm'
import coursesService from '../../services/courses.services'
import { AuthContext } from '../../context/auth.context'
import CourseDetailCard from '../../components/CourseDetailCard/CourseDetailCard'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { MessageContext } from './../../context/message.context'


const CoursesDetail = () => {

    const [showModal, setShowModal] = useState(false)
    const [course, setCourse] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => loadCourse(), [])

    const loadCourse = () => {
        coursesService
            .getOneCourse(id)
            .then(({ data }) => {
                setCourse(data)
            })
            .then(err => console.log(err))
    }

    const { isLoggedIn } = useContext(AuthContext)
    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadCourse()
        // showMessage('CourseCreated')
    }

    const handleDeleteCourseBtn = id => {
        coursesService
            .deleteCourse(id)
            .then(() => Navigate('/ofertas'))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <CourseDetailCard {...course} />
                {/* {course.publisher === user?._id &&     -------- }  */}
                <Button onClick={openModal}>Edit</Button>
                <Button className='myBtn' onClick={handleDeleteCourseBtn}>Eliminar</Button>  
                <hr />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Oferta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CourseEditForm fireFinalActions={fireFinalActions} course={course} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CoursesDetail
