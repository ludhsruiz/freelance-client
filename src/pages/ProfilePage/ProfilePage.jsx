import { useContext } from 'react'
import { Container} from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'

const ProfilePage = () => {

    const {user} = useContext(AuthContext)
    return (
        <Container>
            <h1>Profile Page</h1>
            <hr />         
            {user?.role === 'ADMIN' && <h1>COMPONENTE ADMIN</h1>}   
            {user?.role === 'USER' && <h1>COMPONENTE USER</h1>}

        </Container>
    )
}

export default ProfilePage