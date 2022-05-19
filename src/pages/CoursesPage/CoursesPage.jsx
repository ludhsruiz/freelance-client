import { Container, Modal, Button } from 'react-bootstrap'
import CoursesList from '../../components/CoursesList/CoursesList'
import { useEffect, useState } from "react"
import NewCourseForm from '../../components/NewCourseForm/NewCourseForm'
import coursesService from '../../services/courses.services'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'
// import { MessageContext } from './../../context/message.context'

const CoursesPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [courses, setCourses] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadCourses(), [])

    const loadCourses = () => {
        coursesService
            .getAllCourses()
            .then(({ data }) => setCourses(data))
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        loadCourses()
        // showMessage('CourseCreated')
    }

    const { isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Container className='mt-5'>
                <h1> CURSOS DISPONIBLES </h1>
                {isLoggedIn &&
                    <Button onClick={openModal}>Crear nuevo</Button>}
                <hr />
                <CoursesList courses={courses} />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Publicar Curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCourseForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CoursesPage