import { Row, Col } from "react-bootstrap"
import UserCard from "../../components/UserCard/UserCard"
import Loader from "../Loader/Loader"

const UsersList = ({ users }) => {

    return (

        users.length
            ?
            <Row>
                {
                    users.map(user => {
                        return (
                            <Col md={{ span: 4 }} key={user._id}>
                                <UserCard {...user} />
                            </Col>
                        )
                    })
                }

            </Row> :
            <Loader />
    )
}

export default UsersList
