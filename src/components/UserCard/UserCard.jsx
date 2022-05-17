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

    console.log(user._id, '--- logeado', _id, '---pagina')


    // useEffect(() => {
    //     user._id && checkIfFollowed()
    // }, [_id])

    
    const checkIfFollowed = () => {
        userService
            .getUser(_id)
            .then(({ data }) => {

                let foundUser = ''

                console.log('...', data)
                data?.following.forEach(elm => {
                    if (elm._id === user._id) {
                        foundUser = elm._id
                    }
                })

                if (foundUser !== '') {
                    setIsFollowing(true)
                    setBtnState('Unfollow')
                } else {
                    setIsFollowing(false)
                    setBtnState('Follow')
                }
            })
    }


    const handleFollowBtn = () => {

        if (!isFollowing) {
            userService
                .followUser(_id)
                .then(() => {
                    setIsFollowing(true)
                    setBtnState('Unfollow')
                })
                .catch(err => console.log(err))
        } else if (isFollowing) {
            userService
                .unfollowUser(_id)
                .then(() => {
                    setIsFollowing(false)
                    setBtnState('Follow')
                })
                .catch(err => console.log(err))
        }
    }


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
                <FollowBtn btnState={btnState} handleFollowBtn={handleFollowBtn} />
            </Card.Body>
        </Card>

    )
}

export default UserCard




