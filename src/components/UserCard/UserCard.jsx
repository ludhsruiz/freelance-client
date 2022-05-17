import './UserCard.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { Navigate, Link, useParams } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import FollowBtn from "../FollowBtn/FollowBtn"
import userService from '../../services/user.services'

const UserCard = ({ _id, name, profileImg, descirption, occupation }) => {


    const { user, isLoggedIn } = useContext(AuthContext)

    const [isFollowing, setIsFollowing] = useState()
    const [btnState, setBtnState] = useState('Cargando...')




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




