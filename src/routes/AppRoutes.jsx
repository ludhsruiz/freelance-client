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

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
            <Route path="/perfil/:id" element={<ProfilePage />} />
            <Route path="/usuarios" element={<UsersPage />} />

            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/curso/:id" element={<CoursesDetail />} />

            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/oferta/:id" element={<OffersDetail />} />

            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/evento/:id" element={<EventDetail />} />

            <Route path="/empresas" element={<PublishersPage />} />
        
            <Route path="/usuarios" element={<UsersPage />} />

            {/* <Route path='/pagar/:subscription_id' element={<PaymentPage />} /> */}


            <Route path="*" element={<h1>U GOT LOST, 404</h1>} />
        </Routes>
    )
}

export default AppRoutes