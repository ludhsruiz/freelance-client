import postsService from '../../services/posts.services'
import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import Loader from '../Loader/Loader'
import userEvent from '@testing-library/user-event'
import MessageCard from '../MessageCard/MessageCard'

const Messages = () => {

    const [recivedMessage, setrecivedMessage] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => loadMessage(), [])

    const loadMessage = () => {

        postsService
            .getPosts()
            .then(({ data }) => {
                setrecivedMessage(data)
                setLoaded(true)
            })
            .then(err => console.log(err))
    }

    return (


        recivedMessage[0]?.[0] ?
            <>
                <h4>Mensajes recibidos</h4>
                {
                    recivedMessage.map((message, index) => {

                        return (
                            <div key={index}>
                                <MessageCard customMessage={message} />
                                <br></br>
                            </div>

                        )

                    })
                }

            </>
            : <h3>SIN MENSAJES</h3>
    )
}

export default Messages
