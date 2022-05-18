import { useContext, useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'



const Loginform = () => {

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { user, storeToken, authenticateUser } = useContext(AuthContext)

    useEffect(() => {
        user?._id && triggerUser()
    }, [user])
    const handleSubmit = e => {
        e.preventDefault()
        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }
    const triggerUser = () => {
        if (user.role === 'ADMIN') {
            navigate('/admin')
        } else {
            navigate(`/perfil/${user._id}`)
        }
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
            </Form.Group>

            <Button variant="dark" type="submit">Acceder</Button>
        </Form>

    )
}

export default Loginform