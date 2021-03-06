import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import publisherService from "../../services/publisher.services"
import uploadOneService from '../../services/uploadOne.service'



const PublisherEditForm = ({ publishers, fireFinalActionsEdit }) => {


    const [publisherState, setPublisherState] = useState({
        name: publishers.name,
        description: publishers.description,
        companyLogo: publishers.companyLogo ,
        contacto: publishers.contacto,
        
    })

    const [loadingImage, setLoadingImage] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.target
        setPublisherState({
            ...publisherState,
            [name]: value              
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        publisherService
            .editPublisher(publishers._id, publisherState)
            .then(() => {
                fireFinalActionsEdit()
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
                setPublisherState({ ...publisherState, companyLogo: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={publisherState.name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={4} value={publisherState.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>contacto</Form.Label>
                <Form.Control type="text" value={publisherState.contacto} onChange={handleInputChange} name="contacto" />
            </Form.Group>

           <Form.Group className="mb-3" controlId="companyLogo">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Guardar'}</Button>
        </Form>

    )
}

export default PublisherEditForm
