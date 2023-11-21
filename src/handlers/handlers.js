
import { createBook } from "../services/bookService";
import { login, register } from "../services/userService";




export function onDetailsClick(state, setState) {

    setState(!state);
}

export async function loginHandler(data) {

    const result = await login(data);
    if (result.code === 403) {
        throw new Error(result.message)
    }
    return result;
}

export async function registerHandler(data) {
    if (data.password != data.repass) {
        throw { message: 'Passwords must match', code: 'missmatch' };
    }
    const result = await register(data);
    if (result.code === 409 || result.code === 400) {

        throw result
    }
    return result;
}

export async function createHandler(data, token) {

    if (Object.values(data).some(x => x === '')) {
        throw new Error('All fields required');
    }
    await createBook(data, token);

}