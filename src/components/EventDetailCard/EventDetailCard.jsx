import { Container, Image, Row, Col } from "react-bootstrap"


const EventDetailCard = ({ title, description, date, img, location, price }) => {

    return (
        <>
            <h2>{title}</h2>
            <hr></hr>
            <Row>
                <Col>
                    <Image className='roundedCircle thumbnail' src={img}></Image>
                </Col>
                <Col md={1}></Col>
                <Col>
                    <p>{location} - {price} €</p>
                    <p>{date}</p>
                    <hr></hr>
                    <p>{description}</p>
                </Col>
                <Col md={1}></Col>
            </Row>
        </>
    )
}

export default EventDetailCard