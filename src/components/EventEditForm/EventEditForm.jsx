import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import eventsService from "../../services/events.services"


const EventEditForm = ({ fireFinalActions, event }) => {

    const [eventState, setEventState] = useState({
        title: event.title,
        date: event.date, 
        img: event.img, 
        location: event.location, 
        price: event.price,
        description: event.description,
    })
    

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

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={eventState.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" value={eventState.img} onChange={handleInputChange} name="img" />
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
                    <Form.Control type="text" value={eventState.description} onChange={handleInputChange} name="description" />
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

export default EventEditForm