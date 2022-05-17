import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import publisherService from "../../services/publisher.services"
// import uploadService from "../../services/upload.service"



const NewPublisherForm = ({ fireFinalActions, owner }) => {

    console.log('OWNER---------->', owner)

    const [publisherData, setPublisherData] = useState({
        name: '',
        description: '',
        companyLogo: '',
        contacto: '',
        owner: owner
    })

    // const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setPublisherData({
            ...publisherData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        publisherService
            .createPublisher(publisherData)
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


    const { _id, name, contacto, companyLogo, description } = publisherData


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control type="text" value={companyLogo} onChange={handleInputChange} name="companyLogo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>contacto</Form.Label>
                <Form.Control type="text" value={contacto} onChange={handleInputChange} name="contacto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="owner">
                <Form.Control type="hidden" value={owner} onChange={handleInputChange} name="owner" />
            </Form.Group>


            {/* <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> */}

            <Button variant="dark" type="submit">PUBLICAR EMPRESA</Button>
            {/* <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear montaña rusa'}</Button> */}
        </Form>

    )
}

export default NewPublisherForm

