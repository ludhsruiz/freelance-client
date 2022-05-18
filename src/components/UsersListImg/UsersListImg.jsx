import { Row, Col } from "react-bootstrap"
import Loader from "../Loader/Loader"
import UserCardImg from '../../components/UserCardImg/UserCardImg'

const UsersList = ({ users }) => {

    return (

        users.length
            ?
            <Row>
                {
                    users.map(user => {
                        return (
                            <Col key={user._id}>
                                <UserCardImg {...user} />
                            </Col>
                        )
                    })
                }
            </Row> :
            <Loader />
    )
}

export default UsersList
