import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/HomePage/HomePage"
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from "../pages/LoginPage/LoginPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
            <Route path="*" element={<h1>U GOT LOST, 404</h1>} />
        </Routes>
    )
}

export default AppRoutes