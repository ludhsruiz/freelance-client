import { Button, Card, Image } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'
import './CourseCard.css'


const CourseCard = ({ _id, name, description, date, img, location, price }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const newDate = date.slice(0, 10) + ' - ' + date.slice(11, 16)
    const intro = description.slice(0, 140)

    return (

        <Card className="CourseCard">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Img src={img} className='img-course' />
                <Card.Title>{newDate}  </Card.Title>
                <Card.Text>{intro}  <b>leer más...</b></Card.Text>
                <div className="d-grid gap-2">
                    {isLoggedIn && <Link to={`/curso/${_id}`} className="btn btn-light">Ver detalles</Link>}
                </div>
            </Card.Body>
        </Card>

    )
}

export default CourseCard