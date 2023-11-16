/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from '../services/userService'
import { loginHandler, registerHandler } from '../handlers/handlers'

export const UserContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    async function onLoginSubmit(e, data) {
        e.preventDefault();
        try {
            const result = await loginHandler(data);
            setUser(result);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    async function onRegisterSubmit(e, data) {
        e.preventDefault();
        try {
            const result = await registerHandler(data);
            setUser(result);
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    function onLogout() {
        logout(user.accessToken);
        // navigate('/');
    }

    return (
        <UserContext.Provider value={{ onRegisterSubmit, onLogout, onLoginSubmit, user }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const context = useContext(UserContext);
    return context;
}