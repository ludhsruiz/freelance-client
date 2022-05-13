import { Container, Image } from "react-bootstrap"

const CourseDetailCard = ({ name, description, date, img, location, price }) => {

    return (
        <>
            <Container>
                <h2>{name}</h2>
                <hr></hr>
                <Image className='roundedCircle thumbnail' src={img}></Image>
                <p>{location} - {price} €</p>
                <hr></hr>
                <p>{description}</p>
                <hr></hr>
            </Container>
        </>
    )
}

export default CourseDetailCard