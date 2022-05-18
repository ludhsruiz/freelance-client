import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import coursesService from "../../services/courses.services"
// import uploadOneService from '../../services/uploadOne.service'



const CourseEditForm = ({ fireFinalActions, course }) => {

    const [courseState, setCourseState] = useState({
        name: course.name,
        date: course.date, 
        img: course.img, 
        location: course.location, 
        price: course.price,
        description: course.description,
    })
    
    // const [loadingImage, setLoadingImage] = useState(false)


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

    // const handleImageUpload = (e) => {

    //     setLoadingImage(true)

    //     const uploadData = new FormData()
    //     uploadData.append('imageData', e.target.files[0])

    //     uploadOneService
    //         .uploadOneImage(uploadData)
    //         .then(({ data }) => {
    //             setLoadingImage(false)
    //             setPublisherData({ ...courseState, img: data.cloudinary_url })
    //         })
    //         .catch(err => console.log(err))
    // }


    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={courseState.name} onChange={handleInputChange} name="name" />
                </Form.Group>
{/* 
                <Form.Group className="mb-3" controlId="img">
                    <Form.Label>Imagen </Form.Label>
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group> */}

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

                {/* <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'EDITAR CURSO'}</Button> */}
                <Button variant="dark" type="submit" style={{ width: '100%' }}>Guardar información</Button>

            </Form>
        </>
    )
}

export default CourseEditForm