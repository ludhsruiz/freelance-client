import './HomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import offersService from '../../services/offers.services'
import OfferList from '../../components/OfferList/OfferList'
import eventsService from '../../services/events.services'
import EventsList from '../../components/EventList/EventList'
import userService from '../../services/user.services'
import UsersListImg from '../../components/UsersListImg/UsersListImg'



const IndexPage = () => {

    const [offers, setOffers] = useState([])
    const [events, setEvents] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => loadUsers(), [])

    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => {
                setUsers(data)
            })
            .then(err => console.log(err))
    }


    useEffect(() => loadOffers(), [])

    const loadOffers = () => {
        offersService
            .getAllOffers()
            .then(({ data }) => setOffers(data.slice(0, 3)))
            .then(err => console.log(err))
    }

    useEffect(() => loadEvents(), [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data.slice(0, 3)))
            .then(err => console.log(err))
    }

    return (
        <Container className='spacer'>
            <Row className='mb-3'>

                <Col md-6>
                    <h1 className='blue-color'>Conectando personas</h1>

                    <h3 className='grey-color'>conecta empresas con profesionales independientes y agencias de todo el mundo. Donde empresas y autónomos trabajan juntos de nuevas formas que...</h3>
                    <br></br>
                </Col>
                <Col></Col>
            </Row>
            <Row >

                <hr />
                <br></br>
                <h3>ÚLTIMAS OFERTAS</h3>
                <Col className='mt-3'>
                    <OfferList offers={offers} />
                </Col>
            </Row>
            <Row className='mt-3'>

                <hr />
                <br></br>
                <h3>ÚLTIMAS EVENTOS</h3>
                <Col className='mt-3'>
                    <EventsList events={events} />
                </Col>
            </Row>
            <Row className='mt-3'>

                <hr />
                <br></br>
                <h3>USUARIOS</h3>
                <Col className='mt-3'>
                    <p>Contamos con más de {users.length} Freelance</p>
                    <UsersListImg users={users} />

                </Col>
            </Row>


        </Container>
    )
}

export default IndexPage






// const HomePage = () => {

//     const [villages, setVillages] = useState([])

//     const [showSignUpModal, setShowSignUpModal] = useState(false)
//     const [signUpForm, setSignUpForm] = useState('pueblo')

//     useEffect(() => {
//         getVillages()
//     }, [])

//     const getVillages = () => {
//         villagesService
//             .getAllVillages()
//             .then(({ data }) => {
//                 setVillages(data.splice(0, 3))
//             })
//             .catch(err => console.log(err))
//     }

//     const openSignUpModal = () => setShowSignUpModal(true)
//     const handleSignUpModal = () => setShowSignUpModal(false)

//     const changeSignUpForm = () => {
//         signUpForm === 'usuario' && setSignUpForm('pueblo')
//         signUpForm === 'pueblo' && setSignUpForm('usuario')
//     }

//     return (
//         <section>
//             <Container >
//                 <div className="hero">
//                     <img className="bgImg" src={bgImage}></img>
//                 </div>
//                 <div className="center">
//                     <VillagesFilter />
//                 </div>
//                 <section className="firstSection">
//                     <Container className="firstSectionFlex">

//                         <h2 className="h2Weight">¿Eres un pueblo?</h2>
//                         <h3 className="h3Weight">Regístrate ahora para darte a conocer y llena tu pueblo de vida.</h3>


//                         <Button className="big-btn" onClick={openSignUpModal}>Regístrate</Button>

//                         <Modal className="my-modal" centered='true' show={showSignUpModal} onHide={handleSignUpModal} size="lg">
//                             <Modal.Body scrollable='true'>
//                                 {signUpForm === 'usuario' && <UserSignupPage closeModal={handleSignUpModal}></UserSignupPage>}
//                                 {signUpForm === 'pueblo' && <VillageSignupPage closeModal={handleSignUpModal}></VillageSignupPage>}
//                                 <div className='modalBtnDiv'>
//                                     {signUpForm === 'usuario' && <p>¿Eres un pueblo? <Button className='hereBtn' onClick={changeSignUpForm}>Regístrate aquí</Button></p>}
//                                     {signUpForm === 'pueblo' && <p>¿Eres un usuario? <Button className='hereBtn' onClick={changeSignUpForm}>Regístrate aquí</Button></p>}
//                                 </div>
//                             </Modal.Body>
//                         </Modal>

//                     </Container>
//                 </section>
//                 <section className="secondSection">
//                     <Container className="secondSectionFlex">
//                         <h2 className="h2Weight">Descubre pueblos</h2>
//                         <h3 className="h3Weight">con todo lo que necesitas</h3>
//                         <div className="villagesSubSection">
//                             <Row>
//                                 <MyFollowedVillages followedVillages={villages} size={4} />
//                             </Row>
//                         </div>
//                     </Container>
//                 </section>
//             </Container >

//         </section >
//     )
// }

// export default HomePage