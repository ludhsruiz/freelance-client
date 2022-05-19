import { Container, Row, Modal, Button, Form, Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import './Followers.css'

import userService from '../../services/user.services'



const Followers = ({ id }) => {

    useEffect(() => loadFollowers(), [])

    const [followers, setFollowers] = useState([])

    const [following, setFollowing] = useState([])

    const loadFollowers = () => {
        userService
            .getFollowers(id)
            .then(({ data }) => {

                setFollowers(data)
                console.log('DATA= ', data)

            })
            .then(err => console.log(err))
    }

    return (

        <Row className='followers'>
            {
                followers.follower?.map((elm, index) => {

                    return (<Col key={elm._id} ><img className='thumRound' src={elm.profileImg} />
                        <span className='name'>{elm.name}</span></Col>)
                })
            }
        </Row>
    )
}

export default Followers

