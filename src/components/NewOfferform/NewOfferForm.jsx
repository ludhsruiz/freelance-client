import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import offersService from "../../services/offers.services"
import uploadOneService from '../../services/uploadOne.service'


const NewOfferForm = ({ fireFinalActions }) => {

    const [offerData, setOfferData] = useState({
        title: '',
        companyName: '',
        companyLogo: '',
        description: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setOfferData({
            ...offerData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        offersService
            .createOffer(offerData)
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
                setOfferData({ ...offerData, companyLogo: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { title, companyName, description } = offerData



    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control type="text" value={companyLogo} onChange={handleInputChange} name="companyLogo" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Company Name </Form.Label>
                <Form.Control type="text" value={companyName} onChange={handleInputChange} name="companyName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                {/* <Form.Text className="text-muted">Mínimo 20 caracteres</Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="companyLogo">
                <Form.Label>company Logo</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            {/* <Button variant="dark" type="submit">CREAR OFEERTA</Button> */}
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'CREAR OFERTA'}</Button>
        </Form>

    )
}

export default NewOfferForm

