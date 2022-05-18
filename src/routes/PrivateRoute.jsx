import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import Loader from "../components/Loader/Loader"


const PrivateRoute = () => {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        return <Navigate to='/' />
    }

    return <Outlet />
}

export default PrivateRoute