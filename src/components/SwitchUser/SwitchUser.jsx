import { Button, Form } from 'react-bootstrap'
import userService from "../../services/user.services.js"
import { useState } from "react"

const SwitchUser = ({ userDetails }) => {


    const { role } = userDetails
    const [userRole, setuserRole] = useState({
        role: role
    })

    const handleInputChange = e => {
        const { value } = e.currentTarget
        setuserRole({ role: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Handler= ', userRole)
        userService
            .editUserRole(userDetails._id, userRole) // (user_id, user)
            .then(response => {

            })
            .catch(err => console.log(err))
    }



    return (

        <Form onSubmit={handleSubmit}>

            <Form.Control as="select" type="text" value={role} onChange={handleInputChange} name="role" >
                <option value="USER">Seleccione un Rol</option>
                <option value="USER">User</option>
                <option value="PUBLISHER">Publisher</option>
                <option value="ADMIN">Admin</option>
            </Form.Control>
            <Button variant="dark" type="submit">Guardar</Button>
        </Form>






    )
}

export default SwitchUser
