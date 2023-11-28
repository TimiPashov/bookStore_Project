/* eslint-disable react/prop-types */
import { Navigate, Outlet} from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";


export function LoggedInGuard({ children }) {
    const { user } = useUserContext();
    const isAuthenticated = user?.accessToken;
    

    if (isAuthenticated) {
        return <Navigate to="/" />
    } 

    return children ? children : <Outlet />

}