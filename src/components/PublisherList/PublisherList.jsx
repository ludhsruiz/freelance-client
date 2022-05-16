import { Row, Col } from "react-bootstrap"
import PublisherCard from "../PublishersCard/Publisherscard"
import Loader from "../Loader/Loader"

const PublisherList = ({ publishers }) => {

    return (
        publishers.length
            ?
            <Row>
                {
                    publishers.map(publisher => {
                        return (
                            <Col md={{ span: 4 }} key={publisher._id}>
                                <PublisherCard {...publishers} />
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