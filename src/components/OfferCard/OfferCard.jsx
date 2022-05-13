import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'


const OfferCard = ({ _id, title, companyName, companyLogo, description }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className="OfferrCard">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{companyName}</Card.Title>
                <Card.Text>{description}</Card.Text>
                 <div className="d-grid gap-2">
                    <Link to={`/oferta/${_id}`} className="btn btn-light">Ver detalles</Link>
                    {/* {owner?? owner === user?._id && <Button variant='warning'>Editar</Button>}
                    {owner?? owner === user?._id && <Button variant='warning'>Delete</Button>} */}
                </div>
            </Card.Body>
       </Card>


    )
}

export default OfferCard