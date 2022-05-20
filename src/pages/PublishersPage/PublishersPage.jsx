import { Container, Modal, Button } from 'react-bootstrap'
import PublisherList from '../../components/PublisherList/PublisherList'
import { useEffect, useState } from "react"
import publisherService from '../../services/publisher.services'
// import { MessageContext } from './../../context/message.context'


const PublishersPage = () => {


    const [publishers, setPublishers] = useState([])

    useEffect(() => loadPublishers(), [])

    const loadPublishers = () => {
        publisherService
            .getPublishers()
            .then(({ data }) => setPublishers(data))
            .then(err => console.log(err))
    }

    // const { showMessage } = useContext(MessageContext)

    return (
        <>
            <Container className='mt-5'>
                <h1 className='blue-color'> EMPRESAS CON LAS QUE TRABAJAMOS </h1>
                <h3 className='grey-color'> Nuestros colaboradores y algunas empresas que publican eventos u ofertas de trabajo .<br></br>
                    Si eres tanto un startup como una gran empresa estamos deseando oir hablar de ti, registrate como usuario y manda un mensaje al administrador.<br></br>
                    Join Us.</h3>
                <hr />
                <PublisherList publishers={publishers} loadPublishers={loadPublishers} />

            </Container>

        </>
    )
}

export default PublishersPage