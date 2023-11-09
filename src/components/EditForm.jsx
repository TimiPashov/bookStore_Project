import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllBooks } from '../services/bookService';
import { useEffect, useState } from 'react';



export default function EditForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({});

    async function onSubmit(e, id) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newBook = Object.fromEntries(formData);
        newBook._id = id;

        const response = await fetch('http://localhost:3030/jsonstore/books/' + id, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(newBook)
        });
        navigate('/details/' + id)
        return response
    }

    useEffect(()=>{
        fetch('http://localhost:3030/jsonstore/books/' + id)
        .then(response => response.json())
        .then(setBook)
    }, [id])
    return (
        <form onSubmit={(e) => onSubmit(e, id)}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={book.title} />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" defaultValue={book.author} />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" defaultValue={book.genre} />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input type="text" name="year" id="year" defaultValue={book.year} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" defaultValue={book.price} />
            </div>
            <div>
                <label htmlFor="imageUrl">ImageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl" defaultValue={book.imageUrl} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" id="description" defaultValue={book.description} />
            </div>

            <div style={{ padding: '15px' }}>
                <div>
                    <button type='submit'>Submit</button>
                </div>
                <div>
                    <Link to={'/details/' + id}>Back</Link>
                </div>
            </div>
        </form>
    );
}