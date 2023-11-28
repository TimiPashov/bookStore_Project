/* eslint-disable react/prop-types */
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useBookContext } from "../../contexts/BookContext";
import { useEffect, useState } from "react";

export function RouteGuard({ children }) {
    const { user } = useUserContext();
    const { books } = useBookContext();
    const { id } = useParams();
    const isAuthenticated = user?.accessToken;
    const [book, setBook] = useState({});
    useEffect(() => {
        const book = books.find(b => b._id === id);
        setBook(book);
    }, [books, id]);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    } else {
        if (id) {
            const isOwner = user._id === book._ownerId;
            return !isOwner && <Navigate to={`/details/${id}`} />;
        }
        
    }

    return children ? children : <Outlet />

}