import { Container, Modal, Button } from 'react-bootstrap'
import UsersList from '../../components/UsersList/UsersList'
import { useEffect, useState } from "react"
import userService from '../../services/user.services'
//import { AuthContext } from './../../context/auth.context'

const UsersPage = () => {

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


    return (
        <>
            <Container>
                <h1>Todos los Usuarios</h1>
                <hr />
                <UsersList users={users} />
                <hr />
            </Container>
        </>
    )
}

export default UsersPage