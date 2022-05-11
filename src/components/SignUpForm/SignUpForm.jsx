import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        surname: '',
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => {
                navigate('/inicio-sesion')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { name, surname, password, email } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="name" value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="surname" value={surname} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
            </Form.Group>

            <Button variant="dark" type="submit">Registrarse</Button>
        </Form>

    )
}

export default SignupForm