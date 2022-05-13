import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import eventsService from "../../services/events.services"
// import uploadService from "../../services/upload.service"


const NewEventForm = ({ fireFinalActions }) => {

    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        date: '',
        img: '' ,
        location: '',
        price: '',
    })
    
    // const [loadingImage, setLoadingImage] = useState(false)

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

    // const handleImageUpload = (e) => {

    //     setLoadingImage(true)

    //     const uploadData = new FormData()
    //     uploadData.append('imageData', e.target.files[0])

    //     uploadService
    //         .uploadImage(uploadData)
    //         .then(({ data }) => {
    //             setLoadingImage(false)
    //             setCoasterData({ ...coasterData, imageUrl: data.cloudinary_url })
    //         })
    //         .catch(err => console.log(err))
    // }

    const { title, description, date, img, location, price } = eventData


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" value={img} onChange={handleInputChange} name="img" />
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

            {/* <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> */}

            <Button variant="dark" type="submit">PUBLICAR EVENTO</Button>
            {/* <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear montaña rusa'}</Button> */}
        </Form>

    )
}

export default NewEventForm

