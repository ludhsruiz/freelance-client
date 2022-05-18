import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (



        <Navbar bg="light" variant="light" expand="lg">
            <Container className='navbar'>
                <Navbar.Brand href="/"><h1 className='logoNav'>LANCE<span className='blue'>LOT</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to="/ofertas" className="nav-link">OFERTAS</NavLink>
                        <NavLink to="/eventos" className="nav-link">EVENTOS</NavLink>
                        <NavLink to="/empresas" className="nav-link">EMPRESAS</NavLink>
                        <NavLink to="/cursos" className="nav-link">CURSOS</NavLink>
                        <NavLink to="/usuarios" className="nav-link">USUARIOS</NavLink>
                        <Nav>
                            {user?.role === 'ADMIN' && <NavLink to="/admin" className="nav-link justify-content-end">ADMIN</NavLink>}
                        </Nav>
                    </Nav>
                    <Nav>
                        {
                            isLoggedIn
                                ?
                                <NavLink to='/' className="nav-link" onClick={logOutUser}>Cerrar sesión</NavLink>
                                :
                                <>
                                    <NavLink to="/registro" className="nav-link">Registro</NavLink>
                                    <NavLink to="/inicio-sesion" className="nav-link">Iniciar sesión</NavLink>
                                </>
                        }

                        {
                            user && <NavLink to={`/perfil/${user._id}`} className="nav-link justify-content-end">Hola, {user.name}</NavLink>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>







    )
}

export default Navigation

