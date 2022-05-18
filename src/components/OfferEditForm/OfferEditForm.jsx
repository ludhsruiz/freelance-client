import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import offersService from "../../services/offers.services"
import uploadOneService from '../../services/uploadOne.service'


const OfferEditForm = ({ fireFinalActions, offer }) => {

    const [offerState, setOfferState] = useState({
        title: offer.title,
        companyLogo: offer.companyLogo,
        companyName: offer.companyName,
        description: offer.description,
    })

    const [loadingImage, setLoadingImage] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.target
        setOfferState({
            ...offerState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        offersService
            .editOffer(offer._id, offerState)
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
                setOfferState({ ...offerState, companyLogo: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={offerState.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Company Name </Form.Label>
                    <Form.Control type="text" value={offerState.companyName} onChange={handleInputChange} name="companyName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={4} value={offerState.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyLogo">
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>

                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Guardar'}</Button>

            </Form>
        </>
    )
}

export default OfferEditForm