
const baseURL = 'http://localhost:3030/data/books';

export async function getAllBooks() {
    const response = await fetch(baseURL);
    const books = await response.json();
    return books
}

export async function getBookById(id) {
    const response = await fetch(`${baseURL}/${id}`);
    const book = await response.json();
    return book;
}
export async function createBook(values, token) {

    const response = await fetch(baseURL, {
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        method: 'post',
        body: JSON.stringify(values)
    });
    const book = await response.json();
    return book;

}

export async function editBook({ title, author, genre, year, price, imageUrl, description }, id, token) {
    const newBook = { title, author, genre, year, price, imageUrl, description };
    const response = await fetch(`${baseURL}/${id}`, {
        method: 'put',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(newBook)
    });
    return response.json();
}

export async function deleteBook(id, token) {
    await fetch(`${baseURL}/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}