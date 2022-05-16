import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'




const PublisherCard = ({ _id, name, contacto, companyLogo, description }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className="PublisherCard">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{contacto}</Card.Title>
                <Card.Text>{description}</Card.Text>
                 <div className="d-grid gap-2">
                    {/* {owner?? owner === user?._id && <Button variant='warning'>Editar</Button>}
                    {owner?? owner === user?._id && <Button variant='warning'>Delete</Button>} */}
                </div>
            </Card.Body>
       </Card>


    )
}

export default PublisherCard


