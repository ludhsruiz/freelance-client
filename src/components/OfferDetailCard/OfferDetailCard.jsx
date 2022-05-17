import { Container, Image } from "react-bootstrap"

const OfferDetailCard = ({ title, companyLogo, companyName, description }) => {

    return (
        
            <Container>
                <h2>{title}</h2>
                <hr></hr>
                <Image className='roundedCircle thumbnail' src={companyLogo}></Image><h2>{companyName}</h2>
                <hr></hr>
                <p>{description}</p>
                <hr></hr>
            </Container>
        
    )
}

export default OfferDetailCard