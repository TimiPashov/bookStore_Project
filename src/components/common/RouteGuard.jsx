/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";



export function RouteGuard() {
    const { user } = useUserContext();
    const isAuthenticated = user?._id;
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />

}