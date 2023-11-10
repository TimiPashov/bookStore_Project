import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



export default function EditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/books/' + id)
            .then(response => response.json())
            .then(setBook)
    }, [id]);

    useEffect(() => {
        setTitle(book.title || '');
        setAuthor(book.author || '');
        setGenre(book.genre || '');
        setYear(book.year || '');
        setPrice(book.price || '');
        setImageUrl(book.imageUrl || '');
        setDescription(book.description || '');
    }, [book]);



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



    return (
        <form onSubmit={(e) => onSubmit(e, id)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <input
                    type="text"
                    name="genre"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="imageUrl">ImageUrl</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
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