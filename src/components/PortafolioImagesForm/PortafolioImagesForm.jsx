import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import uploadService from '../../services/upload.service'
// import housesService from '../../services/houses.service'
import { useParams } from 'react-router-dom'

const PortafolioImagesForm = ({ closeModal, refreshDetails }) => {

    const [portafolioImages, setPortafolioImages] = useState({
        images: []
    })
    const [loadingImage, setLoadingImage] = useState(false)

    const { user_id } = useParams()

    const uploadPortafolioImages = e => {

        setLoadingImage(true)

        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('photos', e.target.files[i]);
        }

        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                setLoadingImage(false)
                setPortafolioImages({ ...portafolioImages, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }

    function handleSubmit(e) {
        e.preventDefault()

        // housesService
        //     .uploadImages(house_id, houseImages)
            .then(() => {
                closeModal()
                refreshDetails()
            })
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Imágenes</Form.Label>
                <Form.Control type="file" onChange={uploadHouseImages} multiple />
            </Form.Group>

            <div className='modalBtnDiv'>
                <Button variant="dark" type="submit" disabled={loadingImage} className='myBtn'>Subir imágenes</Button>
            </div>

        </Form>
    )
}

export default PortafolioImagesForm