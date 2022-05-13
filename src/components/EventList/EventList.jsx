import { Row, Col } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"
import Loader from "../Loader/Loader"

const EventsList = ({ events }) => {

    return (
        events.length
            ?
            <Row>
                {
                    events.map(event => {
                        return (
                            <Col md={{ span: 4 }} key={event._id}>
                                <EventCard {...event} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default EventsList