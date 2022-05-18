import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'


const CourseCard = ({ _id, name, description, date, img, location, price }) => {

    const { user , isLoggedIn } = useContext(AuthContext) 

    return (

        <Card className="CourseCard">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{date}</Card.Title>
                <Card.Text>{description}</Card.Text>
                 <div className="d-grid gap-2">                    
                    {isLoggedIn && <Link to={`/curso/${_id}`} className="btn btn-light">Ver detalles</Link> }     
                </div>
            </Card.Body>
        </Card>

    )
}

export default CourseCard