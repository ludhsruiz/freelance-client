import { Button, Modal, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate, useState } from "react"
import { AuthContext } from './../../context/auth.context'
import PublisherEditForm from '../../components/PubisherEditForm/PublisherEditForm'
import publisherService from '../../services/publisher.services'


const PublisherCard = ({ _id, name, contacto, companyLogo, description, loadPublishers  }) => {

    const { user } = useContext(AuthContext)

    const publisherData = { _id, name, contacto, companyLogo, description}

    // const [publishers, setPublishers] = useState([])
    const [showModalEdit, setShowModalEdit] = useState(false)

    const openModalEdit = () => setShowModalEdit(true)
    const closeModalEdit = () => setShowModalEdit(false)

    // const navigate = useNavigate()

    // const handleDeleteEventBtn = id => {
    //     publisherService
    //         .deletePublisher(id)
    //         .then(() => navigate('/empresas'))
    //         .catch(err => console.log(err))
    // }

    const fireFinalActionsEdit = () => {
        closeModalEdit()
        loadPublishers()
        // showMessage('CourseCreated')
    }


    return (
        <Card className="PublisherCard">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{contacto}</Card.Title>
                <Card.Text>{description}</Card.Text>
                 <div className="d-grid gap-2">
                 <Button onClick={openModalEdit}>Edit</Button>
                 {/* <Button className='myBtn' onClick={handleDeleteEventBtn}>Eliminar</Button> */}

                    {/* {owner?? owner === user?._id && <Button variant='warning'>Editar</Button>}
                    {owner?? owner === user?._id && <Button variant='warning'>Delete</Button>} */}
                </div>
            </Card.Body>

               <Modal show={showModalEdit} onHide={closeModalEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PublisherEditForm fireFinalActionsEdit={fireFinalActionsEdit} publishers={publisherData} />
                </Modal.Body>
            </Modal>

        </Card>


    )
}

export default PublisherCard


