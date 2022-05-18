import './OfferDetailCard.css'


import { Container, Image, Row, Col } from "react-bootstrap"


const OfferDetailCard = ({ title, companyLogo, companyName, description }) => {

    return (


        <>
            <Col sm={9}>
                <h2>{title}</h2>
                <hr></hr>
                <Image className='offer-detailImg' src={companyLogo}></Image><h2>{companyName}</h2>
                <hr></hr>
                <p className='card-descp'>{description}</p>
            </Col>
            <Col sm={1}>
            </Col>
        </>




    )
}

export default OfferDetailCard