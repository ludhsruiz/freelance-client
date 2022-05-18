import './UserCardImg.css'
import { Card, } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext, } from "react"

const UserCard = ({ _id, name, profileImg, description, ocupation }) => {


    const { user, isLoggedIn } = useContext(AuthContext)

    return (

        <div className='imgUser-home' >
            <img src={profileImg} />
        </div>


    )
}

export default UserCard




