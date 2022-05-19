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
            // .getFollowing(id)
            // .then(({ data }) => {

            //     setFollowing(data)

            //     console.log('Following= ', data)
            // })
            .then(err => console.log(err))
    }

    return (

        <div>
            {


                followers.follower?.map((elm, index) => {

                    return (<Col key={elm._id}><img className='thumRound' src={elm.profileImg} /> <span>{elm.name}</span></Col>)
                })
            }
        </div>
    )
}

export default Followers