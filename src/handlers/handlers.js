import { login, register } from "../services/userService";



export function onDetailsClick(state, setState) {

    setState(!state);
}

export async function loginHandler(data) {
    try {
        const result = await login(data);
        if (result.code === 403) {
            throw new Error(result.message)
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function registerHandler(data) {
    try {
        const result = await register(data);
        if (result.code === 409) {
            throw new Error(result.message)
        }      
        return result;
    } catch (err) {
        console.log(err)
    }
}