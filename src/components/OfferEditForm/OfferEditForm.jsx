import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import offersService from "../../services/offers.services"


const OfferEditForm = ({ offer }) => {

    const [offerState, setOfferState] = useState({
        title: offer.title,
        companyLogo: offer.companyLogo,
        companyName: offer.companyName,
        description: offer.description,       
    })


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
                closeModal()
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

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control type="text" value={offerState.companyLogo} onChange={handleInputChange} name="companyLogo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Company Name </Form.Label>
                <Form.Control type="text" value={offerState.companyName} onChange={handleInputChange} name="companyName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={offerState.description} onChange={handleInputChange} name="description" />
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

export default OfferEditForm