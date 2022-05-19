import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MessageCard.css'
const MessageCard = ({ customMessage }) => {


    return (


        <Card>
            {customMessage?.map((message, index) => {
                return (

                    <Card.Header key={index}>
                        <span className='ms-text'>{message?.comment}</span>   <span className='ms-date'>{message?.createdAt.slice(0, 10)} | {message?.createdAt.slice(12, 16)}</span>
                    </Card.Header>
                )
            })

            }
            <Card.Body>

                <Card.Text className='messageSend'>Enviado por: {customMessage[0]?.sender.name}</Card.Text>

                <Link to={`/perfil/${customMessage[0]?.sender._id}`}> <Button variant="outline-dark">responder</Button></Link>
            </Card.Body>
        </Card>













    )
}

export default MessageCard



    // < Card >
    //         <Card.Header className='messageSend'>Enviado por: {customMessage[0]?.sender.name}</Card.Header>
    //         <Card.Body>
    //             <Card.Title></Card.Title>

    //             {customMessage?.map((message, index) => {
    //                 return (

    //                     <Card.Text key={index}>
    //                         {message?.comment} | {message?.createdAt.slice(0, 10)} | {message?.createdAt.slice(12, 16)}
    //                     </Card.Text>
    //                 )
    //             })

    //             }

    //             <Link to={`/perfil/${customMessage[0]?.sender._id}`}> <Button variant="primary">responder</Button></Link>
    //         </Card.Body>
    //     </Card >
