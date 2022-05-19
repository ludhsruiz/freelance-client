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
                <h1> EMPRESAS CON LAS QUE TRABAJAMOS </h1>
                <hr />
                <PublisherList publishers={publishers} loadPublishers={loadPublishers} />

            </Container>

        </>
    )
}

export default PublishersPage