import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/HomePage/HomePage"
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import CoursesPage from "../pages/CoursesPage/CoursesPage"
import OffersPage from "../pages/OffersPage/OffersPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import PublishersPage from "../pages/PublishersPage/PublishersPage"

import UsersPage from '../pages/UsersPage/UsersPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/empresas" element={<PublishersPage />} />

            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="*" element={<h1>U GOT LOST, 404</h1>} />
        </Routes>
    )
}

export default AppRoutes