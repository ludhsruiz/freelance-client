import { Container, Row, Modal, Button, Form, Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import './Following.css'

import userService from '../../services/user.services'



const Following = ({ id }) => {

    useEffect(() => loadFollowing(), [])

    const [followings, setFollowings] = useState([])

    const loadFollowing = () => {
        userService
            .getFollowing(id)
            .then(({ data }) => {

                setFollowings(data)

            })

            .then(err => console.log(err))
    }

    return (

        <Row className='followers'>
            {
                followings.following?.map((elm, index) => {

                    return (<Col key={elm._id} ><img className='thumRound' src={elm.profileImg} />
                        <span className='name'>{elm.name}</span></Col>)
                })

            }
        </Row>
    )
}

export default Following