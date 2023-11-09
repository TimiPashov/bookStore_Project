export async function getAllBooks(){
    const response = await fetch('http://localhost:3030/jsonstore/books');
    const books = await response.json();
    return books
}