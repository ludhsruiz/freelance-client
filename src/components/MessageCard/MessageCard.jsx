import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MessageCard = ({ customMessage }) => {


    return (

        <Card>
            <Card.Header>Enviado por: {customMessage[0]?.sender.name}</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>

                {customMessage?.map((message, index) => {
                    return (

                        <Card.Text key={index}>
                            {message?.comment}
                        </Card.Text>
                    )
                })

                }

                <Link to={`/perfil/${customMessage[0]?.sender._id}`}> <Button variant="primary">responder</Button></Link>
            </Card.Body>
        </Card>

    )
}

export default MessageCard
