import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import eventsService from "../../services/events.services"
import uploadOneService from '../../services/uploadOne.service'

const NewEventForm = ({ fireFinalActions }) => {

    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        date: '',
        img: '',
        location: '',
        price: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setEventData({
            ...eventData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        eventsService
            .createEvent(eventData)
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
                setEventData({ ...eventData, img: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { title, description, date, location, price } = eventData


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={4} value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={price} onChange={handleInputChange} name="price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="img">
                <Form.Label>Imagen </Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'PUBLICAR EVENTO'}</Button>
        </Form>

    )
}

export default NewEventForm

