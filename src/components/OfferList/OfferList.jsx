import { Row, Col } from "react-bootstrap"
import OfferCard from "../OfferCard/OfferCard"
import Loader from "../Loader/Loader"

const OfferList = ({ offers }) => {

    return (
        offers.length
            ?
            <Row>
                {
                    offers.map(offer => {
                        return (
                            <Col md={{ span: 4 }} key={offer._id}>
                                <OfferCard {...offer} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default OfferList