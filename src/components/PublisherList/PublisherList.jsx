import { Row, Col } from "react-bootstrap"
import PublisherCard from "../PublishersCard/Publisherscard"
import Loader from "../Loader/Loader"

const PublisherList = ({ publishers, loadPublishers }) => {

        console.log(publishers)
    return (
        publishers.length
            ?
            <Row>
                {
                    publishers.map(publisher => {
                        return (
                            <Col md={{ span: 4 }} key={publisher._id}>
                                <PublisherCard {...publisher} loadPublishers={loadPublishers}/>
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default PublisherList