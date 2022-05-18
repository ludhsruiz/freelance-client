import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import coursesService from "../../services/courses.services"
import uploadOneService from '../../services/uploadOne.service'


const NewCourseForm = ({ fireFinalActions }) => {

    const [courseData, setCourseData] = useState({
        name: '',
        description: '',
        date: '',
        img: '' ,
        location: '',
        price: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setCourseData({
            ...courseData,
            [name]: value              
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        coursesService
            .createCourse(courseData)
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadOneService
            .uploadOneImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setCourseData({ ...courseData, img: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    const { name, description, date, location, price } = courseData


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="img">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={price} onChange={handleInputChange} name="price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={4} value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>
          

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'PUBLICAR CURSO'}</Button>
        </Form>

    )
}

export default NewCourseForm

