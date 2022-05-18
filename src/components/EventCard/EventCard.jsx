import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'


const EventCard = ({ _id, title, date, location, img, price, description }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    return (
        <Card className="OfferrCard">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} className='img-card' />

                <Card.Title>{date.slice(0, 10)} --- {location}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="d-grid gap-2">
                    {isLoggedIn && <Link to={`/evento/${_id}`} className="btn btn-light">Ver detalles</Link>}
                </div>
            </Card.Body>
        </Card>

    )
}

export default EventCard

