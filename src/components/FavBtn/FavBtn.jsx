import { Button } from "react-bootstrap"
import './FavBtn.css'

const FavBtn = ({ btnState, handleFavBtn }) => {

    return (
        <Button className='myBtn' variant="dark" onClick={handleFavBtn}>{btnState}</Button>
    )
}

export default FavBtn



// import { useContext, useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import FavBtn from "../../components/FavBtn/FavBtn"
// import { AuthContext } from "../../context/auth.context"
// import { Container, Col, Row, Button, Modal } from 'react-bootstrap'



//     const [details, setdetails] = useState({})
//     const [isLoaded, setIsLoaded] = useState(false)

//     const [isFav, setIsFav] = useState()
//     const [btnState, setBtnState] = useState('Cargando...')


//     const { _id } = useParams()
//     const { user } = useContext(AuthContext)


    // useEffect(() => {
    //     houseDetails.name && checkIfFav()
    // }, [user, houseDetails])



    // const checkIfFav = () => {
    //     userService
    //         .getUserDetails()
    //         .then(({ data }) => {

    //             let foundFavHouse = ''

    //             data?.favHouses.forEach(elm => {
    //                 if (elm.name === houseDetails.name) {
    //                     foundFavHouse = elm.name
    //                 }
    //             })

    //             if (foundFavHouse !== '') {
    //                 setIsFav(true)
    //                 setBtnState('Eliminar de favoritos')
    //             } else {
    //                 setIsFav(false)
    //                 setBtnState('Añadir a favoritos')
    //             }
    //         })
    // }


//     const handleFavBtn = () => {

//         if (!isFav) {
//             housesService
//                 .addHouseToFavs(house_id)
//                 .then(() => {
//                     setIsFav(true)
//                     setBtnState('Eliminar de favoritos')
//                 })
//                 .catch(err => console.log(err))
//         } else if (isFav) {
//             housesService
//                 .substractHouseFromFavs(house_id)
//                 .then(() => {
//                     setIsFav(false)
//                     setBtnState('Añadir a favoritos')
//                 })
//                 .catch(err => console.log(err))
//         }
//     }



//     const navigate = useNavigate()


//     return (
//         <Container>
//             
//                 <Col sm={3}>
//                     <FavBtn btnState={btnState} handleFavBtn={handleFavBtn} />
//                 </Col>
//             </Row>

//            

//         </Container>
//     )
// }

