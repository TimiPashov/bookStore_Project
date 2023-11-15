
const baseURL = 'http://localhost:3030/data/books';

export async function getAllBooks() {
    const response = await fetch(baseURL);
    const books = await response.json();
    return books
}

export async function getBookById(id){
    const response = await fetch(`${baseURL}/${id}`);
    const book = await response.json();
    return book;
}
export async function createBook(values) {

    const response = await fetch(baseURL, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(values)
    });
    const book = await response.json();
    return book;

}

export async function editBook( { title, author, genre, year, price, imageUrl, description }, id) {
    const newBook = { title, author, genre, year, price, imageUrl, description, _id: id };
    await fetch(`${baseURL}/${id}`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(newBook)
    });

}

export async function deleteBook(id){
    await fetch(`${baseURL}/${id}`, {
        method: 'delete',
    });
}