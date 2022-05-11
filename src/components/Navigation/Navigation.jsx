import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
// import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">FREELANCER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">INICIO</NavLink>

                        {
                            isLoggedIn
                                ?
                                <div className="nav-link" onClick={logOutUser}>Cerrar sesión</div>
                                :
                                <>
                                    <NavLink to="/registro" className="nav-link">Registro</NavLink>
                                    <NavLink to="/inicio-sesion" className="nav-link">Iniciar sesión</NavLink>
                                </>
                        }

                        {
                            user && <NavLink to="/perfil" className="nav-link justify-content-end">Hola, {user.username}</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

