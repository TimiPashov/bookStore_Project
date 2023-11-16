/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from '../services/userService'
import { loginHandler, registerHandler } from '../handlers/handlers'
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage('user');
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

    async function onLogout() {
        await logout(user.accessToken);
        setUser();
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