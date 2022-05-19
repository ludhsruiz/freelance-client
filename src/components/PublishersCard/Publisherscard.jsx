import { Button, Modal, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from "react"
import { AuthContext } from './../../context/auth.context'
import PublisherEditForm from '../../components/PubisherEditForm/PublisherEditForm'
import publisherService from '../../services/publisher.services'
import { Navigate } from "react-router-dom"
import { Trash3, Pencil } from 'react-bootstrap-icons'
import './PublishersCard.css'



const PublisherCard = ({ _id, name, contacto, companyLogo, description, loadPublishers }) => {

    const { user } = useContext(AuthContext)

    const publisherData = { _id, name, contacto, companyLogo, description }

    const [publisher, setPublisher] = useState([])
    const [showModalEdit, setShowModalEdit] = useState(false)

    const openModalEdit = () => setShowModalEdit(true)
    const closeModalEdit = () => setShowModalEdit(false)

    const handleDeleteEventBtn = () => {
        publisherService
            .deletePublisher(_id)
            .then(() => Navigate('/empresas'))
            .catch(err => console.log(err))
    }

    const fireFinalActionsEdit = () => {
        closeModalEdit()
        loadPublishers()
        // showMessage('CourseCreated')
    }


    return (
        <Card className="PublisherCard">
            <Card.Header >{name}</Card.Header>
            <Card.Body>
                <Card.Title><img src={companyLogo} className='companyLogo' /> {contacto}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="d-grid gap-2">
                    {(publisher.owner === user?._id || user.role === 'ADMIN') &&
                        <><Button variant='outline-dark' onClick={openModalEdit}><Pencil /></Button><Button variant='outline-dark' onClick={handleDeleteEventBtn}><Trash3 /></Button></>}

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


