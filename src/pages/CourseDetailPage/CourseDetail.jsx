import { Container, Modal, Button } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react"
import CourseEditForm from '../../components/CourseEditForm/CourseEditForm'
import coursesService from '../../services/courses.services'
import { AuthContext } from '../../context/auth.context'
import CourseDetailCard from '../../components/CourseDetailCard/CourseDetailCard'
import { useNavigate, useParams } from 'react-router-dom'
import { Trash3, Pencil } from 'react-bootstrap-icons'
import './CourseDetails.css'

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

                console.log('CURSO', data, id)
            })
            .then(err => console.log(err))
    }

    const { isLoggedIn } = useContext(AuthContext)


    const fireFinalActions = () => {
        closeModal()
        loadCourse()

    }

    const navigate = useNavigate()

    const handleDeleteCourseBtn = () => {
        coursesService
            .deleteCourse(id)
            .then(() => navigate('/ofertas'))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Container className='mt-5'>
                <CourseDetailCard {...course} />
                {(course.publisher === user?._id || user.role === 'ADMIN') &&
                    <><Button variant='outline-dark' onClick={openModal}><Pencil /></Button><Button variant='outline-dark' className='myBtn' onClick={handleDeleteCourseBtn}><Trash3 /></Button></>}
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
