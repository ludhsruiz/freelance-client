import { Container, Image } from "react-bootstrap"

const EventDetailCard = ({ title, description, date, img, location, price }) => {

    return (
        <>
            <Container>
                <h2>{title}</h2>
                <hr></hr>
                <Image className='roundedCircle thumbnail' src={img}></Image>
                <p>{location} - {price} €</p>
                <p>{date}</p>
                <hr></hr>
                <p>{description}</p>
                <hr></hr>
            </Container>
        </>
    )
}

export default EventDetailCard