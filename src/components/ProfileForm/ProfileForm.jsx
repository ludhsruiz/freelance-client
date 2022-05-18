import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../services/user.services.js"
import uploadOneService from '../../services/uploadOne.service'

const ProfileForm = ({ fireFinalActions, userDetails }) => {


    const [userData, setuserData] = useState({
        name: userDetails.name,
        surname: userDetails.surname,
        email: userDetails.email,
        profileImg: userDetails.profileImg,
        role: userDetails.role,
        description: userDetails.description,
        occupation: userDetails.occupation,
        bio: userDetails.bio
    })

    const [loadingImage, setLoadingImage] = useState(false)


    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setuserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editUser(userDetails._id, userData) // (user_id, user)
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
                setuserData({ ...userData, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { name, surname, email, profileImg, role, description, bio, occupation } = userData


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" value={surname} onChange={handleInputChange} name="surname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="profileImg">
                <Form.Label>Imagen perfil</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Quote</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={4} value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Ocupación</Form.Label>
                <Form.Control as="select" type="text" value={occupation} onChange={handleInputChange} name="occupation" >
                    {/* <Form.Select aria-label="Default select example"> */}
                    <option>Despliegue el menú</option>
                    <option value="Digital">Digital</option>
                    <option value="Education">Education</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Events">Events</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Foto">Foto</option>
                    <option value="Otro">Otro</option>
                    {/* </Form.Select> */}
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
                <Form.Control type="hidden" value={role} name="role" />
            </Form.Group>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'GUARDAR'}</Button>

        </Form>


    )
}

export default ProfileForm