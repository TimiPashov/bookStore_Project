const baseURL = 'http://localhost:3030/users';


export async function login(userData) {
    const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
}

export async function register(userData) {
    const response = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    result.password = '';
    result.repass = '';

    return result;
}

export async function logout(token) {
   await fetch(`${baseURL}/logout`, {
        headers: {
            'X-Authorization': token
        }
    });
    // localStorage.clear();

}