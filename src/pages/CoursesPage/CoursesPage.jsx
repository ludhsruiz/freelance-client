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
                <h1 className='grey-color'> Comparte tu talento impartiendo cursos de tu especilidad </h1>
                <h2 className='blue-color'> Ya sea que sea uno de nuestros encantadores trabajadores freelance o una pequeña empresa, 
                    lo alentamos a compartir sus talentos en uno de nuestros cursos.
                    Simplemente registrate y comparte ya sea de manera digital o en persona
                </h2>
                {isLoggedIn &&
                    <Button  variant='outline-dark'  onClick={openModal}>Crear nuevo</Button>}
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