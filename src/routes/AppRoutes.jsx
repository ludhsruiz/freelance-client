import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/HomePage/HomePage"
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import UsersPage from '../pages/UsersPage/UsersPage'
import CoursesPage from "../pages/CoursesPage/CoursesPage"
import CoursesDetail from "../pages/CourseDetailPage/CourseDetail"
import OffersPage from "../pages/OffersPage/OffersPage"
import OffersDetail from "../pages/OfferDetailPage/OfferDetail"
import EventsPage from "../pages/EventsPage/EventsPage"
import EventDetail from "../pages/EventDetailPage/EventDetail"
import PublishersPage from "../pages/PublishersPage/PublishersPage"
import ProfileAdmin from "../pages/ProfileAdmin/ProfileAdmin"
import PrivateRoute from "./PrivateRoute"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />

            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/empresas" element={<PublishersPage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/eventos" element={<EventsPage />} />

            <Route path="/perfil/:id" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>

            <Route path="/curso/:id" element={<PrivateRoute />}>
                <Route path="" element={<CoursesDetail />} />
            </Route>

            <Route path="/admin" element={<ProfileAdmin />} />

            <Route path="/oferta/:id" element={<PrivateRoute />}>
                <Route path="" element={<OffersDetail />} />
            </Route>

            <Route path="/evento/:id" element={<PrivateRoute />}>
                <Route path="" element={<EventDetail />} />
            </Route>

            <Route path="*" element={<h1>U GOT LOST, 404</h1>} />
        </Routes>
    )
}

export default AppRoutes



