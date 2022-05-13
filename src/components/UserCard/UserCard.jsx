import './UserCard.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext } from "react"
import { Navigate, Link } from "react-router-dom"


const UserCard = ({ _id, name, profileImg, descirption, occupation }) => {

    const { isLoggedIn } = useContext(AuthContext)

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profileImg} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.

                </Card.Text>
                {isLoggedIn && <Link to={`/perfil/${_id}`} className="btn btn-dark">Ver detalles</Link>}
            </Card.Body>
        </Card>

    )
}

export default UserCard

// <Link to={`/detalles/${_id}`} className="btn btn-dark">Ver detalles</Link>

//     < Button component = { Link } to = "/new/location/" >
//         Click Me
// </Button >

//<Link to='/new/location/'>Click Me</Link>


