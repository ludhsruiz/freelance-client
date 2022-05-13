import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import coursesService from "../../services/courses.services"


const CourseEditForm = ({ fireFinalActions, course }) => {

    const [courseState, setCourseState] = useState({
        name: course.name,
        date: course.date, 
        img: course.img, 
        location: course.location, 
        price: course.price,
        description: course.description,
    })
    

    const handleInputChange = e => {
        const { name, value } = e.target
        setCourseState({
            ...courseState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        coursesService
            .editCourse(course._id, courseState)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))


    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={courseState.name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" value={courseState.img} onChange={handleInputChange} name="img" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={courseState.price} onChange={handleInputChange} name="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={courseState.date} onChange={handleInputChange} name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" value={courseState.location} onChange={handleInputChange} name="location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={courseState.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> */}

                {/* <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear montaña rusa'}</Button> */}
                <Button variant="dark" type="submit" style={{ width: '100%' }}>Guardar información</Button>

            </Form>
        </>
    )
}

export default CourseEditForm