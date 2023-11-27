import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export function RouteGuard({ children }) {
    const { user } = useUserContext();
    const isAuthenticated = user?.accessToken;
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children ? children : <Outlet />

}