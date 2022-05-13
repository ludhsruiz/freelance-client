import postsService from '../../services/posts.services'
import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import Loader from '../Loader/Loader'
import userEvent from '@testing-library/user-event'

const Messages = () => {

    const [recivedMessage, setrecivedMessage] = useState([])

    useEffect(() => loadMessage(), [])

    const loadMessage = () => {

        postsService
            .getPosts()

            .then(({ data }) => {
                setrecivedMessage(data)
            })
            .then(err => console.log(err))
    }

    return (
        recivedMessage.length ?
            <>
                <h4>Mensajes recibidos</h4>


                {recivedMessage.map(message => {

                    return (
                        <Col md={{ span: 4 }} key={message._id}>

                            <p>{message.comment} : {message.sender.name} {message.sender._id}</p>

                        </Col>
                    )
                })}

            </>
            : <Loader />
    )
}

export default Messages