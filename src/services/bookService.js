


export async function getAllBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/books');
    const books = await response.json();
    return books
}
export async function createBook(values) {

    const response = await fetch('http://localhost:3030/jsonstore/books', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(values)
    });
    const book = await response.json();
    return book;

}