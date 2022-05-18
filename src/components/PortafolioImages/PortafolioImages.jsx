import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
// import portafoliosService from "../../services/portafolios.service"
import PortafolioImagesForm from "../PortafolioImagesForm/PortafolioImagesForm"
// import DefaultImg from '../../public/default.svg'


const PortafolioImages = ({ _id, updataeImagesState, portafolioImages }) => {


    const [showBtn, setShowBtn] = useState('hidden')
    const [btnText, setBtnText] = useState('Editar imágenes')

    const [showModal, setShowModal] = useState(false)

    // EDIT IMAGES BTN
    const handleEditBtn = () => {
        btnText === 'Editar imágenes' ? setBtnText('Guardar') : setBtnText('Editar imágenes')
        showBtn === 'hidden' ? setShowBtn('myBtn') : setShowBtn('hidden')
    }

    const handleDeleteBtn = (imgUrl) => {

        const newImages = portafolioImages.filter(eachImage => {
            return eachImage !== imgUrl
        })

        updataeImagesState(newImages)

        // portafoliosService
        //     .deleteOneImage(_id, newImages)
            .then(({ data }) => updataeImagesState(data.images))
            .catch(err => console.log(err))
    }

    // const handleUploadImgBtn = () => setShowModal(true)
    const handleSaveImageBtn = () => setShowModal(false)

    const handleUploadImageBtn = () => {
        setShowModal(true)
    }

    return (


        <Container className="portafolioImages">

            {
                (portafolioImages.length === 0) &&
                <Row>
                    <Col sm={12}>
                        <img className="bigportafolioImg" src={DefaultImg} alt="default" />
                    </Col>
                </Row>
            }

            {
                (portafolioImages.length === 1) &&
                <Row>
                    <Col sm={12}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[0])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[0]} alt="portafolio" />
                    </Col>
                </Row>
            }

            {
                (portafolioImages.length === 2) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[0])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[0]} alt="portafolio" />
                    </Col>

                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[1])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[1]} alt="portafolio" />
                    </Col>
                </Row>
            }

            {
                (portafolioImages.length === 3) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[0])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[0]} alt="portafolio" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={12}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[1])}>Eliminar</Button>
                                <img className="smallportafolioImg mBottom" src={portafolioImages[1]} alt="portafolio" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <img className="smallportafolioImg mTop" src={portafolioImages[2]} alt="portafolio" />
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[2])}>Eliminar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

            {
                (portafolioImages.length === 4) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[0])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[0]} alt="portafolio" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[1])}>Eliminar</Button>
                                <img className="smallportafolioImg mBottom" src={portafolioImages[1]} alt="portafolio" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[2])}>Eliminar</Button>
                                <img className="smallportafolioImg mBottom" src={portafolioImages[2]} alt="portafolio" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <img className="smallportafolioImg mTop" src={portafolioImages[3]} alt="portafolio" />
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[3])}>Eliminar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

            {
                (portafolioImages.length === 5) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[0])}>Eliminar</Button>
                        <img className="bigportafolioImg" src={portafolioImages[0]} alt="portafolio" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[1])}>Eliminar</Button>
                                <img className="smallportafolioImg mBottom" src={portafolioImages[1]} alt="portafolio" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[2])}>Eliminar</Button>
                                <img className="smallportafolioImg mBottom" src={portafolioImages[2]} alt="portafolio" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <img className="smallportafolioImg mTop" src={portafolioImages[3]} alt="portafolio" />
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[3])}>Eliminar</Button>
                            </Col>
                            <Col sm={6}>
                                <img className="smallportafolioImg mTop" src={portafolioImages[4]} alt="portafolio" />
                                <Button className={showBtn} onClick={() => handleDeleteBtn(portafolioImages[4])}>Eliminar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
            <Button className={showBtn} onClick={handleUploadImageBtn}>Añadir imagen</Button>
            {isMine && <Button className="myBtn" onClick={handleEditBtn}>{btnText}</Button>}

            <Modal show={showModal} onHide={handleSaveImageBtn} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Subir imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <PortafolioImagesForm closeModal={handleSaveImageBtn} refreshDetails={getportafolioDetails} /> */}
                </Modal.Body>
            </Modal>

        </Container >
    )
}

export default portafolioImages