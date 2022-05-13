import { Button, Card } from "react-bootstrap"
// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'


const CourseCard = ({ _id, name, description, date, img, location, price }) => {

    const { user } = useContext(AuthContext)

    var monthNames = [ '01', '02', '03', '04' , '05', '06', '07', '08', '09' , '10','11', '12']
    var d = post.date.getDate();
    var m = monthNames[post.date.getMonth()];
    var y = post.date.getFullYear();
 

    return (
        <Card className="CourseCard">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{ d+ '' +m+ '' +y }</Card.Title>
                <Card.Text>{description}</Card.Text>
                 <div className="d-grid gap-2">
                    {/* <Link to={`/detalle/${_id}`} className="btn btn-light">Ver detalles</Link> */}
                    {/* {owner?? owner === user?._id && <Button variant='warning'>Editar</Button>}
                    {owner?? owner === user?._id && <Button variant='warning'>Delete</Button>} */}
                </div>
            </Card.Body>
       </Card>


    )
}

export default CourseCard