import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'


const OfferCard = ({ _id, title, companyName, companyLogo, description }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    return (
        <Card className="OfferrCard">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={companyLogo} />
                <Card.Title>{companyName}</Card.Title>
                <Card.Text>{description.slice(0, 200)}</Card.Text>
                <div className="d-grid gap-2">
                    {isLoggedIn && <Link to={`/oferta/${_id}`} className="btn btn-light">Ver detalles</Link>}
                </div>
            </Card.Body>
        </Card>


    )
}

export default OfferCard