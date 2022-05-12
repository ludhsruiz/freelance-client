import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/HomePage/HomePage"
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import CoursesPage from "../pages/CoursesPage/CoursesPage"
import OffersPage from "../pages/OffersPage/OffersPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import PublishersPage from "../pages/PublishersPage/PublishersPage"
<<<<<<< HEAD
=======
import OffersDetail from "../pages/OfferDetailPage/OfferDetail"

>>>>>>> c63fdd9a63d8a5edec0a90ef78feb1aa0943d178
import UsersPage from '../pages/UsersPage/UsersPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
<<<<<<< HEAD
            <Route path="/perfil/:id" element={<ProfilePage />} />
=======
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/perfil" element={<ProfilePage />} />

>>>>>>> c63fdd9a63d8a5edec0a90ef78feb1aa0943d178
            <Route path="/cursos" element={<CoursesPage />} />

            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/detalle/:id" element={<OffersDetail/>} />

            <Route path="/eventos" element={<EventsPage />} />

            <Route path="/empresas" element={<PublishersPage />} />
<<<<<<< HEAD
            <Route path="/usuarios" element={<UsersPage />} />
=======

>>>>>>> c63fdd9a63d8a5edec0a90ef78feb1aa0943d178
            <Route path="*" element={<h1>U GOT LOST, 404</h1>} />
        </Routes>
    )
}

export default AppRoutes