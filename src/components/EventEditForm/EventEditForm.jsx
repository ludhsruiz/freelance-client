import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import eventsService from "../../services/events.services"
import uploadOneService from '../../services/uploadOne.service'


const EventEditForm = ({ fireFinalActions, event }) => {

    const [eventState, setEventState] = useState({
        title: event.title,
        date: event.date, 
        img: event.img, 
        location: event.location, 
        price: event.price,
        description: event.description,
    })
    
    const [loadingImage, setLoadingImage] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.target

        setEventState({
            ...eventState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        eventsService
            .editEvent(event._id, eventState)
            .then(() => {
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
                setEventState({ ...eventState, img: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={eventState.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={eventState.price} onChange={handleInputChange} name="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={eventState.date} onChange={handleInputChange} name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" value={eventState.location} onChange={handleInputChange} name="location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={4} value={eventState.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'GUARDAR'}</Button>

            </Form>
        </>
    )
}

export default EventEditForm